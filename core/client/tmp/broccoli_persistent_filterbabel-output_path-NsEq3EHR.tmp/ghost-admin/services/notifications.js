define('ghost-admin/services/notifications', ['exports', 'ember-service', 'ember-computed', 'ember-array/utils', 'ember-metal/get', 'ember-metal/set', 'ember-service/inject', 'ember-utils', 'ember-string', 'ghost-admin/services/ajax'], function (exports, _emberService, _emberComputed, _emberArrayUtils, _emberMetalGet, _emberMetalSet, _emberServiceInject, _emberUtils, _emberString, _ghostAdminServicesAjax) {
    function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

    // Notification keys take the form of "noun.verb.message", eg:
    //
    // "invite.resend.api-error"
    // "user.invite.already-invited"
    //
    // The "noun.verb" part will be used as the "key base" in duplicate checks
    // to avoid stacking of multiple error messages whilst leaving enough
    // specificity to re-use keys for i18n lookups

    exports['default'] = _emberService['default'].extend({
        delayedNotifications: (0, _emberArrayUtils.A)(),
        content: (0, _emberArrayUtils.A)(),

        upgradeStatus: (0, _emberServiceInject['default'])(),

        alerts: (0, _emberComputed.filter)('content', function (notification) {
            var status = (0, _emberMetalGet['default'])(notification, 'status');
            return status === 'alert';
        }),

        notifications: (0, _emberComputed.filter)('content', function (notification) {
            var status = (0, _emberMetalGet['default'])(notification, 'status');
            return status === 'notification';
        }),

        handleNotification: function handleNotification(message, delayed) {
            // If this is an alert message from the server, treat it as html safe
            if (typeof message.toJSON === 'function' && message.get('status') === 'alert') {
                message.set('message', message.get('message').htmlSafe());
            }

            if (!(0, _emberMetalGet['default'])(message, 'status')) {
                (0, _emberMetalSet['default'])(message, 'status', 'notification');
            }

            // close existing duplicate alerts/notifications to avoid stacking
            if ((0, _emberMetalGet['default'])(message, 'key')) {
                this._removeItems((0, _emberMetalGet['default'])(message, 'status'), (0, _emberMetalGet['default'])(message, 'key'));
            }

            if (!delayed) {
                this.get('content').pushObject(message);
            } else {
                this.get('delayedNotifications').pushObject(message);
            }
        },

        showAlert: function showAlert(message, options) {
            options = options || {};

            this.handleNotification({
                message: message,
                status: 'alert',
                type: options.type,
                key: options.key
            }, options.delayed);
        },

        showNotification: function showNotification(message, options) {
            options = options || {};

            if (!options.doNotCloseNotifications) {
                this.closeNotifications();
            } else {
                // TODO: this should be removed along with showErrors
                options.key = undefined;
            }

            this.handleNotification({
                message: message,
                status: 'notification',
                type: options.type,
                key: options.key
            }, options.delayed);
        },

        showAPIError: function showAPIError(resp, options) {
            var _this = this;

            // handle "global" errors
            if ((0, _ghostAdminServicesAjax.isVersionMismatchError)(resp)) {
                return this.get('upgradeStatus').requireUpgrade();
            } else if ((0, _ghostAdminServicesAjax.isMaintenanceError)(resp)) {
                return this.get('upgradeStatus').maintenanceAlert();
            }

            // loop over Ember Data / ember-ajax errors object
            if (resp && (0, _emberArrayUtils.isEmberArray)(resp.errors)) {
                return resp.errors.forEach(function (error) {
                    _this._showAPIError(error, options);
                });
            }

            this._showAPIError(resp, options);
        },

        _showAPIError: function _showAPIError(resp, options) {
            options = options || {};
            options.type = options.type || 'error';

            // if possible use the title to get a unique key
            // - we only show one alert for each key so if we get multiple errors
            //   only the last one will be shown
            if (!options.key && !(0, _emberUtils.isBlank)((0, _emberMetalGet['default'])(resp, 'title'))) {
                options.key = (0, _emberString.dasherize)((0, _emberMetalGet['default'])(resp, 'title'));
            }
            options.key = ['api-error', options.key].compact().join('.');

            var msg = options.defaultErrorText || 'There was a problem on the server, please try again.';

            if (_instanceof(resp, String)) {
                msg = resp;
            } else if (!(0, _emberUtils.isBlank)((0, _emberMetalGet['default'])(resp, 'detail'))) {
                msg = resp.detail;
            } else if (!(0, _emberUtils.isBlank)((0, _emberMetalGet['default'])(resp, 'message'))) {
                msg = resp.message;
            }

            this.showAlert(msg, options);
        },

        displayDelayed: function displayDelayed() {
            var _this2 = this;

            this.delayedNotifications.forEach(function (message) {
                _this2.get('content').pushObject(message);
            });
            this.delayedNotifications = [];
        },

        closeNotification: function closeNotification(notification) {
            var content = this.get('content');

            if (typeof notification.toJSON === 'function') {
                notification.deleteRecord();
                notification.save()['finally'](function () {
                    content.removeObject(notification);
                });
            } else {
                content.removeObject(notification);
            }
        },

        closeNotifications: function closeNotifications(key) {
            this._removeItems('notification', key);
        },

        closeAlerts: function closeAlerts(key) {
            this._removeItems('alert', key);
        },

        clearAll: function clearAll() {
            this.get('content').clear();
        },

        _removeItems: function _removeItems(status, key) {
            var _this3 = this;

            if (key) {
                (function () {
                    var keyBase = _this3._getKeyBase(key);
                    // TODO: keys should only have . special char but we should
                    // probably use a better regexp escaping function/polyfill
                    var escapedKeyBase = keyBase.replace('.', '\\.');
                    var keyRegex = new RegExp('^' + escapedKeyBase);

                    _this3.set('content', _this3.get('content').reject(function (item) {
                        var itemKey = (0, _emberMetalGet['default'])(item, 'key');
                        var itemStatus = (0, _emberMetalGet['default'])(item, 'status');

                        return itemStatus === status && itemKey && itemKey.match(keyRegex);
                    }));
                })();
            } else {
                this.set('content', this.get('content').rejectBy('status', status));
            }
        },

        // take a key and return the first two elements, eg:
        // "invite.revoke.failed" => "invite.revoke"
        _getKeyBase: function _getKeyBase(key) {
            return key.split('.').slice(0, 2).join('.');
        }
    });
});