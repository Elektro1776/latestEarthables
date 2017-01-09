define('ghost-admin/components/modals/delete-theme', ['exports', 'ghost-admin/components/modals/base', 'ember-computed', 'ember-invoke-action'], function (exports, _ghostAdminComponentsModalsBase, _emberComputed, _emberInvokeAction) {
    exports['default'] = _ghostAdminComponentsModalsBase['default'].extend({

        submitting: false,

        theme: (0, _emberComputed.alias)('model.theme'),
        download: (0, _emberComputed.alias)('model.download'),

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