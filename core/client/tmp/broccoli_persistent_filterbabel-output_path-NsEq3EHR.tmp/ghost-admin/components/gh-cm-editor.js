define('ghost-admin/components/gh-cm-editor', ['exports', 'ember-component', 'ember-runloop', 'ember-service/inject', 'ghost-admin/utils/bound-one-way', 'ember-invoke-action'], function (exports, _emberComponent, _emberRunloop, _emberServiceInject, _ghostAdminUtilsBoundOneWay, _emberInvokeAction) {

    var CmEditorComponent = _emberComponent['default'].extend(_emberInvokeAction.InvokeActionMixin, {
        classNameBindings: ['isFocused:focused'],

        _value: (0, _ghostAdminUtilsBoundOneWay['default'])('value'), // make sure a value exists
        isFocused: false,

        // options for the editor
        lineNumbers: true,
        indentUnit: 4,
        mode: 'htmlmixed',
        theme: 'xq-light',

        _editor: null, // reference to CodeMirror editor

        lazyLoader: (0, _emberServiceInject['default'])(),

        didInsertElement: function didInsertElement() {
            var _this = this;

            this._super.apply(this, arguments);

            this.get('lazyLoader').loadStyle('codemirror', 'codemirror/codemirror.css');

            this.get('lazyLoader').loadScript('codemirror', 'codemirror/codemirror.js').then(function () {
                (0, _emberRunloop.scheduleOnce)('afterRender', _this, function () {
                    this._initCodeMirror();
                });
            });
        },

        _initCodeMirror: function _initCodeMirror() {
            var _this2 = this;

            var options = this.getProperties('lineNumbers', 'indentUnit', 'mode', 'theme');
            var editor = new CodeMirror(this.element, options);

            editor.getDoc().setValue(this.get('_value'));

            // events
            editor.on('focus', (0, _emberRunloop.bind)(this, 'set', 'isFocused', true));
            editor.on('blur', (0, _emberRunloop.bind)(this, 'set', 'isFocused', false));
            editor.on('change', function () {
                (0, _emberRunloop['default'])(_this2, function () {
                    this.invokeAction('update', editor.getDoc().getValue());
                });
            });

            this._editor = editor;
        },

        willDestroyElement: function willDestroyElement() {
            this._super.apply(this, arguments);

            var editor = this._editor.getWrapperElement();
            editor.parentNode.removeChild(editor);
            this._editor = null;
        }
    });

    CmEditorComponent.reopenClass({
        positionalParams: ['value']
    });

    exports['default'] = CmEditorComponent;
});
/* global CodeMirror */