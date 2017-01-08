define('ghost-admin/routes/settings/general', ['exports', 'rsvp', 'ember-service/inject', 'ghost-admin/routes/authenticated', 'ghost-admin/mixins/current-user-settings', 'ghost-admin/mixins/style-body'], function (exports, _rsvp, _emberServiceInject, _ghostAdminRoutesAuthenticated, _ghostAdminMixinsCurrentUserSettings, _ghostAdminMixinsStyleBody) {
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend(_ghostAdminMixinsStyleBody['default'], _ghostAdminMixinsCurrentUserSettings['default'], {
        titleToken: 'Settings - General',

        classNames: ['settings-view-general'],

        config: (0, _emberServiceInject['default'])(),

        // TODO: replace with a synchronous settings service
        querySettings: function querySettings() {
            return this.store.queryRecord('setting', { type: 'blog,theme,private' });
        },

        beforeModel: function beforeModel() {
            this._super.apply(this, arguments);
            return this.get('session.user').then(this.transitionAuthor()).then(this.transitionEditor());
        },

        model: function model() {
            return _rsvp['default'].hash({
                settings: this.querySettings(),
                availableTimezones: this.get('config.availableTimezones')
            });
        },

        setupController: function setupController(controller, models) {
            controller.set('model', models.settings);
            controller.set('availableTimezones', models.availableTimezones);
        },

        actions: {
            save: function save() {
                return this.get('controller').send('save');
            },

            reloadSettings: function reloadSettings() {
                var _this = this;

                return this.querySettings(function (settings) {
                    _this.set('controller.model', settings);
                });
            },

            activateTheme: function activateTheme(theme) {
                return this.get('controller').send('setTheme', theme);
            }
        }
    });
});