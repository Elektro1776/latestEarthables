define('ghost-admin/components/gh-dropdown', ['exports', 'ember-component', 'ember-computed', 'ember-service/inject', 'ember-runloop', 'ghost-admin/mixins/dropdown-mixin'], function (exports, _emberComponent, _emberComputed, _emberServiceInject, _emberRunloop, _ghostAdminMixinsDropdownMixin) {
    exports['default'] = _emberComponent['default'].extend(_ghostAdminMixinsDropdownMixin['default'], {
        classNames: 'dropdown',
        classNameBindings: ['fadeIn:fade-in-scale:fade-out', 'isOpen:open:closed'],

        name: null,
        closeOnClick: false,

        // Helps track the user re-opening the menu while it's fading out.
        closing: false,

        // Helps track whether the dropdown is open or closes, or in a transition to either
        isOpen: false,

        // Managed the toggle between the fade-in and fade-out classes
        fadeIn: (0, _emberComputed['default'])('isOpen', 'closing', function () {
            return this.get('isOpen') && !this.get('closing');
        }),

        dropdown: (0, _emberServiceInject['default'])(),

        open: function open() {
            this.set('isOpen', true);
            this.set('closing', false);
            this.set('button.isOpen', true);
        },

        close: function close() {
            var _this = this;

            this.set('closing', true);

            if (this.get('button')) {
                this.set('button.isOpen', false);
            }

            this.$().on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function (event) {
                if (event.originalEvent.animationName === 'fade-out') {
                    (0, _emberRunloop['default'])(_this, function () {
                        if (this.get('closing')) {
                            this.set('isOpen', false);
                            this.set('closing', false);
                        }
                    });
                }
            });
        },

        // Called by the dropdown service when any dropdown button is clicked.
        toggle: function toggle(options) {
            var isClosing = this.get('closing');
            var isOpen = this.get('isOpen');
            var name = this.get('name');
            var targetDropdownName = options.target;
            var button = this.get('button');

            if (name === targetDropdownName && (!isOpen || isClosing)) {
                if (!button) {
                    button = options.button;
                    this.set('button', button);
                }
                this.open();
            } else if (isOpen) {
                this.close();
            }
        },

        click: function click(event) {
            this._super(event);

            if (this.get('closeOnClick')) {
                return this.close();
            }
        },

        didInsertElement: function didInsertElement() {
            var dropdownService = this.get('dropdown');

            this._super.apply(this, arguments);

            dropdownService.on('close', this, this.close);
            dropdownService.on('toggle', this, this.toggle);
        },

        willDestroyElement: function willDestroyElement() {
            var dropdownService = this.get('dropdown');

            this._super.apply(this, arguments);

            dropdownService.off('close', this, this.close);
            dropdownService.off('toggle', this, this.toggle);
        }
    });
});