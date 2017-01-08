define('ghost-admin/components/modals/re-authenticate', ['exports', 'jquery', 'ember-computed', 'ember-service/inject', 'ember-string', 'ghost-admin/components/modals/base', 'ghost-admin/mixins/validation-engine', 'ghost-admin/services/ajax'], function (exports, _jquery, _emberComputed, _emberServiceInject, _emberString, _ghostAdminComponentsModalsBase, _ghostAdminMixinsValidationEngine, _ghostAdminServicesAjax) {
    exports['default'] = _ghostAdminComponentsModalsBase['default'].extend(_ghostAdminMixinsValidationEngine['default'], {
        validationType: 'signin',

        submitting: false,
        authenticationError: null,

        notifications: (0, _emberServiceInject['default'])(),
        session: (0, _emberServiceInject['default'])(),

        identification: (0, _emberComputed['default'])('session.user.email', function () {
            return this.get('session.user.email');
        }),

        _authenticate: function _authenticate() {
            var _this = this;

            var session = this.get('session');
            var authStrategy = 'authenticator:oauth2';
            var identification = this.get('identification');
            var password = this.get('password');

            session.set('skipAuthSuccessHandler', true);

            this.toggleProperty('submitting');

            return session.authenticate(authStrategy, identification, password)['finally'](function () {
                _this.toggleProperty('submitting');
                session.set('skipAuthSuccessHandler', undefined);
            });
        },

        actions: {
            confirm: function confirm() {
                var _this2 = this;

                // Manually trigger events for input fields, ensuring legacy compatibility with
                // browsers and password managers that don't send proper events on autofill
                (0, _jquery['default'])('#login').find('input').trigger('change');

                this.set('authenticationError', null);

                this.validate({ property: 'signin' }).then(function () {
                    _this2._authenticate().then(function () {
                        _this2.get('notifications').closeAlerts('post.save');
                        _this2.send('closeModal');
                    })['catch'](function (error) {
                        if (error && error.errors) {
                            error.errors.forEach(function (err) {
                                if ((0, _ghostAdminServicesAjax.isVersionMismatchError)(err)) {
                                    return _this2.get('notifications').showAPIError(error);
                                }
                                err.message = (0, _emberString.htmlSafe)(err.message);
                            });

                            _this2.get('errors').add('password', 'Incorrect password');
                            _this2.get('hasValidated').pushObject('password');
                            _this2.set('authenticationError', error.errors[0].message);
                        }
                    });
                }, function () {
                    _this2.get('hasValidated').pushObject('password');
                });
            }
        }
    });
});