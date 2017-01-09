define('ghost-admin/routes/settings/labs', ['exports', 'ghost-admin/routes/authenticated', 'ghost-admin/mixins/style-body', 'ghost-admin/mixins/current-user-settings'], function (exports, _ghostAdminRoutesAuthenticated, _ghostAdminMixinsStyleBody, _ghostAdminMixinsCurrentUserSettings) {
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend(_ghostAdminMixinsStyleBody['default'], _ghostAdminMixinsCurrentUserSettings['default'], {
        titleToken: 'Settings - Labs',

        classNames: ['settings'],

        beforeModel: function beforeModel() {
            this._super.apply(this, arguments);
            return this.get('session.user').then(this.transitionAuthor()).then(this.transitionEditor());
        },

        model: function model() {
            return this.store.query('setting', { type: 'blog,theme,private' }).then(function (records) {
                return records.get('firstObject');
            });
        }
    });
});