define('ghost-admin/controllers/signin', ['exports', 'jquery', 'ember-controller', 'ember-service/inject', 'ember-controller/inject', 'ember-array/utils', 'ghost-admin/services/ajax', 'ghost-admin/mixins/validation-engine'], function (exports, _jquery, _emberController, _emberServiceInject, _emberControllerInject, _emberArrayUtils, _ghostAdminServicesAjax, _ghostAdminMixinsValidationEngine) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports['default'] = _emberController['default'].extend(_ghostAdminMixinsValidationEngine['default'], {
        submitting: false,
        loggingIn: false,
        authProperties: ['identification', 'password'],

        ghostPaths: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),
        session: (0, _emberServiceInject['default'])(),
        application: (0, _emberControllerInject['default'])(),
        ajax: (0, _emberServiceInject['default'])(),
        flowErrors: '',

        // ValidationEngine settings
        validationType: 'signin',

        actions: {
            authenticate: function authenticate() {
                var _this = this;

                var model = this.get('model');
                var authStrategy = 'authenticator:oauth2';

                // Authentication transitions to posts.index, we can leave spinner running unless there is an error
                this.get('session').authenticate(authStrategy, model.get('identification'), model.get('password'))['catch'](function (error) {
                    _this.toggleProperty('loggingIn');

                    if (error && error.errors) {
                        // we don't get back an ember-data/ember-ajax error object
                        // back so we need to pass in a null status in order to
                        // test against the payload
                        if ((0, _ghostAdminServicesAjax.isVersionMismatchError)(null, error)) {
                            var versionMismatchError = new _ghostAdminServicesAjax.VersionMismatchError(error);
                            return _this.get('notifications').showAPIError(versionMismatchError);
                        }

                        error.errors.forEach(function (err) {
                            err.message = err.message.htmlSafe();
                        });

                        _this.set('flowErrors', error.errors[0].message.string);

                        if (error.errors[0].message.string.match(/user with that email/)) {
                            _this.get('model.errors').add('identification', '');
                        }

                        if (error.errors[0].message.string.match(/password is incorrect/)) {
                            _this.get('model.errors').add('password', '');
                        }
                    } else {
                        // Connection errors don't return proper status message, only req.body
                        _this.get('notifications').showAlert('There was a problem on the server.', { type: 'error', key: 'session.authenticate.failed' });
                    }
                });
            },

            validateAndAuthenticate: function validateAndAuthenticate() {
                var _this2 = this;

                this.set('flowErrors', '');
                // Manually trigger events for input fields, ensuring legacy compatibility with
                // browsers and password managers that don't send proper events on autofill
                (0, _jquery['default'])('#login').find('input').trigger('change');

                // This is a bit dirty, but there's no other way to ensure the properties are set as well as 'signin'
                this.get('hasValidated').addObjects(this.authProperties);
                this.validate({ property: 'signin' }).then(function () {
                    _this2.toggleProperty('loggingIn');
                    _this2.send('authenticate');
                })['catch'](function () {
                    _this2.set('flowErrors', 'Please fill out the form to sign in.');
                });
            },

            forgotten: function forgotten() {
                var _this3 = this;

                var email = this.get('model.identification');
                var notifications = this.get('notifications');

                this.set('flowErrors', '');
                // This is a bit dirty, but there's no other way to ensure the properties are set as well as 'forgotPassword'
                this.get('hasValidated').addObject('identification');
                this.validate({ property: 'forgotPassword' }).then(function () {
                    var forgottenUrl = _this3.get('ghostPaths.url').api('authentication', 'passwordreset');
                    _this3.toggleProperty('submitting');

                    _this3.get('ajax').post(forgottenUrl, {
                        data: {
                            passwordreset: [{ email: email }]
                        }
                    }).then(function () {
                        _this3.toggleProperty('submitting');
                        notifications.showAlert('Please check your email for instructions.', { type: 'info', key: 'forgot-password.send.success' });
                    })['catch'](function (error) {
                        _this3.toggleProperty('submitting');

                        if ((0, _ghostAdminServicesAjax.isVersionMismatchError)(error)) {
                            return notifications.showAPIError(error);
                        }

                        if (error && error.errors && (0, _emberArrayUtils.isEmberArray)(error.errors)) {
                            var _error$errors = _slicedToArray(error.errors, 1);

                            var message = _error$errors[0].message;

                            _this3.set('flowErrors', message);

                            if (message.match(/no user with that email/)) {
                                _this3.get('model.errors').add('identification', '');
                            }
                        } else {
                            notifications.showAPIError(error, { defaultErrorText: 'There was a problem with the reset, please try again.', key: 'forgot-password.send' });
                        }
                    });
                })['catch'](function () {
                    _this3.set('flowErrors', 'We need your email address to reset your password!');
                });
            }
        }
    });
});