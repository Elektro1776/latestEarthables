define('ghost-admin/components/modals/base', ['exports', 'ember-component', 'ember-runloop', 'ember-invoke-action'], function (exports, _emberComponent, _emberRunloop, _emberInvokeAction) {
    exports['default'] = _emberComponent['default'].extend({
        tagName: 'section',
        classNames: 'modal-content',

        _previousKeymasterScope: null,

        _setupShortcuts: function _setupShortcuts() {
            var _this = this;

            (0, _emberRunloop['default'])(function () {
                document.activeElement.blur();
            });
            this._previousKeymasterScope = key.getScope();

            key('enter', 'modal', function () {
                _this.send('confirm');
            });

            key('escape', 'modal', function () {
                _this.send('closeModal');
            });

            key.setScope('modal');
        },

        _removeShortcuts: function _removeShortcuts() {
            key.unbind('enter', 'modal');
            key.unbind('escape', 'modal');

            key.setScope(this._previousKeymasterScope);
        },

        didInsertElement: function didInsertElement() {
            this._super.apply(this, arguments);
            this._setupShortcuts();
        },

        willDestroyElement: function willDestroyElement() {
            this._super.apply(this, arguments);
            this._removeShortcuts();
        },

        actions: {
            confirm: function confirm() {
                throw new Error('You must override the "confirm" action in your modal component');
            },

            closeModal: function closeModal() {
                (0, _emberInvokeAction.invokeAction)(this, 'closeModal');
            }
        }
    });
});
/* global key */