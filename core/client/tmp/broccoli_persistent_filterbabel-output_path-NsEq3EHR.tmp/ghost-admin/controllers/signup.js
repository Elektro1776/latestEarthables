define('ghost-admin/controllers/signup', ['exports', 'ember-controller', 'rsvp', 'ember-service/inject', 'ember-array/utils', 'ghost-admin/mixins/validation-engine', 'ghost-admin/services/ajax'], function (exports, _emberController, _rsvp, _emberServiceInject, _emberArrayUtils, _ghostAdminMixinsValidationEngine, _ghostAdminServicesAjax) {
    var Promise = _rsvp['default'].Promise;
    exports['default'] = _emberController['default'].extend(_ghostAdminMixinsValidationEngine['default'], {
        // ValidationEngine settings
        validationType: 'signup',

        submitting: false,
        flowErrors: '',
        image: null,

        ghostPaths: (0, _emberServiceInject['default'])(),
        config: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),
        session: (0, _emberServiceInject['default'])(),
        ajax: (0, _emberServiceInject['default'])(),

        sendImage: function sendImage() {
            var _this = this;

            var image = this.get('image');

            this.get('session.user').then(function (user) {
                return new Promise(function (resolve, reject) {
                    image.formData = {};
                    image.submit().success(function (response) {
                        var usersUrl = _this.get('ghostPaths.url').api('users', user.id.toString());
                        user.image = response;
                        _this.get('ajax').put(usersUrl, {
                            data: {
                                users: [user]
                            }
                        }).then(resolve)['catch'](reject);
                    }).error(reject);
                });
            });
        },

        actions: {
            signup: function signup() {
                var _this2 = this;

                var model = this.get('model');
                var setupProperties = ['name', 'email', 'password', 'token'];
                var data = model.getProperties(setupProperties);
                var image = this.get('image');
                var notifications = this.get('notifications');

                this.set('flowErrors', '');

                this.get('hasValidated').addObjects(setupProperties);
                this.validate().then(function () {
                    var authUrl = _this2.get('ghostPaths.url').api('authentication', 'invitation');
                    _this2.toggleProperty('submitting');
                    _this2.get('ajax').post(authUrl, {
                        dataType: 'json',
                        data: {
                            invitation: [{
                                name: data.name,
                                email: data.email,
                                password: data.password,
                                token: data.token
                            }]
                        }
                    }).then(function () {
                        _this2.get('session').authenticate('authenticator:oauth2', _this2.get('model.email'), _this2.get('model.password')).then(function () {
                            if (image) {
                                _this2.sendImage();
                            }
                        })['catch'](function (resp) {
                            notifications.showAPIError(resp, { key: 'signup.complete' });
                        });
                    })['catch'](function (error) {
                        _this2.toggleProperty('submitting');

                        if (error && error.errors && (0, _emberArrayUtils.isEmberArray)(error.errors)) {
                            if ((0, _ghostAdminServicesAjax.isVersionMismatchError)(error)) {
                                notifications.showAPIError(error);
                            }
                            _this2.set('flowErrors', error.errors[0].message);
                        } else {
                            notifications.showAPIError(error, { key: 'signup.complete' });
                        }
                    });
                })['catch'](function () {
                    _this2.set('flowErrors', 'Please fill out the form to complete your sign-up');
                });
            },

            setImage: function setImage(image) {
                this.set('image', image);
            }
        }
    });
});