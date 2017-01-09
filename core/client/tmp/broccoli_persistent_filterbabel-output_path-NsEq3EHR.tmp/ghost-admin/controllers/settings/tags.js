define('ghost-admin/controllers/settings/tags', ['exports', 'ember-controller', 'ember-controller/inject', 'ember-computed'], function (exports, _emberController, _emberControllerInject, _emberComputed) {
    exports['default'] = _emberController['default'].extend({

        tagController: (0, _emberControllerInject['default'])('settings.tags.tag'),

        selectedTag: (0, _emberComputed.alias)('tagController.tag'),

        tagListFocused: (0, _emberComputed.equal)('keyboardFocus', 'tagList'),
        tagContentFocused: (0, _emberComputed.equal)('keyboardFocus', 'tagContent'),

        // TODO: replace with ordering by page count once supported by the API
        tags: (0, _emberComputed.sort)('model', function (a, b) {
            var idA = +a.get('id');
            var idB = +b.get('id');

            if (idA > idB) {
                return 1;
            } else if (idA < idB) {
                return -1;
            }

            return 0;
        }),

        actions: {
            leftMobile: function leftMobile() {
                var firstTag = this.get('tags.firstObject');
                // redirect to first tag if possible so that you're not left with
                // tag settings blank slate when switching from portrait to landscape
                if (firstTag && !this.get('tagController.tag')) {
                    this.transitionToRoute('settings.tags.tag', firstTag);
                }
            }
        }

    });
});