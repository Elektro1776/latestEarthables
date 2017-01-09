define('ghost-admin/models/tag', ['exports', 'ember-computed', 'ember-metal/observer', 'ember-service/inject', 'ember-data/model', 'ember-data/attr', 'ghost-admin/mixins/validation-engine'], function (exports, _emberComputed, _emberMetalObserver, _emberServiceInject, _emberDataModel, _emberDataAttr, _ghostAdminMixinsValidationEngine) {
    exports['default'] = _emberDataModel['default'].extend(_ghostAdminMixinsValidationEngine['default'], {
        validationType: 'tag',

        uuid: (0, _emberDataAttr['default'])('string'),
        name: (0, _emberDataAttr['default'])('string'),
        slug: (0, _emberDataAttr['default'])('string'),
        description: (0, _emberDataAttr['default'])('string'),
        parent: (0, _emberDataAttr['default'])(),
        metaTitle: (0, _emberDataAttr['default'])('string'),
        metaDescription: (0, _emberDataAttr['default'])('string'),
        image: (0, _emberDataAttr['default'])('string'),
        visibility: (0, _emberDataAttr['default'])('string', { defaultValue: 'public' }),
        createdAtUTC: (0, _emberDataAttr['default'])('moment-utc'),
        updatedAtUTC: (0, _emberDataAttr['default'])('moment-utc'),
        createdBy: (0, _emberDataAttr['default'])(),
        updatedBy: (0, _emberDataAttr['default'])(),
        count: (0, _emberDataAttr['default'])('raw'),

        isInternal: (0, _emberComputed.equal)('visibility', 'internal'),
        isPublic: (0, _emberComputed.equal)('visibility', 'public'),

        feature: (0, _emberServiceInject['default'])(),

        setVisibility: function setVisibility() {
            var internalRegex = /^#.?/;

            this.set('visibility', internalRegex.test(this.get('name')) ? 'internal' : 'public');
        },

        save: function save() {
            if (this.get('feature.internalTags') && this.get('changedAttributes.name') && !this.get('isDeleted')) {
                this.setVisibility();
            }
            return this._super.apply(this, arguments);
        },

        setVisibilityOnNew: (0, _emberMetalObserver['default'])('feature.internalTags', 'isNew', 'isSaving', 'name', function () {
            if (this.get('isNew') && !this.get('isSaving') && this.get('feature.internalTags')) {
                this.setVisibility();
            }
        })
    });
});
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */