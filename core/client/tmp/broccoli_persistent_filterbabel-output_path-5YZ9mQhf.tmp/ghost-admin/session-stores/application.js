define('ghost-admin/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive', 'ghost-admin/utils/ghost-paths'], function (exports, _emberSimpleAuthSessionStoresAdaptive, _ghostAdminUtilsGhostPaths) {

    var paths = (0, _ghostAdminUtilsGhostPaths['default'])();
    var keyName = 'ghost' + (paths.subdir.indexOf('/') === 0 ? '-' + paths.subdir.substr(1) : '') + ':session';

    exports['default'] = _emberSimpleAuthSessionStoresAdaptive['default'].extend({
        localStorageKey: keyName,
        cookieName: keyName
    });
});