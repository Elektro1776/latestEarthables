define('ghost-admin/controllers/editor/edit', ['exports', 'ember-controller', 'ghost-admin/mixins/editor-base-controller'], function (exports, _emberController, _ghostAdminMixinsEditorBaseController) {
    exports['default'] = _emberController['default'].extend(_ghostAdminMixinsEditorBaseController['default'], {
        showDeletePostModal: false,

        actions: {
            toggleDeletePostModal: function toggleDeletePostModal() {
                this.toggleProperty('showDeletePostModal');
            }
        }
    });
});