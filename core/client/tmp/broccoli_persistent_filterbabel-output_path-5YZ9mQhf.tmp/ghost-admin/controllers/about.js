define('ghost-admin/controllers/about', ['exports', 'ember-controller', 'ember-computed'], function (exports, _emberController, _emberComputed) {
    exports['default'] = _emberController['default'].extend({
        updateNotificationCount: 0,

        actions: {
            updateNotificationChange: function updateNotificationChange(count) {
                this.set('updateNotificationCount', count);
            }
        },

        copyrightYear: (0, _emberComputed['default'])(function () {
            var date = new Date();
            return date.getFullYear();
        })
    });
});