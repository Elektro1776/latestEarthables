define('ghost-admin/routes/editor/edit', ['exports', 'ghost-admin/routes/authenticated', 'ghost-admin/mixins/editor-base-route', 'ghost-admin/utils/isNumber', 'ghost-admin/utils/isFinite'], function (exports, _ghostAdminRoutesAuthenticated, _ghostAdminMixinsEditorBaseRoute, _ghostAdminUtilsIsNumber, _ghostAdminUtilsIsFinite) {
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend(_ghostAdminMixinsEditorBaseRoute['default'], {
        titleToken: 'Editor',

        beforeModel: function beforeModel(transition) {
            this.set('_transitionedFromNew', transition.data.fromNew);

            this._super.apply(this, arguments);
        },

        model: function model(params) {
            var _this = this;

            var postId = undefined,
                query = undefined;

            postId = Number(params.post_id);

            if (!(0, _ghostAdminUtilsIsNumber['default'])(postId) || !(0, _ghostAdminUtilsIsFinite['default'])(postId) || postId % 1 !== 0 || postId <= 0) {
                return this.transitionTo('error404', 'editor/' + params.post_id);
            }

            query = {
                id: postId,
                status: 'all',
                staticPages: 'all'
            };

            return this.store.query('post', query).then(function (records) {
                var post = records.get('firstObject');

                if (post) {
                    return post;
                }

                return _this.replaceWith('posts.index');
            });
        },

        afterModel: function afterModel(post) {
            var _this2 = this;

            this._super.apply(this, arguments);

            return this.get('session.user').then(function (user) {
                if (user.get('isAuthor') && !post.isAuthoredByUser(user)) {
                    return _this2.replaceWith('posts.index');
                }
            });
        },

        setupController: function setupController(controller) {
            this._super.apply(this, arguments);

            controller.set('shouldFocusEditor', this.get('_transitionedFromNew'));
        },

        actions: {
            authorizationFailed: function authorizationFailed() {
                this.get('controller').send('toggleReAuthenticateModal');
            }
        }
    });
});
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */