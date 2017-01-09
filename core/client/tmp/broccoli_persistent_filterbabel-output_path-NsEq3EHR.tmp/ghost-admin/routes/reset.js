define('ghost-admin/routes/reset', ['exports', 'ember-route', 'ember-service/inject', 'ember-simple-auth/configuration', 'ghost-admin/mixins/style-body'], function (exports, _emberRoute, _emberServiceInject, _emberSimpleAuthConfiguration, _ghostAdminMixinsStyleBody) {
    exports['default'] = _emberRoute['default'].extend(_ghostAdminMixinsStyleBody['default'], {
        classNames: ['ghost-reset'],

        notifications: (0, _emberServiceInject['default'])(),
        session: (0, _emberServiceInject['default'])(),

        beforeModel: function beforeModel() {
            this._super.apply(this, arguments);
            if (this.get('session.isAuthenticated')) {
                this.get('notifications').showAlert('You can\'t reset your password while you\'re signed in.', { type: 'warn', delayed: true, key: 'password.reset.signed-in' });
                this.transitionTo(_emberSimpleAuthConfiguration['default'].routeAfterAuthentication);
            }
        },

        setupController: function setupController(controller, params) {
            controller.token = params.token;
        },

        // Clear out any sensitive information
        deactivate: function deactivate() {
            this._super.apply(this, arguments);
            this.controller.clearData();
        }
    });
});