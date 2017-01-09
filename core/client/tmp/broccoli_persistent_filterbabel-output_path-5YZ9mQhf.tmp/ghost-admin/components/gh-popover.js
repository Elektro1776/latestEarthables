define('ghost-admin/components/gh-popover', ['exports', 'ember-service/inject', 'ghost-admin/components/gh-dropdown'], function (exports, _emberServiceInject, _ghostAdminComponentsGhDropdown) {
    exports['default'] = _ghostAdminComponentsGhDropdown['default'].extend({
        classNames: 'ghost-popover',
        dropdown: (0, _emberServiceInject['default'])()
    });
});