define('ghost-admin/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'rsvp', 'ghost-admin/tests/helpers/start-app', 'ghost-admin/tests/helpers/destroy-app'], function (exports, _qunit, _rsvp, _ghostAdminTestsHelpersStartApp, _ghostAdminTestsHelpersDestroyApp) {
    var Promise = _rsvp['default'].Promise;

    exports['default'] = function (name) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        (0, _qunit.module)(name, {
            beforeEach: function beforeEach() {
                this.application = (0, _ghostAdminTestsHelpersStartApp['default'])();

                if (options.beforeEach) {
                    return options.beforeEach.apply(options, arguments);
                }
            },

            afterEach: function afterEach() {
                var _this = this;

                var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
                return Promise.resolve(afterEach).then(function () {
                    return (0, _ghostAdminTestsHelpersDestroyApp['default'])(_this.application);
                });
            }
        });
    };
});
/* jscs:disable */