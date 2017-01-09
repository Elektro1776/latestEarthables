define('ghost-admin/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'ghost-admin/config/environment', 'ghost-admin/mirage/config', 'ember-cli-mirage/server'], function (exports, _emberCliMirageUtilsReadModules, _ghostAdminConfigEnvironment, _ghostAdminMirageConfig, _emberCliMirageServer) {
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }
      var environment = _ghostAdminConfigEnvironment['default'].environment;

      if (_shouldUseMirage(environment, _ghostAdminConfigEnvironment['default']['ember-cli-mirage'])) {
        var modules = (0, _emberCliMirageUtilsReadModules['default'])(_ghostAdminConfigEnvironment['default'].modulePrefix);
        var options = _.assign(modules, { environment: environment, baseConfig: _ghostAdminMirageConfig['default'], testConfig: _ghostAdminMirageConfig.testConfig });

        new _emberCliMirageServer['default'](options);
      }
    }
  };

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});