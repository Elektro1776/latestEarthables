define('ghost-admin/components/modals/leave-editor', ['exports', 'ghost-admin/components/modals/base', 'ember-invoke-action'], function (exports, _ghostAdminComponentsModalsBase, _emberInvokeAction) {
    exports['default'] = _ghostAdminComponentsModalsBase['default'].extend({
        actions: {
            confirm: function confirm() {
                var _this = this;

                (0, _emberInvokeAction.invokeAction)(this, 'confirm')['finally'](function () {
                    _this.send('closeModal');
                });
            }
        }
    });
});