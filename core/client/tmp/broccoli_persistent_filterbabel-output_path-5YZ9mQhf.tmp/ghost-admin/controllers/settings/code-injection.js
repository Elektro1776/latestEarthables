define('ghost-admin/controllers/settings/code-injection', ['exports', 'ember-controller', 'ember-service/inject', 'ghost-admin/mixins/settings-save'], function (exports, _emberController, _emberServiceInject, _ghostAdminMixinsSettingsSave) {
    exports['default'] = _emberController['default'].extend(_ghostAdminMixinsSettingsSave['default'], {
        notifications: (0, _emberServiceInject['default'])(),

        save: function save() {
            var notifications = this.get('notifications');

            return this.get('model').save()['catch'](function (error) {
                notifications.showAPIError(error, { key: 'code-injection.save' });
            });
        }
    });
});