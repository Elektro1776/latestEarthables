define('ghost-admin/routes/settings/navigation', ['exports', 'jquery', 'ghost-admin/routes/authenticated', 'ghost-admin/mixins/current-user-settings', 'ghost-admin/mixins/style-body'], function (exports, _jquery, _ghostAdminRoutesAuthenticated, _ghostAdminMixinsCurrentUserSettings, _ghostAdminMixinsStyleBody) {
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend(_ghostAdminMixinsStyleBody['default'], _ghostAdminMixinsCurrentUserSettings['default'], {
        titleToken: 'Settings - Navigation',

        classNames: ['settings-view-navigation'],

        beforeModel: function beforeModel() {
            this._super.apply(this, arguments);
            return this.get('session.user').then(this.transitionAuthor());
        },

        model: function model() {
            return this.store.query('setting', { type: 'blog,theme,private' }).then(function (records) {
                return records.get('firstObject');
            });
        },

        setupController: function setupController() {
            this._super.apply(this, arguments);
            this.get('controller').send('reset');
        },

        actions: {
            save: function save() {
                // since shortcuts are run on the route, we have to signal to the components
                // on the page that we're about to save.
                (0, _jquery['default'])('.page-actions .btn-blue').focus();

                this.get('controller').send('save');
            },

            willTransition: function willTransition() {
                // reset the model so that our CPs re-calc and unsaved changes aren't
                // persisted across transitions
                this.set('controller.model', null);
                return this._super.apply(this, arguments);
            }
        }
    });
});