define('ghost-admin/initializers/upgrade-status', ['exports'], function (exports) {
    exports.initialize = initialize;

    function initialize(application) {
        application.inject('route', 'upgradeStatus', 'service:upgrade-status');
    }

    exports['default'] = {
        name: 'upgrade-status',
        initialize: initialize
    };
});