define('ghost-admin/routes/posts/post', ['exports', 'ghost-admin/routes/authenticated', 'ghost-admin/mixins/shortcuts-route', 'ghost-admin/utils/isNumber', 'ghost-admin/utils/isFinite'], function (exports, _ghostAdminRoutesAuthenticated, _ghostAdminMixinsShortcutsRoute, _ghostAdminUtilsIsNumber, _ghostAdminUtilsIsFinite) {
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend(_ghostAdminMixinsShortcutsRoute['default'], {
        model: function model(params) {
            var _this = this;

            var post = undefined,
                postId = undefined,
                query = undefined;

            /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
            postId = Number(params.post_id);

            if (!(0, _ghostAdminUtilsIsNumber['default'])(postId) || !(0, _ghostAdminUtilsIsFinite['default'])(postId) || postId % 1 !== 0 || postId <= 0) {
                return this.transitionTo('error404', params.post_id);
            }
            /* jscs:enable requireCamelCaseOrUpperCaseIdentifiers */

            post = this.store.peekRecord('post', postId);
            if (post) {
                return post;
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

            return this.get('session.user').then(function (user) {
                if (user.get('isAuthor') && !post.isAuthoredByUser(user)) {
                    return _this2.replaceWith('posts.index');
                }
            });
        },

        setupController: function setupController(controller, model) {
            this._super(controller, model);

            this.controllerFor('posts').set('currentPost', model);
        },

        shortcuts: {
            'enter, o': 'openEditor',
            'command+backspace, ctrl+backspace': 'deletePost'
        },

        actions: {
            openEditor: function openEditor(post) {
                post = post || this.get('controller.model');

                if (!post) {
                    return;
                }

                this.transitionTo('editor.edit', post.get('id'));
            },

            deletePost: function deletePost() {
                this.controllerFor('posts').send('toggleDeletePostModal');
            }
        }
    });
});