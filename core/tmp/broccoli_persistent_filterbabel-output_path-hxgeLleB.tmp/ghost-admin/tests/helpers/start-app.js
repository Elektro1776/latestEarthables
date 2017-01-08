define('ghost-admin/tests/helpers/start-app', ['exports', 'ember-platform', 'ember-runloop', 'ghost-admin/app', 'ghost-admin/config/environment', 'ghost-admin/tests/helpers/file-upload'], function (exports, _emberPlatform, _emberRunloop, _ghostAdminApp, _ghostAdminConfigEnvironment, _ghostAdminTestsHelpersFileUpload) {
    exports['default'] = startApp;

    function startApp(attrs) {
        var attributes = (0, _emberPlatform.assign)({}, _ghostAdminConfigEnvironment['default'].APP);
        var application = undefined;

        // use defaults, but you can override;
        attributes = (0, _emberPlatform.assign)(attributes, attrs);

        (0, _emberRunloop['default'])(function () {
            application = _ghostAdminApp['default'].create(attributes);
            application.setupForTesting();
            application.injectTestHelpers();
        });

        return application;
    }
});