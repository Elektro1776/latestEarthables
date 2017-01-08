define('ghost-admin/services/upgrade-status', ['exports', 'ember-service', 'ember-service/inject'], function (exports, _emberService, _emberServiceInject) {
    exports['default'] = _emberService['default'].extend({
        isRequired: false,

        notifications: (0, _emberServiceInject['default'])(),

        maintenanceAlert: function maintenanceAlert() {
            this.get('notifications').showAlert('Sorry, Ghost is currently undergoing maintenance, please wait a moment then try again.', { type: 'error', key: 'api-error.under-maintenance' });
        },

        requireUpgrade: function requireUpgrade() {
            this.set('isRequired', true);
            this.get('notifications').showAlert('Ghost has been upgraded, please copy any unsaved data and refresh the page to continue.', { type: 'error', key: 'api-error.upgrade-required' });
        }
    });
});