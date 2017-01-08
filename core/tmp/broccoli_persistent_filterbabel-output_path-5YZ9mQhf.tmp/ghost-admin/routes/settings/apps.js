define('ghost-admin/routes/settings/apps', ['exports', 'ghost-admin/routes/authenticated', 'ghost-admin/mixins/current-user-settings', 'ghost-admin/mixins/style-body'], function (exports, _ghostAdminRoutesAuthenticated, _ghostAdminMixinsCurrentUserSettings, _ghostAdminMixinsStyleBody) {
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend(_ghostAdminMixinsStyleBody['default'], _ghostAdminMixinsCurrentUserSettings['default'], {
        titleToken: 'Settings - Apps',

        classNames: ['settings-view-apps'],

        beforeModel: function beforeModel() {
            this._super.apply(this, arguments);
            return this.get('session.user').then(this.transitionAuthor()).then(this.transitionEditor());
        },

        model: function model() {
            return this.store.queryRecord('setting', { type: 'blog,theme,private' });
        }
    });
});