define('ghost-admin/components/modals/copy-html', ['exports', 'ember-computed', 'ghost-admin/components/modals/base'], function (exports, _emberComputed, _ghostAdminComponentsModalsBase) {
    exports['default'] = _ghostAdminComponentsModalsBase['default'].extend({
        generatedHtml: (0, _emberComputed.alias)('model')
    });
});