define('ghost-admin/components/modals/delete-all', ['exports', 'ember-service/inject', 'ghost-admin/components/modals/base'], function (exports, _emberServiceInject, _ghostAdminComponentsModalsBase) {
    exports['default'] = _ghostAdminComponentsModalsBase['default'].extend({

        submitting: false,

        ghostPaths: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),
        store: (0, _emberServiceInject['default'])(),
        ajax: (0, _emberServiceInject['default'])(),

        _deleteAll: function _deleteAll() {
            var deleteUrl = this.get('ghostPaths.url').api('db');
            return this.get('ajax').del(deleteUrl);
        },

        _unloadData: function _unloadData() {
            this.get('store').unloadAll('post');
            this.get('store').unloadAll('tag');
        },

        _showSuccess: function _showSuccess() {
            this.get('notifications').showAlert('All content deleted from database.', { type: 'success', key: 'all-content.delete.success' });
        },

        _showFailure: function _showFailure(error) {
            this.get('notifications').showAPIError(error, { key: 'all-content.delete' });
        },

        actions: {
            confirm: function confirm() {
                var _this = this;

                this.set('submitting', true);

                this._deleteAll().then(function () {
                    _this._unloadData();
                    _this._showSuccess();
                })['catch'](function (error) {
                    _this._showFailure(error);
                })['finally'](function () {
                    _this.send('closeModal');
                });
            }
        }
    });
});