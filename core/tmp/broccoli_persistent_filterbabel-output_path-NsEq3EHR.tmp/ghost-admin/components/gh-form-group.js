define('ghost-admin/components/gh-form-group', ['exports', 'ghost-admin/components/gh-validation-status-container'], function (exports, _ghostAdminComponentsGhValidationStatusContainer) {
    exports['default'] = _ghostAdminComponentsGhValidationStatusContainer['default'].extend({
        classNames: 'form-group'
    });
});