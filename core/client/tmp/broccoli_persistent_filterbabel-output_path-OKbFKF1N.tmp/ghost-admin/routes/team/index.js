define('ghost-admin/routes/team/index', ['exports', 'ghost-admin/routes/authenticated', 'ghost-admin/mixins/current-user-settings', 'ghost-admin/mixins/pagination', 'ghost-admin/mixins/style-body'], function (exports, _ghostAdminRoutesAuthenticated, _ghostAdminMixinsCurrentUserSettings, _ghostAdminMixinsPagination, _ghostAdminMixinsStyleBody) {
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend(_ghostAdminMixinsStyleBody['default'], _ghostAdminMixinsCurrentUserSettings['default'], _ghostAdminMixinsPagination['default'], {
        titleToken: 'Team',

        classNames: ['view-team'],

        paginationModel: 'user',
        paginationSettings: {
            status: 'active',
            limit: 20
        },

        model: function model() {
            var _this = this;

            this.loadFirstPage();

            return this.store.query('user', { limit: 'all', status: 'invited' }).then(function () {
                return _this.store.filter('user', function () {
                    return true;
                });
            });
        },

        actions: {
            reload: function reload() {
                this.refresh();
            }
        }
    });
});