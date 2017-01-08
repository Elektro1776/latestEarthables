define('ghost-admin/routes/subscribers', ['exports', 'rsvp', 'ember-service/inject', 'ghost-admin/routes/authenticated'], function (exports, _rsvp, _emberServiceInject, _ghostAdminRoutesAuthenticated) {
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend({
        titleToken: 'Subscribers',

        feature: (0, _emberServiceInject['default'])(),

        // redirect if subscribers is disabled or user isn't owner/admin
        beforeModel: function beforeModel() {
            var _this = this;

            this._super.apply(this, arguments);
            var promises = {
                user: this.get('session.user'),
                subscribers: this.get('feature.subscribers')
            };

            return _rsvp['default'].hash(promises).then(function (hash) {
                var user = hash.user;
                var subscribers = hash.subscribers;

                if (!subscribers || !(user.get('isOwner') || user.get('isAdmin'))) {
                    return _this.transitionTo('posts');
                }
            });
        },

        setupController: function setupController(controller) {
            this._super.apply(this, arguments);
            controller.initializeTable();
            controller.send('loadFirstPage');
        },

        resetController: function resetController(controller, isExiting) {
            this._super.apply(this, arguments);
            if (isExiting) {
                controller.set('order', 'created_at');
                controller.set('direction', 'desc');
            }
        },

        actions: {
            addSubscriber: function addSubscriber(subscriber) {
                this.get('controller').send('addSubscriber', subscriber);
            },

            reset: function reset() {
                this.get('controller').send('reset');
            }
        }
    });
});