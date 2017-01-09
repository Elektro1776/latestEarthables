define('ghost-admin/routes/posts/index', ['exports', 'ember-computed', 'ember-service/inject', 'ember-simple-auth/mixins/authenticated-route-mixin', 'ghost-admin/routes/mobile-index-route'], function (exports, _emberComputed, _emberServiceInject, _emberSimpleAuthMixinsAuthenticatedRouteMixin, _ghostAdminRoutesMobileIndexRoute) {
    exports['default'] = _ghostAdminRoutesMobileIndexRoute['default'].extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {
        noPosts: false,

        mediaQueries: (0, _emberServiceInject['default'])(),
        isMobile: (0, _emberComputed.reads)('mediaQueries.isMobile'),

        // Transition to a specific post if we're not on mobile
        beforeModel: function beforeModel() {
            this._super.apply(this, arguments);
            if (!this.get('isMobile')) {
                return this.goToPost();
            }
        },

        setupController: function setupController(controller) {
            controller.set('noPosts', this.get('noPosts'));
            this._super.apply(this, arguments);
        },

        goToPost: function goToPost() {
            var _this = this;

            // the store has been populated by PostsRoute
            var posts = this.store.peekAll('post');
            var post = undefined;

            return this.get('session.user').then(function (user) {
                post = posts.find(function (post) {
                    // Authors can only see posts they've written
                    if (user.get('isAuthor')) {
                        return post.isAuthoredByUser(user);
                    }

                    return true;
                });

                if (post) {
                    return _this.transitionTo('posts.post', post);
                }

                _this.set('noPosts', true);
            });
        },

        // Mobile posts route callback
        desktopTransition: function desktopTransition() {
            this.goToPost();
        }
    });
});