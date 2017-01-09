define('ghost-admin/services/dropdown', ['exports', 'ember-service', 'ember-evented', 'ghost-admin/mixins/body-event-listener'], function (exports, _emberService, _emberEvented, _ghostAdminMixinsBodyEventListener) {
    exports['default'] = _emberService['default'].extend(_emberEvented['default'], _ghostAdminMixinsBodyEventListener['default'], {
        bodyClick: function bodyClick(event) {
            /*jshint unused:false */
            this.closeDropdowns();
        },

        closeDropdowns: function closeDropdowns() {
            this.trigger('close');
        },

        toggleDropdown: function toggleDropdown(dropdownName, dropdownButton) {
            this.trigger('toggle', { target: dropdownName, button: dropdownButton });
        }
    });
});

// This is used by the dropdown initializer (and subsequently popovers) to manage closing & toggling