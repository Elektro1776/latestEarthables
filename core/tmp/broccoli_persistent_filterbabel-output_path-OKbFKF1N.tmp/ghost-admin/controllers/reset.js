define('ghost-admin/controllers/reset', ['exports', 'ember-controller', 'ember-computed', 'ember-service/inject', 'ghost-admin/mixins/validation-engine'], function (exports, _emberController, _emberComputed, _emberServiceInject, _ghostAdminMixinsValidationEngine) {
    exports['default'] = _emberController['default'].extend(_ghostAdminMixinsValidationEngine['default'], {
        newPassword: '',
        ne2Password: '',
        token: '',
        submitting: false,
        flowErrors: '',

        validationType: 'reset',

        ghostPaths: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),
        session: (0, _emberServiceInject['default'])(),
        ajax: (0, _emberServiceInject['default'])(),

        email: (0, _emberComputed['default'])('token', function () {
            // The token base64 encodes the email (and some other stuff),
            // each section is divided by a '|'. Email comes second.
            return atob(this.get('token')).split('|')[1];
        }),

        // Used to clear sensitive information
        clearData: function clearData() {
            this.setProperties({
                newPassword: '',
                ne2Password: '',
                token: ''
            });
        },

        actions: {
            submit: function submit() {
                var _this = this;

                var credentials = this.getProperties('newPassword', 'ne2Password', 'token');

                this.set('flowErrors', '');
                this.get('hasValidated').addObjects(['newPassword', 'ne2Password']);
                this.validate().then(function () {
                    var authUrl = _this.get('ghostPaths.url').api('authentication', 'passwordreset');
                    _this.toggleProperty('submitting');
                    _this.get('ajax').put(authUrl, {
                        data: {
                            passwordreset: [credentials]
                        }
                    }).then(function (resp) {
                        _this.toggleProperty('submitting');
                        _this.get('notifications').showAlert(resp.passwordreset[0].message, { type: 'warn', delayed: true, key: 'password.reset' });
                        _this.get('session').authenticate('authenticator:oauth2', _this.get('email'), credentials.newPassword);
                    })['catch'](function (error) {
                        _this.get('notifications').showAPIError(error, { key: 'password.reset' });
                        _this.toggleProperty('submitting');
                    });
                })['catch'](function (error) {
                    if (_this.get('errors.newPassword')) {
                        _this.set('flowErrors', _this.get('errors.newPassword')[0].message);
                    }

                    if (_this.get('errors.ne2Password')) {
                        _this.set('flowErrors', _this.get('errors.ne2Password')[0].message);
                    }

                    if (_this.get('errors.length') === 0) {
                        throw error;
                    }
                });
            }
        }
    });
});