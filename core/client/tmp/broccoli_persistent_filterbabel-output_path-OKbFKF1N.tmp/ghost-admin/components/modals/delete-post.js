define('ghost-admin/components/modals/delete-post', ['exports', 'ember-computed', 'ember-service/inject', 'ghost-admin/components/modals/base'], function (exports, _emberComputed, _emberServiceInject, _ghostAdminComponentsModalsBase) {
    exports['default'] = _ghostAdminComponentsModalsBase['default'].extend({

        submitting: false,

        post: (0, _emberComputed.alias)('model'),

        notifications: (0, _emberServiceInject['default'])(),
        routing: (0, _emberServiceInject['default'])('-routing'),

        _deletePost: function _deletePost() {
            var post = this.get('post');

            // definitely want to clear the data store and post of any unsaved,
            // client-generated tags
            post.updateTags();

            return post.destroyRecord();
        },

        _success: function _success() {
            // clear any previous error messages
            this.get('notifications').closeAlerts('post.delete');

            // redirect to content screen
            this.get('routing').transitionTo('posts');
        },

        _failure: function _failure(error) {
            this.get('notifications').showAPIError(error, { key: 'post.delete.failed' });
        },

        actions: {
            confirm: function confirm() {
                var _this = this;

                this.set('submitting', true);

                this._deletePost().then(function () {
                    _this._success();
                }, function (error) {
                    _this._failure(error);
                })['finally'](function () {
                    _this.send('closeModal');
                });
            }
        }
    });
});