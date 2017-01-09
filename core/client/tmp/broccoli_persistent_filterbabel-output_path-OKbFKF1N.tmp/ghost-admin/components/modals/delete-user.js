define('ghost-admin/components/modals/delete-user', ['exports', 'ghost-admin/components/modals/base', 'ember-invoke-action', 'ember-computed'], function (exports, _ghostAdminComponentsModalsBase, _emberInvokeAction, _emberComputed) {
    exports['default'] = _ghostAdminComponentsModalsBase['default'].extend({

        submitting: false,

        user: (0, _emberComputed.alias)('model'),

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