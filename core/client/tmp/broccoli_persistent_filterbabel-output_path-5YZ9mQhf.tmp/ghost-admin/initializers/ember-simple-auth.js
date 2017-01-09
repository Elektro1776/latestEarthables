define('ghost-admin/initializers/ember-simple-auth', ['exports', 'ghost-admin/config/environment', 'ghost-admin/utils/ghost-paths', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _ghostAdminConfigEnvironment, _ghostAdminUtilsGhostPaths, _emberSimpleAuthConfiguration, _emberSimpleAuthInitializersSetupSession, _emberSimpleAuthInitializersSetupSessionService) {
    exports['default'] = {
        name: 'ember-simple-auth',
        initialize: function initialize(registry) {
            var config = _ghostAdminConfigEnvironment['default']['ember-simple-auth'] || {};
            config.baseURL = (0, _ghostAdminUtilsGhostPaths['default'])().adminRoot;
            _emberSimpleAuthConfiguration['default'].load(config);

            (0, _emberSimpleAuthInitializersSetupSession['default'])(registry);
            (0, _emberSimpleAuthInitializersSetupSessionService['default'])(registry);
        }
    };
});