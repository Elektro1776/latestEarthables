define('ghost-admin/components/gh-tag-settings-form', ['exports', 'ember-component', 'ember', 'ember-computed', 'ember-metal/get', 'ember-service/inject', 'ember-string', 'ghost-admin/utils/bound-one-way', 'ember-invoke-action'], function (exports, _emberComponent, _ember, _emberComputed, _emberMetalGet, _emberServiceInject, _emberString, _ghostAdminUtilsBoundOneWay, _emberInvokeAction) {

    // ember-cli-shims doesn't export this
    var Handlebars = _ember['default'].Handlebars;
    exports['default'] = _emberComponent['default'].extend({

        tag: null,

        scratchName: (0, _ghostAdminUtilsBoundOneWay['default'])('tag.name'),
        scratchSlug: (0, _ghostAdminUtilsBoundOneWay['default'])('tag.slug'),
        scratchDescription: (0, _ghostAdminUtilsBoundOneWay['default'])('tag.description'),
        scratchMetaTitle: (0, _ghostAdminUtilsBoundOneWay['default'])('tag.metaTitle'),
        scratchMetaDescription: (0, _ghostAdminUtilsBoundOneWay['default'])('tag.metaDescription'),

        isViewingSubview: false,

        feature: (0, _emberServiceInject['default'])(),
        config: (0, _emberServiceInject['default'])(),
        mediaQueries: (0, _emberServiceInject['default'])(),

        isMobile: (0, _emberComputed.reads)('mediaQueries.maxWidth600'),

        title: (0, _emberComputed['default'])('tag.isNew', function () {
            if (this.get('tag.isNew')) {
                return 'New Tag';
            } else {
                return 'Tag Settings';
            }
        }),

        seoTitle: (0, _emberComputed['default'])('scratchName', 'scratchMetaTitle', function () {
            var metaTitle = this.get('scratchMetaTitle') || '';

            metaTitle = metaTitle.length > 0 ? metaTitle : this.get('scratchName');

            if (metaTitle && metaTitle.length > 70) {
                metaTitle = metaTitle.substring(0, 70).trim();
                metaTitle = Handlebars.Utils.escapeExpression(metaTitle);
                metaTitle = (0, _emberString.htmlSafe)(metaTitle + '&hellip;');
            }

            return metaTitle;
        }),

        seoURL: (0, _emberComputed['default'])('scratchSlug', function () {
            var blogUrl = this.get('config.blogUrl');
            var seoSlug = this.get('scratchSlug') || '';

            var seoURL = blogUrl + '/tag/' + seoSlug;

            // only append a slash to the URL if the slug exists
            if (seoSlug) {
                seoURL += '/';
            }

            if (seoURL.length > 70) {
                seoURL = seoURL.substring(0, 70).trim();
                seoURL = (0, _emberString.htmlSafe)(seoURL + '&hellip;');
            }

            return seoURL;
        }),

        seoDescription: (0, _emberComputed['default'])('scratchDescription', 'scratchMetaDescription', function () {
            var metaDescription = this.get('scratchMetaDescription') || '';

            metaDescription = metaDescription.length > 0 ? metaDescription : this.get('scratchDescription');

            if (metaDescription && metaDescription.length > 156) {
                metaDescription = metaDescription.substring(0, 156).trim();
                metaDescription = Handlebars.Utils.escapeExpression(metaDescription);
                metaDescription = (0, _emberString.htmlSafe)(metaDescription + '&hellip;');
            }

            return metaDescription;
        }),

        didReceiveAttrs: function didReceiveAttrs(attrs) {
            this._super.apply(this, arguments);

            if ((0, _emberMetalGet['default'])(attrs, 'newAttrs.tag.value.id') !== (0, _emberMetalGet['default'])(attrs, 'oldAttrs.tag.value.id')) {
                this.reset();
            }
        },

        reset: function reset() {
            this.set('isViewingSubview', false);
            if (this.$()) {
                this.$('.settings-menu-pane').scrollTop(0);
            }
        },

        focusIn: function focusIn() {
            key.setScope('tag-settings-form');
        },

        focusOut: function focusOut() {
            key.setScope('default');
        },

        actions: {
            setProperty: function setProperty(property, value) {
                (0, _emberInvokeAction.invokeAction)(this, 'setProperty', property, value);
            },

            setCoverImage: function setCoverImage(image) {
                this.send('setProperty', 'image', image);
            },

            clearCoverImage: function clearCoverImage() {
                this.send('setProperty', 'image', '');
            },

            openMeta: function openMeta() {
                this.set('isViewingSubview', true);
            },

            closeMeta: function closeMeta() {
                this.set('isViewingSubview', false);
            },

            deleteTag: function deleteTag() {
                (0, _emberInvokeAction.invokeAction)(this, 'showDeleteTagModal');
            }
        }

    });
});
/* global key */