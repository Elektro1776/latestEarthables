define('ghost-admin/serializers/notification', ['exports', 'ghost-admin/serializers/application'], function (exports, _ghostAdminSerializersApplication) {
    exports['default'] = _ghostAdminSerializersApplication['default'].extend({
        attrs: {
            key: { key: 'location' }
        }
    });
});