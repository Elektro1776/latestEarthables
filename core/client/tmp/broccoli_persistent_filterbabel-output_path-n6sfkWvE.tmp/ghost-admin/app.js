define('ghost-admin/app', ['exports', 'ember', 'ember-application', 'ghost-admin/resolver', 'ember-load-initializers', 'ghost-admin/utils/route', 'ghost-admin/utils/link-component', 'ghost-admin/utils/text-field', 'ghost-admin/config/environment'], function (exports, _ember, _emberApplication, _ghostAdminResolver, _emberLoadInitializers, _ghostAdminUtilsRoute, _ghostAdminUtilsLinkComponent, _ghostAdminUtilsTextField, _ghostAdminConfigEnvironment) {

    _ember['default'].MODEL_FACTORY_INJECTIONS = true;

    var App = _emberApplication['default'].extend({
        Resolver: _ghostAdminResolver['default'],
        modulePrefix: _ghostAdminConfigEnvironment['default'].modulePrefix,
        podModulePrefix: _ghostAdminConfigEnvironment['default'].podModulePrefix
    });

    (0, _emberLoadInitializers['default'])(App, _ghostAdminConfigEnvironment['default'].modulePrefix);

    exports['default'] = App;
});