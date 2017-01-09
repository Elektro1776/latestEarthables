define('ghost-admin/components/gh-ed-editor', ['exports', 'ember-components/text-area', 'ember-runloop', 'ghost-admin/mixins/ed-editor-api', 'ghost-admin/mixins/ed-editor-shortcuts', 'ghost-admin/mixins/ed-editor-scroll', 'ember-invoke-action'], function (exports, _emberComponentsTextArea, _emberRunloop, _ghostAdminMixinsEdEditorApi, _ghostAdminMixinsEdEditorShortcuts, _ghostAdminMixinsEdEditorScroll, _emberInvokeAction) {
    exports['default'] = _emberComponentsTextArea['default'].extend(_ghostAdminMixinsEdEditorApi['default'], _ghostAdminMixinsEdEditorShortcuts['default'], _ghostAdminMixinsEdEditorScroll['default'], _emberInvokeAction.InvokeActionMixin, {
        focus: false,

        /**
         * Tell the controller about focusIn events, will trigger an autosave on a new document
         */
        focusIn: function focusIn() {
            this.sendAction('onFocusIn');
        },

        /**
         * Sets the focus of the textarea if needed
         */
        setFocus: function setFocus() {
            if (this.get('focus')) {
                this.$().val(this.$().val()).focus();
            }
        },

        /**
         * Sets up properties at render time
         */
        didInsertElement: function didInsertElement() {
            this._super.apply(this, arguments);

            this.setFocus();

            this.invokeAction('setEditor', this);

            _emberRunloop['default'].scheduleOnce('afterRender', this, this.afterRenderEvent);
        },

        afterRenderEvent: function afterRenderEvent() {
            if (this.get('focus') && this.get('focusCursorAtEnd')) {
                this.setSelection('end');
            }
        },

        actions: {
            toggleCopyHTMLModal: function toggleCopyHTMLModal(generatedHTML) {
                this.invokeAction('toggleCopyHTMLModal', generatedHTML);
            }
        }
    });
});