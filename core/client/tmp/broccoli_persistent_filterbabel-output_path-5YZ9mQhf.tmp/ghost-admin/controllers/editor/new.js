define('ghost-admin/controllers/editor/new', ['exports', 'ember-controller', 'ghost-admin/mixins/editor-base-controller'], function (exports, _emberController, _ghostAdminMixinsEditorBaseController) {

    function K() {
        return this;
    }

    exports['default'] = _emberController['default'].extend(_ghostAdminMixinsEditorBaseController['default'], {
        // Overriding autoSave on the base controller, as the new controller shouldn't be autosaving
        autoSave: K,
        actions: {
            /**
              * Redirect to editor after the first save
              */
            save: function save(options) {
                var _this = this;

                return this._super(options).then(function (model) {
                    if (model.get('id')) {
                        _this.replaceRoute('editor.edit', model);
                    }
                });
            }
        }
    });
});