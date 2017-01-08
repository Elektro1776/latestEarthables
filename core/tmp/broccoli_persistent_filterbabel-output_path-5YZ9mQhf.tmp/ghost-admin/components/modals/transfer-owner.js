define('ghost-admin/components/modals/transfer-owner', ['exports', 'ghost-admin/components/modals/base', 'ember-invoke-action'], function (exports, _ghostAdminComponentsModalsBase, _emberInvokeAction) {
    exports['default'] = _ghostAdminComponentsModalsBase['default'].extend({
        user: null,
        submitting: false,

        actions: {
            confirm: function confirm() {
                var _this = this;

                this.set('submitting', true);

                (0, _emberInvokeAction.invokeAction)(this, 'confirm')['finally'](function () {
                    _this.send('closeModal');
                });
            }
        }
    });
});