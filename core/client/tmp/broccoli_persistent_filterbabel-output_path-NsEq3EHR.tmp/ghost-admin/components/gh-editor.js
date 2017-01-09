define('ghost-admin/components/gh-editor', ['exports', 'ember-component', 'ember-computed', 'ember-runloop', 'ghost-admin/mixins/shortcuts', 'ghost-admin/utils/ed-image-manager', 'ghost-admin/utils/editor-shortcuts', 'ember-invoke-action'], function (exports, _emberComponent, _emberComputed, _emberRunloop, _ghostAdminMixinsShortcuts, _ghostAdminUtilsEdImageManager, _ghostAdminUtilsEditorShortcuts, _emberInvokeAction) {
    exports['default'] = _emberComponent['default'].extend(_ghostAdminMixinsShortcuts['default'], {
        tagName: 'section',
        classNames: ['view-container', 'view-editor'],

        activeTab: 'markdown',
        editor: null,
        editorDisabled: undefined,
        editorScrollInfo: null, // updated when gh-ed-editor component scrolls
        height: null, // updated when markdown is rendered
        shouldFocusEditor: false,
        showCopyHTMLModal: false,
        copyHTMLModalContent: null,

        shortcuts: _ghostAdminUtilsEditorShortcuts['default'],

        markdownActive: (0, _emberComputed.equal)('activeTab', 'markdown'),
        previewActive: (0, _emberComputed.equal)('activeTab', 'preview'),

        // HTML Preview listens to scrollPosition and updates its scrollTop value
        // This property receives scrollInfo from the textEditor, and height from the preview pane, and will update the
        // scrollPosition value such that when either scrolling or typing-at-the-end of the text editor the preview pane
        // stays in sync
        scrollPosition: (0, _emberComputed['default'])('editorScrollInfo', 'height', function () {
            var scrollInfo = this.get('editorScrollInfo');
            var $previewContent = this.$previewContent;
            var $previewViewPort = this.$previewViewPort;

            if (!scrollInfo || !$previewContent || !$previewViewPort) {
                return 0;
            }

            var previewHeight = $previewContent.height() - $previewViewPort.height();
            var previewPosition = undefined,
                ratio = undefined;

            ratio = previewHeight / scrollInfo.diff;
            previewPosition = scrollInfo.top * ratio;

            return previewPosition;
        }),

        didInsertElement: function didInsertElement() {
            this._super.apply(this, arguments);
            this.registerShortcuts();
            _emberRunloop['default'].scheduleOnce('afterRender', this, this._cacheElements);
        },

        willDestroyElement: function willDestroyElement() {
            (0, _emberInvokeAction.invokeAction)(this, 'onTeardown');

            this.removeShortcuts();
        },

        _cacheElements: function _cacheElements() {
            // cache these elements for use in other methods
            this.$previewViewPort = this.$('.js-entry-preview-content');
            this.$previewContent = this.$('.js-rendered-markdown');
        },

        actions: {
            selectTab: function selectTab(tab) {
                this.set('activeTab', tab);
            },

            updateScrollInfo: function updateScrollInfo(scrollInfo) {
                this.set('editorScrollInfo', scrollInfo);
            },

            updateHeight: function updateHeight(height) {
                this.set('height', height);
            },

            // set from a `sendAction` on the gh-ed-editor component,
            // so that we get a reference for handling uploads.
            setEditor: function setEditor(editor) {
                this.set('editor', editor);
            },

            disableEditor: function disableEditor() {
                this.set('editorDisabled', true);
            },

            enableEditor: function enableEditor() {
                this.set('editorDisabled', undefined);
            },

            // The actual functionality is implemented in utils/ed-editor-shortcuts
            editorShortcut: function editorShortcut(options) {
                if (this.editor.$().is(':focus')) {
                    this.editor.shortcut(options.type);
                }
            },

            // Match the uploaded file to a line in the editor, and update that line with a path reference
            // ensuring that everything ends up in the correct place and format.
            handleImgUpload: function handleImgUpload(imageIndex, newSrc) {
                var editor = this.get('editor');
                var editorValue = editor.getValue();
                var replacement = _ghostAdminUtilsEdImageManager['default'].getSrcRange(editorValue, imageIndex);
                var cursorPosition = undefined;

                if (replacement) {
                    cursorPosition = replacement.start + newSrc.length + 1;
                    if (replacement.needsParens) {
                        newSrc = '(' + newSrc + ')';
                    }
                    editor.replaceSelection(newSrc, replacement.start, replacement.end, cursorPosition);
                }
            },

            toggleCopyHTMLModal: function toggleCopyHTMLModal(generatedHTML) {
                this.set('copyHTMLModalContent', generatedHTML);
                this.toggleProperty('showCopyHTMLModal');
            }
        }
    });
});