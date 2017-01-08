define('ghost-admin/routes/settings/code-injection', ['exports', 'ghost-admin/routes/authenticated', 'ghost-admin/mixins/current-user-settings', 'ghost-admin/mixins/style-body'], function (exports, _ghostAdminRoutesAuthenticated, _ghostAdminMixinsCurrentUserSettings, _ghostAdminMixinsStyleBody) {
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend(_ghostAdminMixinsStyleBody['default'], _ghostAdminMixinsCurrentUserSettings['default'], {
        titleToken: 'Settings - Code Injection',
        classNames: ['settings-view-code'],

        beforeModel: function beforeModel() {
            this._super.apply(this, arguments);
            return this.get('session.user').then(this.transitionAuthor()).then(this.transitionEditor());
        },

        model: function model() {
            return this.store.query('setting', { type: 'blog,theme,private' }).then(function (records) {
                return records.get('firstObject');
            });
        },

        actions: {
            save: function save() {
                this.get('controller').send('save');
            }
        }
    });
});