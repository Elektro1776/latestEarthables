define('ghost-admin/helpers/app-version', ['exports', 'ember', 'ghost-admin/config/environment'], function (exports, _ember, _ghostAdminConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _ghostAdminConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});