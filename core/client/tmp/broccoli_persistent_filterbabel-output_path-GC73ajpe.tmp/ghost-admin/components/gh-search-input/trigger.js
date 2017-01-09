define('ghost-admin/components/gh-search-input/trigger', ['exports', 'ember-runloop', 'ember-utils', 'ember-component', 'ember-invoke-action'], function (exports, _emberRunloop, _emberUtils, _emberComponent, _emberInvokeAction) {
    exports['default'] = _emberComponent['default'].extend({
        open: function open() {
            this.get('select.actions').open();
        },

        close: function close() {
            this.get('select.actions').close();
        },

        actions: {
            captureMouseDown: function captureMouseDown(e) {
                e.stopPropagation();
            },

            search: function search(term) {
                if ((0, _emberUtils.isBlank)(term) === this.get('select.isOpen')) {
                    _emberRunloop['default'].scheduleOnce('afterRender', this, (0, _emberUtils.isBlank)(term) ? this.close : this.open);
                }

                (0, _emberInvokeAction.invokeAction)(this, 'select.actions.search', term);
            },

            focusInput: function focusInput() {
                this.$('input')[0].focus();
            },

            resetInput: function resetInput() {
                this.$('input').val('');
            },

            handleKeydown: function handleKeydown(e) {
                var select = this.get('select');

                // TODO: remove keycode check once EPS is updated to 1.0
                if (!select.isOpen || e.keyCode === 32) {
                    e.stopPropagation();
                }
            }
        }
    });
});