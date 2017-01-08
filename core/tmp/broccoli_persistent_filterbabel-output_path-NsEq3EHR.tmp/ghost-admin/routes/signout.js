define('ghost-admin/routes/signout', ['exports', 'ember', 'ember-service/inject', 'ghost-admin/routes/authenticated', 'ghost-admin/mixins/style-body'], function (exports, _ember, _emberServiceInject, _ghostAdminRoutesAuthenticated, _ghostAdminMixinsStyleBody) {

    // ember-cli-shims doesn't export canInvoke
    var canInvoke = _ember['default'].canInvoke;
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend(_ghostAdminMixinsStyleBody['default'], {
        titleToken: 'Sign Out',

        classNames: ['ghost-signout'],

        notifications: (0, _emberServiceInject['default'])(),

        afterModel: function afterModel(model, transition) {
            this.get('notifications').clearAll();
            if (canInvoke(transition, 'send')) {
                transition.send('invalidateSession');
            } else {
                this.send('invalidateSession');
            }
        }
    });
});