define('ghost-admin/controllers/posts', ['exports', 'ember', 'ember-controller', 'ember-computed', 'ember-service/inject'], function (exports, _ember, _emberController, _emberComputed, _emberServiceInject) {
    var compare = _ember['default'].compare;
    exports['default'] = _emberController['default'].extend({
        feature: (0, _emberServiceInject['default'])(),

        showDeletePostModal: false,

        // See PostsRoute's shortcuts
        postListFocused: (0, _emberComputed.equal)('keyboardFocus', 'postList'),
        postContentFocused: (0, _emberComputed.equal)('keyboardFocus', 'postContent'),

        sortedPosts: (0, _emberComputed['default'])('model.@each.{status,publishedAtUTC,isNew,updatedAtUTC}', function () {
            return this.get('model').toArray().sort(compare);
        }),

        actions: {
            toggleDeletePostModal: function toggleDeletePostModal() {
                this.toggleProperty('showDeletePostModal');
            }
        }
    });
});