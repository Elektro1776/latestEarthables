define('ghost-admin/routes/team/user', ['exports', 'ghost-admin/routes/authenticated', 'ghost-admin/mixins/current-user-settings', 'ghost-admin/mixins/style-body'], function (exports, _ghostAdminRoutesAuthenticated, _ghostAdminMixinsCurrentUserSettings, _ghostAdminMixinsStyleBody) {
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend(_ghostAdminMixinsStyleBody['default'], _ghostAdminMixinsCurrentUserSettings['default'], {
        titleToken: 'Team - User',

        classNames: ['team-view-user'],

        model: function model(params) {
            return this.store.queryRecord('user', { slug: params.user_slug, include: 'count.posts' });
        },

        serialize: function serialize(model) {
            return { user_slug: model.get('slug') };
        },

        afterModel: function afterModel(user) {
            var _this = this;

            this._super.apply(this, arguments);

            return this.get('session.user').then(function (currentUser) {
                var isOwnProfile = user.get('id') === currentUser.get('id');
                var isAuthor = currentUser.get('isAuthor');
                var isEditor = currentUser.get('isEditor');

                if (isAuthor && !isOwnProfile) {
                    _this.transitionTo('team.user', currentUser);
                } else if (isEditor && !isOwnProfile && !user.get('isAuthor')) {
                    _this.transitionTo('team');
                }
            });
        },

        deactivate: function deactivate() {
            var model = this.modelFor('team.user');

            // we want to revert any unsaved changes on exit
            if (model && model.get('hasDirtyAttributes')) {
                model.rollbackAttributes();
            }

            model.get('errors').clear();

            this._super.apply(this, arguments);
        },

        actions: {
            didTransition: function didTransition() {
                this.modelFor('team.user').get('errors').clear();
            },

            save: function save() {
                this.get('controller.save').perform();
            }
        }
    });
});
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */