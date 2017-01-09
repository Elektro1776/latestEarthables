define('ghost-admin/tests/helpers/resolver', ['exports', 'ghost-admin/resolver', 'ghost-admin/config/environment'], function (exports, _ghostAdminResolver, _ghostAdminConfigEnvironment) {

    var resolver = _ghostAdminResolver['default'].create();

    resolver.namespace = {
        modulePrefix: _ghostAdminConfigEnvironment['default'].modulePrefix,
        podModulePrefix: _ghostAdminConfigEnvironment['default'].podModulePrefix
    };

    exports['default'] = resolver;
});