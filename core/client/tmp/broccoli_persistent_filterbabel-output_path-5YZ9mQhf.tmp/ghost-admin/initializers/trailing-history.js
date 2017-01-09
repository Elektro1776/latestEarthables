define('ghost-admin/initializers/trailing-history', ['exports', 'ember-locations/history'], function (exports, _emberLocationsHistory) {

    var trailingHistory = _emberLocationsHistory['default'].extend({
        formatURL: function formatURL() {
            var url = this._super.apply(this, arguments);

            if (url.indexOf('?') > 0) {
                return url.replace(/([^\/])\?/, '$1/?');
            } else {
                return url.replace(/\/?$/, '/');
            }
        }
    });

    exports['default'] = {
        name: 'registerTrailingLocationHistory',

        initialize: function initialize(application) {
            application.register('location:trailing-history', trailingHistory);
        }
    };
});