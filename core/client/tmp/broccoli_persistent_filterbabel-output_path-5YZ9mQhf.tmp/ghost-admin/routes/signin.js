define('ghost-admin/routes/signin', ['exports', 'ember-route', 'ember-service/inject', 'ember-object', 'ghost-admin/mixins/style-body', 'ember-simple-auth/configuration', 'ember-data'], function (exports, _emberRoute, _emberServiceInject, _emberObject, _ghostAdminMixinsStyleBody, _emberSimpleAuthConfiguration, _emberData) {
    var Errors = _emberData['default'].Errors;
    exports['default'] = _emberRoute['default'].extend(_ghostAdminMixinsStyleBody['default'], {
        titleToken: 'Sign In',

        classNames: ['ghost-login'],

        session: (0, _emberServiceInject['default'])(),

        beforeModel: function beforeModel() {
            this._super.apply(this, arguments);

            if (this.get('session.isAuthenticated')) {
                this.transitionTo(_emberSimpleAuthConfiguration['default'].routeIfAlreadyAuthenticated);
            }
        },

        model: function model() {
            return _emberObject['default'].create({
                identification: '',
                password: '',
                errors: Errors.create()
            });
        },

        // the deactivate hook is called after a route has been exited.
        deactivate: function deactivate() {
            var controller = this.controllerFor('signin');

            this._super.apply(this, arguments);

            // clear the properties that hold the credentials when we're no longer on the signin screen
            controller.set('model.identification', '');
            controller.set('model.password', '');
        }
    });
});