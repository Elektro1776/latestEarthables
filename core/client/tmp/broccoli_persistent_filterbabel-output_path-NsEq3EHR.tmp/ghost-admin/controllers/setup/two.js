define('ghost-admin/controllers/setup/two', ['exports', 'ember-controller', 'rsvp', 'ember-service/inject', 'ember-controller/inject', 'ember-array/utils', 'ghost-admin/mixins/validation-engine'], function (exports, _emberController, _rsvp, _emberServiceInject, _emberControllerInject, _emberArrayUtils, _ghostAdminMixinsValidationEngine) {
    var Promise = _rsvp['default'].Promise;
    exports['default'] = _emberController['default'].extend(_ghostAdminMixinsValidationEngine['default'], {
        size: 90,
        blogTitle: null,
        name: null,
        email: '',
        password: null,
        image: null,
        blogCreated: false,
        submitting: false,
        flowErrors: '',

        ghostPaths: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),
        application: (0, _emberControllerInject['default'])(),
        config: (0, _emberServiceInject['default'])(),
        session: (0, _emberServiceInject['default'])(),
        ajax: (0, _emberServiceInject['default'])(),

        // ValidationEngine settings
        validationType: 'setup',

        /**
         * Uploads the given data image, then sends the changed user image property to the server
         * @param  {Object} user User object, returned from the 'setup' api call
         * @return {Ember.RSVP.Promise} A promise that takes care of both calls
         */
        sendImage: function sendImage(user) {
            var _this = this;

            var image = this.get('image');

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
        },

        _handleSaveError: function _handleSaveError(resp) {
            this.toggleProperty('submitting');

            if (resp && resp.errors && (0, _emberArrayUtils.isEmberArray)(resp.errors)) {
                this.set('flowErrors', resp.errors[0].message);
            } else {
                this.get('notifications').showAPIError(resp, { key: 'setup.blog-details' });
            }
        },

        _handleAuthenticationError: function _handleAuthenticationError(error) {
            this.toggleProperty('submitting');
            if (error && error.errors) {
                this.set('flowErrors', error.errors[0].message);
            } else {
                // Connection errors don't return proper status message, only req.body
                this.get('notifications').showAlert('There was a problem on the server.', { type: 'error', key: 'setup.authenticate.failed' });
            }
        },

        afterAuthentication: function afterAuthentication(result) {
            var _this2 = this;

            if (this.get('image')) {
                this.sendImage(result.users[0]).then(function () {
                    _this2.toggleProperty('submitting');
                    _this2.transitionToRoute('setup.three');
                })['catch'](function (resp) {
                    _this2.toggleProperty('submitting');
                    _this2.get('notifications').showAPIError(resp, { key: 'setup.blog-details' });
                });
            } else {
                this.toggleProperty('submitting');
                this.transitionToRoute('setup.three');
            }
        },

        actions: {
            preValidate: function preValidate(model) {
                // Only triggers validation if a value has been entered, preventing empty errors on focusOut
                if (this.get(model)) {
                    this.validate({ property: model });
                }
            },

            setup: function setup() {
                var _this3 = this;

                var setupProperties = ['blogTitle', 'name', 'email', 'password'];
                var data = this.getProperties(setupProperties);
                var config = this.get('config');
                var method = this.get('blogCreated') ? 'put' : 'post';

                this.toggleProperty('submitting');
                this.set('flowErrors', '');

                this.get('hasValidated').addObjects(setupProperties);
                this.validate().then(function () {
                    var authUrl = _this3.get('ghostPaths.url').api('authentication', 'setup');
                    _this3.get('ajax')[method](authUrl, {
                        data: {
                            setup: [{
                                name: data.name,
                                email: data.email,
                                password: data.password,
                                blogTitle: data.blogTitle
                            }]
                        }
                    }).then(function (result) {
                        config.set('blogTitle', data.blogTitle);

                        // don't try to login again if we are already logged in
                        if (_this3.get('session.isAuthenticated')) {
                            return _this3.afterAuthentication(result);
                        }

                        // Don't call the success handler, otherwise we will be redirected to admin
                        _this3.set('session.skipAuthSuccessHandler', true);
                        _this3.get('session').authenticate('authenticator:oauth2', _this3.get('email'), _this3.get('password')).then(function () {
                            _this3.set('blogCreated', true);
                            return _this3.afterAuthentication(result);
                        })['catch'](function (error) {
                            _this3._handleAuthenticationError(error);
                        })['finally'](function () {
                            _this3.set('session.skipAuthSuccessHandler', undefined);
                        });
                    })['catch'](function (error) {
                        _this3._handleSaveError(error);
                    });
                })['catch'](function () {
                    _this3.toggleProperty('submitting');
                    _this3.set('flowErrors', 'Please fill out the form to setup your blog.');
                });
            },

            setImage: function setImage(image) {
                this.set('image', image);
            }
        }
    });
});