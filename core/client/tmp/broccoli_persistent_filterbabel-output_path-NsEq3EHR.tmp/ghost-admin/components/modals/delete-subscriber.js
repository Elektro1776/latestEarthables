define('ghost-admin/components/modals/delete-subscriber', ['exports', 'ember-computed', 'ghost-admin/components/modals/base', 'ember-invoke-action'], function (exports, _emberComputed, _ghostAdminComponentsModalsBase, _emberInvokeAction) {
    exports['default'] = _ghostAdminComponentsModalsBase['default'].extend({

        submitting: false,

        subscriber: (0, _emberComputed.alias)('model'),

        actions: {
            confirm: function confirm() {
                var _this = this;

                this.set('submitting', true);

                (0, _emberInvokeAction.invokeAction)(this, 'confirm')['finally'](function () {
                    _this.set('submitting', false);
                });
            }
        }
    });
});