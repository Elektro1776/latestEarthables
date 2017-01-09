define('ghost-admin/models/subscriber', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships', 'ghost-admin/mixins/validation-engine'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships, _ghostAdminMixinsValidationEngine) {
    exports['default'] = _emberDataModel['default'].extend(_ghostAdminMixinsValidationEngine['default'], {
        validationType: 'subscriber',

        uuid: (0, _emberDataAttr['default'])('string'),
        name: (0, _emberDataAttr['default'])('string'),
        email: (0, _emberDataAttr['default'])('string'),
        status: (0, _emberDataAttr['default'])('string'),
        subscribedUrl: (0, _emberDataAttr['default'])('string'),
        subscribedReferrer: (0, _emberDataAttr['default'])('string'),
        unsubscribedUrl: (0, _emberDataAttr['default'])('string'),
        unsubscribedAtUTC: (0, _emberDataAttr['default'])('moment-utc'),
        createdAtUTC: (0, _emberDataAttr['default'])('moment-utc'),
        updatedAtUTC: (0, _emberDataAttr['default'])('moment-utc'),
        createdBy: (0, _emberDataAttr['default'])('number'),
        updatedBy: (0, _emberDataAttr['default'])('number'),

        post: (0, _emberDataRelationships.belongsTo)('post')
    });
});