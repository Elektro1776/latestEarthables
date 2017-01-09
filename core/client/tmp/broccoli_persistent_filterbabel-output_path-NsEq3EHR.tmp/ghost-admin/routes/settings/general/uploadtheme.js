define('ghost-admin/routes/settings/general/uploadtheme', ['exports', 'ghost-admin/routes/authenticated'], function (exports, _ghostAdminRoutesAuthenticated) {
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend({

        model: function model() {
            return this.modelFor('settings.general').settings.get('availableThemes');
        },

        actions: {
            cancel: function cancel() {
                this.transitionTo('settings.general');
            }
        }
    });
});