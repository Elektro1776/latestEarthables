define('ghost-admin/models/post', ['exports', 'ember', 'ember-computed', 'ember-service/inject', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships', 'ghost-admin/mixins/validation-engine'], function (exports, _ember, _emberComputed, _emberServiceInject, _emberDataModel, _emberDataAttr, _emberDataRelationships, _ghostAdminMixinsValidationEngine) {

    // ember-cli-shims doesn't export these so we must get them manually
    var Comparable = _ember['default'].Comparable;
    var _compare = _ember['default'].compare;

    function statusCompare(postA, postB) {
        var status1 = postA.get('status');
        var status2 = postB.get('status');

        // if any of those is empty
        if (!status1 && !status2) {
            return 0;
        }

        if (!status1 && status2) {
            return -1;
        }

        if (!status2 && status1) {
            return 1;
        }

        // We have to make sure, that scheduled posts will be listed first
        // after that, draft and published will be sorted alphabetically and don't need
        // any manual comparison.

        if (status1 === 'scheduled' && (status2 === 'draft' || status2 === 'published')) {
            return -1;
        }

        if (status2 === 'scheduled' && (status1 === 'draft' || status1 === 'published')) {
            return 1;
        }

        return _compare(status1.valueOf(), status2.valueOf());
    }

    function publishedAtCompare(postA, postB) {
        var published1 = postA.get('publishedAtUTC');
        var published2 = postB.get('publishedAtUTC');

        if (!published1 && !published2) {
            return 0;
        }

        if (!published1 && published2) {
            return -1;
        }

        if (!published2 && published1) {
            return 1;
        }

        return _compare(published1.valueOf(), published2.valueOf());
    }

    exports['default'] = _emberDataModel['default'].extend(Comparable, _ghostAdminMixinsValidationEngine['default'], {
        validationType: 'post',

        uuid: (0, _emberDataAttr['default'])('string'),
        title: (0, _emberDataAttr['default'])('string', { defaultValue: '' }),
        slug: (0, _emberDataAttr['default'])('string'),
        markdown: (0, _emberDataAttr['default'])('string', { defaultValue: '' }),
        html: (0, _emberDataAttr['default'])('string'),
        image: (0, _emberDataAttr['default'])('string'),
        featured: (0, _emberDataAttr['default'])('boolean', { defaultValue: false }),
        page: (0, _emberDataAttr['default'])('boolean', { defaultValue: false }),
        status: (0, _emberDataAttr['default'])('string', { defaultValue: 'draft' }),
        language: (0, _emberDataAttr['default'])('string', { defaultValue: 'en_US' }),
        metaTitle: (0, _emberDataAttr['default'])('string'),
        metaDescription: (0, _emberDataAttr['default'])('string'),
        author: (0, _emberDataRelationships.belongsTo)('user', { async: true }),
        authorId: (0, _emberDataAttr['default'])('number'),
        updatedAtUTC: (0, _emberDataAttr['default'])('moment-utc'),
        updatedBy: (0, _emberDataAttr['default'])(),
        publishedAtUTC: (0, _emberDataAttr['default'])('moment-utc'),
        publishedBy: (0, _emberDataRelationships.belongsTo)('user', { async: true }),
        createdAtUTC: (0, _emberDataAttr['default'])('moment-utc'),
        createdBy: (0, _emberDataAttr['default'])(),
        tags: (0, _emberDataRelationships.hasMany)('tag', {
            embedded: 'always',
            async: false
        }),
        url: (0, _emberDataAttr['default'])('string'),

        config: (0, _emberServiceInject['default'])(),
        ghostPaths: (0, _emberServiceInject['default'])(),
        timeZone: (0, _emberServiceInject['default'])(),
        clock: (0, _emberServiceInject['default'])(),

        absoluteUrl: (0, _emberComputed['default'])('url', 'ghostPaths.url', 'config.blogUrl', function () {
            var blogUrl = this.get('config.blogUrl');
            var postUrl = this.get('url');
            return this.get('ghostPaths.url').join(blogUrl, postUrl);
        }),

        previewUrl: (0, _emberComputed['default'])('uuid', 'ghostPaths.url', 'config.blogUrl', 'config.routeKeywords.preview', function () {
            var blogUrl = this.get('config.blogUrl');
            var uuid = this.get('uuid');
            var previewKeyword = this.get('config.routeKeywords.preview');
            // New posts don't have a preview
            if (!uuid) {
                return '';
            }
            return this.get('ghostPaths.url').join(blogUrl, previewKeyword, uuid);
        }),

        scratch: null,
        titleScratch: null,

        // Computed post properties

        isPublished: (0, _emberComputed.equal)('status', 'published'),
        isDraft: (0, _emberComputed.equal)('status', 'draft'),
        internalTags: (0, _emberComputed.filterBy)('tags', 'isInternal', true),
        isScheduled: (0, _emberComputed.equal)('status', 'scheduled'),

        // TODO: move this into gh-posts-list-item component
        // Checks every second, if we reached the scheduled date
        timeScheduled: (0, _emberComputed['default'])('publishedAtUTC', 'clock.second', function () {
            var publishedAtUTC = this.get('publishedAtUTC') || moment.utc(new Date());
            this.get('clock.second');

            return publishedAtUTC.diff(moment.utc(new Date()), 'hours', true) > 0 ? true : false;
        }),

        // remove client-generated tags, which have `id: null`.
        // Ember Data won't recognize/update them automatically
        // when returned from the server with ids.
        // https://github.com/emberjs/data/issues/1829
        updateTags: function updateTags() {
            var tags = this.get('tags');
            var oldTags = tags.filterBy('id', null);

            tags.removeObjects(oldTags);
            oldTags.invoke('deleteRecord');
        },

        isAuthoredByUser: function isAuthoredByUser(user) {
            return parseInt(user.get('id'), 10) === parseInt(this.get('authorId'), 10);
        },

        // a custom sort function is needed in order to sort the posts list the same way the server would:
        //     status: scheduled, draft, published
        //     publishedAt: DESC
        //     updatedAt: DESC
        //     id: DESC
        compare: function compare(postA, postB) {
            var updated1 = postA.get('updatedAtUTC');
            var updated2 = postB.get('updatedAtUTC');
            var idResult = undefined,
                publishedAtResult = undefined,
                statusResult = undefined,
                updatedAtResult = undefined;

            // when `updatedAt` is undefined, the model is still
            // being written to with the results from the server
            if (postA.get('isNew') || !updated1) {
                return -1;
            }

            if (postB.get('isNew') || !updated2) {
                return 1;
            }

            idResult = _compare(parseInt(postA.get('id')), parseInt(postB.get('id')));
            statusResult = statusCompare(postA, postB);
            updatedAtResult = _compare(updated1.valueOf(), updated2.valueOf());
            publishedAtResult = publishedAtCompare(postA, postB);

            if (statusResult === 0) {
                if (publishedAtResult === 0) {
                    if (updatedAtResult === 0) {
                        // This should be DESC
                        return idResult * -1;
                    }
                    // This should be DESC
                    return updatedAtResult * -1;
                }
                // This should be DESC
                return publishedAtResult * -1;
            }

            return statusResult;
        }
    });
});
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */