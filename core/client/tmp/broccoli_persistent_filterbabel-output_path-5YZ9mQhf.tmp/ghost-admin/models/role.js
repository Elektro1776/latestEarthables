define('ghost-admin/models/role', ['exports', 'ember-computed', 'ember-data/model', 'ember-data/attr'], function (exports, _emberComputed, _emberDataModel, _emberDataAttr) {
    exports['default'] = _emberDataModel['default'].extend({
        uuid: (0, _emberDataAttr['default'])('string'),
        name: (0, _emberDataAttr['default'])('string'),
        description: (0, _emberDataAttr['default'])('string'),
        createdAtUTC: (0, _emberDataAttr['default'])('moment-utc'),
        updatedAtUTC: (0, _emberDataAttr['default'])('moment-utc'),
        createdBy: (0, _emberDataAttr['default'])(),
        updatedBy: (0, _emberDataAttr['default'])(),

        lowerCaseName: (0, _emberComputed['default'])('name', function () {
            return this.get('name').toLocaleLowerCase();
        })
    });
});
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */