define('ghost-admin/controllers/settings/apps/slack', ['exports', 'ember-controller', 'ember-computed', 'ember-service/inject', 'ember-invoke-action'], function (exports, _emberController, _emberComputed, _emberServiceInject, _emberInvokeAction) {
    exports['default'] = _emberController['default'].extend({
        ghostPaths: (0, _emberServiceInject['default'])(),
        ajax: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),

        // will be set by route
        settings: null,

        isSaving: false,
        savePromise: null,
        isSendingTest: false,

        testNotificationDisabled: (0, _emberComputed.empty)('model.url'),

        actions: {
            sendTestNotification: function sendTestNotification() {
                var _this = this;

                var notifications = this.get('notifications');
                var slackApi = this.get('ghostPaths.url').api('slack', 'test');

                if (this.get('isSendingTest')) {
                    return;
                }

                this.set('isSendingTest', true);

                (0, _emberInvokeAction.invoke)(this, 'save').then(function () {
                    _this.get('ajax').post(slackApi).then(function () {
                        notifications.showAlert('Check your slack channel test message.', { type: 'info', key: 'slack-test.send.success' });
                    })['catch'](function (error) {
                        notifications.showAPIError(error, { key: 'slack-test:send' });
                        throw error;
                    });
                })['catch'](function () {
                    // noop - error already handled in .save
                })['finally'](function () {
                    _this.set('isSendingTest', false);
                });
            },

            updateURL: function updateURL(value) {
                this.set('model.url', value);
                this.get('model.errors').clear();
            },

            save: function save() {
                var _this2 = this;

                var slack = this.get('model');
                var settings = this.get('settings');

                if (this.get('isSaving')) {
                    return;
                }

                return slack.validate().then(function () {
                    settings.get('slack').clear().pushObject(slack);

                    _this2.set('isSaving', true);

                    return settings.save()['catch'](function (err) {
                        _this2.get('notifications').showAPIError(err);
                        throw err;
                    })['finally'](function () {
                        _this2.set('isSaving', false);
                    });
                });
            }
        }
    });
});