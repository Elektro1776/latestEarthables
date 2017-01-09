define('ghost-admin/components/gh-dropdown-button', ['exports', 'ember-component', 'ember-service/inject', 'ghost-admin/mixins/dropdown-mixin'], function (exports, _emberComponent, _emberServiceInject, _ghostAdminMixinsDropdownMixin) {
    exports['default'] = _emberComponent['default'].extend(_ghostAdminMixinsDropdownMixin['default'], {
        tagName: 'button',
        attributeBindings: 'role',
        role: 'button',

        // matches with the dropdown this button toggles
        dropdownName: null,

        dropdown: (0, _emberServiceInject['default'])(),

        // Notify dropdown service this dropdown should be toggled
        click: function click(event) {
            this._super(event);
            this.get('dropdown').toggleDropdown(this.get('dropdownName'), this);
        }
    });
});