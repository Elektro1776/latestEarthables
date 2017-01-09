define('ghost-admin/routes/signup', ['exports', 'ember-route', 'rsvp', 'ember-service/inject', 'ember-object', 'ember-data', 'ember-simple-auth/configuration', 'ghost-admin/mixins/style-body'], function (exports, _emberRoute, _rsvp, _emberServiceInject, _emberObject, _emberData, _emberSimpleAuthConfiguration, _ghostAdminMixinsStyleBody) {
    var Promise = _rsvp['default'].Promise;
    var Errors = _emberData['default'].Errors;
    exports['default'] = _emberRoute['default'].extend(_ghostAdminMixinsStyleBody['default'], {
        classNames: ['ghost-signup'],

        ghostPaths: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),
        session: (0, _emberServiceInject['default'])(),
        ajax: (0, _emberServiceInject['default'])(),

        beforeModel: function beforeModel() {
            this._super.apply(this, arguments);

            if (this.get('session.isAuthenticated')) {
                this.get('notifications').showAlert('You need to sign out to register as a new user.', { type: 'warn', delayed: true, key: 'signup.create.already-authenticated' });
                this.transitionTo(_emberSimpleAuthConfiguration['default'].routeIfAlreadyAuthenticated);
            }
        },

        model: function model(params) {
            var _this = this;

            var model = _emberObject['default'].create();
            var re = /^(?:[A-Za-z0-9_\-]{4})*(?:[A-Za-z0-9_\-]{2}|[A-Za-z0-9_\-]{3})?$/;
            var email = undefined,
                tokenText = undefined;

            return new Promise(function (resolve) {
                if (!re.test(params.token)) {
                    _this.get('notifications').showAlert('Invalid token.', { type: 'error', delayed: true, key: 'signup.create.invalid-token' });

                    return resolve(_this.transitionTo('signin'));
                }

                tokenText = atob(params.token);
                email = tokenText.split('|')[1];

                model.set('email', email);
                model.set('token', params.token);
                model.set('errors', Errors.create());

                var authUrl = _this.get('ghostPaths.url').api('authentication', 'invitation');

                return _this.get('ajax').request(authUrl, {
                    dataType: 'json',
                    data: {
                        email: email
                    }
                }).then(function (response) {
                    if (response && response.invitation && response.invitation[0].valid === false) {
                        _this.get('notifications').showAlert('The invitation does not exist or is no longer valid.', { type: 'warn', delayed: true, key: 'signup.create.invalid-invitation' });

                        return resolve(_this.transitionTo('signin'));
                    }

                    resolve(model);
                })['catch'](function () {
                    resolve(model);
                });
            });
        },

        deactivate: function deactivate() {
            this._super.apply(this, arguments);

            // clear the properties that hold the sensitive data from the controller
            this.controllerFor('signup').setProperties({ email: '', password: '', token: '' });
        }
    });
});