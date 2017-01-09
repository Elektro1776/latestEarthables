define('ghost-admin/services/ghost-paths', ['exports', 'ember', 'ember-service', 'ghost-admin/utils/ghost-paths'], function (exports, _ember, _emberService, _ghostAdminUtilsGhostPaths) {

    // ember-cli-shims doesn't export _ProxyMixin
    var _ProxyMixin = _ember['default']._ProxyMixin;
    exports['default'] = _emberService['default'].extend(_ProxyMixin, {
        content: (0, _ghostAdminUtilsGhostPaths['default'])()
    });
});