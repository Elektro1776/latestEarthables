define('ghost-admin/routes/posts', ['exports', 'jquery', 'ghost-admin/routes/authenticated', 'ghost-admin/mixins/shortcuts-route', 'ghost-admin/mixins/pagination'], function (exports, _jquery, _ghostAdminRoutesAuthenticated, _ghostAdminMixinsShortcutsRoute, _ghostAdminMixinsPagination) {
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend(_ghostAdminMixinsShortcutsRoute['default'], _ghostAdminMixinsPagination['default'], {
        titleToken: 'Content',

        paginationModel: 'post',
        paginationSettings: {
            status: 'all',
            staticPages: 'all'
        },

        model: function model() {
            var _this = this;

            var paginationSettings = this.get('paginationSettings');

            return this.get('session.user').then(function (user) {
                if (user.get('isAuthor')) {
                    paginationSettings.filter = paginationSettings.filter ? paginationSettings.filter + '+author:' + user.get('slug') : 'author:' + user.get('slug');
                }

                return _this.loadFirstPage().then(function () {
                    // using `.filter` allows the template to auto-update when new models are pulled in from the server.
                    // we just need to 'return true' to allow all models by default.
                    return _this.store.filter('post', function (post) {
                        if (user.get('isAuthor')) {
                            return post.isAuthoredByUser(user);
                        }

                        return true;
                    });
                });
            });
        },

        stepThroughPosts: function stepThroughPosts(step) {
            var currentPost = this.get('controller.currentPost');
            var posts = this.get('controller.sortedPosts');
            var length = posts.get('length');
            var newPosition = posts.indexOf(currentPost) + step;

            // if we are on the first or last item
            // just do nothing (desired behavior is to not
            // loop around)
            if (newPosition >= length) {
                return;
            } else if (newPosition < 0) {
                return;
            }

            this.transitionTo('posts.post', posts.objectAt(newPosition));
        },

        scrollContent: function scrollContent(amount) {
            var content = (0, _jquery['default'])('.js-content-preview');
            var scrolled = content.scrollTop();

            content.scrollTop(scrolled + 50 * amount);
        },

        shortcuts: {
            'up, k': 'moveUp',
            'down, j': 'moveDown',
            left: 'focusList',
            right: 'focusContent',
            c: 'newPost'
        },

        actions: {
            focusList: function focusList() {
                this.controller.set('keyboardFocus', 'postList');
            },

            focusContent: function focusContent() {
                this.controller.set('keyboardFocus', 'postContent');
            },

            newPost: function newPost() {
                this.transitionTo('editor.new');
            },

            moveUp: function moveUp() {
                if (this.controller.get('postContentFocused')) {
                    this.scrollContent(-1);
                } else {
                    this.stepThroughPosts(-1);
                }
            },

            moveDown: function moveDown() {
                if (this.controller.get('postContentFocused')) {
                    this.scrollContent(1);
                } else {
                    this.stepThroughPosts(1);
                }
            }
        }
    });
});