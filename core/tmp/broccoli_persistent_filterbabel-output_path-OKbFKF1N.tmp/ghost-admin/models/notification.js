define('ghost-admin/models/notification', ['exports', 'ember-data/model', 'ember-data/attr'], function (exports, _emberDataModel, _emberDataAttr) {
    exports['default'] = _emberDataModel['default'].extend({
        dismissible: (0, _emberDataAttr['default'])('boolean'),
        status: (0, _emberDataAttr['default'])('string'),
        type: (0, _emberDataAttr['default'])('string'),
        message: (0, _emberDataAttr['default'])('string'),
        key: (0, _emberDataAttr['default'])('string')
    });
});