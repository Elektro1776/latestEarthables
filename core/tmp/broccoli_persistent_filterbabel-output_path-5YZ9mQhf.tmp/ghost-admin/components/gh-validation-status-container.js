define('ghost-admin/components/gh-validation-status-container', ['exports', 'ember-component', 'ember-computed', 'ghost-admin/mixins/validation-state'], function (exports, _emberComponent, _emberComputed, _ghostAdminMixinsValidationState) {

    /**
     * Handles the CSS necessary to show a specific property state. When passed a
     * DS.Errors object and a property name, if the DS.Errors object has errors for
     * the specified property, it will change the CSS to reflect the error state
     * @param  {DS.Errors} errors   The DS.Errors object
     * @param  {string} property    Name of the property
     */
    exports['default'] = _emberComponent['default'].extend(_ghostAdminMixinsValidationState['default'], {
        classNameBindings: ['errorClass'],

        errorClass: (0, _emberComputed['default'])('property', 'hasError', 'hasValidated.[]', function () {
            var hasValidated = this.get('hasValidated');
            var property = this.get('property');

            if (hasValidated && hasValidated.contains(property)) {
                return this.get('hasError') ? 'error' : 'success';
            } else {
                return '';
            }
        })
    });
});