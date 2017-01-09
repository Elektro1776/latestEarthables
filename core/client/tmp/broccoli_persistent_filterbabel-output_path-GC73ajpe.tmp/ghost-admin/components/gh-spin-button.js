define('ghost-admin/components/gh-spin-button', ['exports', 'ember-component', 'ember', 'ember-computed', 'ember-metal/observer', 'ember-runloop'], function (exports, _emberComponent, _ember, _emberComputed, _emberMetalObserver, _emberRunloop) {

    // ember-cli-shims doesn't export Ember.Testing
    var testing = _ember['default'].testing;
    exports['default'] = _emberComponent['default'].extend({
        tagName: 'button',
        buttonText: '',
        submitting: false,
        showSpinner: false,
        showSpinnerTimeout: null,
        autoWidth: true,

        // Disable Button when isLoading equals true
        attributeBindings: ['disabled', 'type', 'tabindex'],

        // Must be set on the controller
        disabled: (0, _emberComputed.equal)('showSpinner', true),

        click: function click() {
            if (this.get('action')) {
                this.sendAction('action');
                return false;
            }
            return true;
        },

        toggleSpinner: (0, _emberMetalObserver['default'])('submitting', function () {
            var submitting = this.get('submitting');
            var timeout = this.get('showSpinnerTimeout');
            var delay = testing ? 10 : 1000;

            if (submitting) {
                this.set('showSpinner', true);
                this.set('showSpinnerTimeout', _emberRunloop['default'].later(this, function () {
                    if (!this.get('submitting')) {
                        this.set('showSpinner', false);
                    }
                    this.set('showSpinnerTimeout', null);
                }, delay));
            } else if (!submitting && timeout === null) {
                this.set('showSpinner', false);
            }
        }),

        setSize: (0, _emberMetalObserver['default'])('showSpinner', function () {
            if (this.get('showSpinner') && this.get('autoWidth')) {
                this.$().width(this.$().width());
                this.$().height(this.$().height());
            } else {
                this.$().width('');
                this.$().height('');
            }
        }),

        willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            _emberRunloop['default'].cancel(this.get('showSpinnerTimeout'));
        }
    });
});