define('ghost-admin/components/modals/import-subscribers', ['exports', 'ember-computed', 'ember-invoke-action', 'ghost-admin/components/modals/base', 'ghost-admin/utils/ghost-paths'], function (exports, _emberComputed, _emberInvokeAction, _ghostAdminComponentsModalsBase, _ghostAdminUtilsGhostPaths) {
    exports['default'] = _ghostAdminComponentsModalsBase['default'].extend({
        labelText: 'Select or drag-and-drop a CSV File',

        response: null,
        closeDisabled: false,

        uploadUrl: (0, _emberComputed['default'])(function () {
            return (0, _ghostAdminUtilsGhostPaths['default'])().apiRoot + '/subscribers/csv/';
        }),

        actions: {
            uploadStarted: function uploadStarted() {
                this.set('closeDisabled', true);
            },

            uploadFinished: function uploadFinished() {
                this.set('closeDisabled', false);
            },

            uploadSuccess: function uploadSuccess(response) {
                this.set('response', response.meta.stats);
                // invoke the passed in confirm action
                (0, _emberInvokeAction.invokeAction)(this, 'confirm');
            },

            confirm: function confirm() {
                // noop - we don't want the enter key doing anything
            },

            closeModal: function closeModal() {
                if (!this.get('closeDisabled')) {
                    this._super.apply(this, arguments);
                }
            }
        }
    });
});