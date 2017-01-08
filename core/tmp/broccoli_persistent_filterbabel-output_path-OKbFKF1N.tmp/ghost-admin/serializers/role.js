define('ghost-admin/serializers/role', ['exports', 'ghost-admin/serializers/application'], function (exports, _ghostAdminSerializersApplication) {
    exports['default'] = _ghostAdminSerializersApplication['default'].extend({
        attrs: {
            createdAtUTC: { key: 'created_at' },
            updatedAtUTC: { key: 'updated_at' }
        }
    });
});