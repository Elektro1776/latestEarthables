define('ghost-admin/routes/settings/apps/slack', ['exports', 'ghost-admin/routes/authenticated', 'ghost-admin/mixins/current-user-settings', 'ghost-admin/mixins/style-body'], function (exports, _ghostAdminRoutesAuthenticated, _ghostAdminMixinsCurrentUserSettings, _ghostAdminMixinsStyleBody) {
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend(_ghostAdminMixinsStyleBody['default'], _ghostAdminMixinsCurrentUserSettings['default'], {
        titleToken: 'Settings - Apps - Slack',

        classNames: ['settings-view-apps-slack'],

        model: function model() {
            return this.modelFor('settings.apps').get('slack.firstObject');
        },

        setupController: function setupController(controller) {
            this._super.apply(this, arguments);

            controller.set('settings', this.modelFor('settings.apps'));
        }
    });
});