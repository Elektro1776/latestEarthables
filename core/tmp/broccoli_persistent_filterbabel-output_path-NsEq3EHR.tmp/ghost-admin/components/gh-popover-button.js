define('ghost-admin/components/gh-popover-button', ['exports', 'ember-service/inject', 'ghost-admin/components/gh-dropdown-button'], function (exports, _emberServiceInject, _ghostAdminComponentsGhDropdownButton) {

    function K() {
        return this;
    }

    exports['default'] = _ghostAdminComponentsGhDropdownButton['default'].extend({
        dropdown: (0, _emberServiceInject['default'])(),

        click: K,

        mouseEnter: function mouseEnter() {
            this._super.apply(this, arguments);
            this.get('dropdown').toggleDropdown(this.get('popoverName'), this);
        },

        mouseLeave: function mouseLeave() {
            this._super.apply(this, arguments);
            this.get('dropdown').toggleDropdown(this.get('popoverName'), this);
        }
    });
});