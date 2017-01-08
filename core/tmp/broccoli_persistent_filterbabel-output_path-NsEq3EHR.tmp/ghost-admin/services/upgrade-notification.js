define('ghost-admin/services/upgrade-notification', ['exports', 'ember-service'], function (exports, _emberService) {
    exports['default'] = _emberService['default'].extend({
        content: ''
    });
});