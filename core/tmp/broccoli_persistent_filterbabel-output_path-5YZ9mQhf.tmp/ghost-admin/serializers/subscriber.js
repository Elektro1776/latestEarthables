define('ghost-admin/serializers/subscriber', ['exports', 'ghost-admin/serializers/application'], function (exports, _ghostAdminSerializersApplication) {
    exports['default'] = _ghostAdminSerializersApplication['default'].extend({
        attrs: {
            unsubscribedAtUTC: { key: 'unsubscribed_at' },
            createdAtUTC: { key: 'created_at' },
            updatedAtUTC: { key: 'updated_at' }
        }
    });
});