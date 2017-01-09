define('ghost-admin/validators/signup', ['exports', 'ghost-admin/validators/new-user'], function (exports, _ghostAdminValidatorsNewUser) {
  exports['default'] = _ghostAdminValidatorsNewUser['default'].create();
});