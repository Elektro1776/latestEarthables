define('ghost-admin/components/gh-trim-focus-input', ['exports', 'ember-computed', 'ghost-admin/components/gh-input'], function (exports, _emberComputed, _ghostAdminComponentsGhInput) {

    /**
     * This doesn't override the OneWayInput component because
     * we need finer control. It borrows
     * parts from both the OneWayInput component and Ember's default
     * input component
     */
    var TrimFocusInputComponent = _ghostAdminComponentsGhInput['default'].extend({

        shouldFocus: true,

        attributeBindings: ['autofocus'],

        autofocus: (0, _emberComputed['default'])(function () {
            if (this.get('shouldFocus')) {
                return device.ios() ? false : 'autofocus';
            }

            return false;
        }),

        init: function init() {
            this._super.apply(this, arguments);
        },

        didInsertElement: function didInsertElement() {
            this._super.apply(this, arguments);
            this._focus();
        },

        sanitizeInput: function sanitizeInput(input) {
            if (input && typeof input.trim === 'function') {
                return input.trim();
            } else {
                return input;
            }
        },

        _focus: function _focus() {
            // Until mobile safari has better support
            // for focusing, we just ignore it
            if (this.get('shouldFocus') && !device.ios()) {
                this.element.focus();
            }
        }
    });

    exports['default'] = TrimFocusInputComponent;
});
/*global device*/