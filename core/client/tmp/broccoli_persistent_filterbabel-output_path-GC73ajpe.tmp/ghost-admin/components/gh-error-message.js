define('ghost-admin/components/gh-error-message', ['exports', 'ember-component', 'ember-computed', 'ember-utils'], function (exports, _emberComponent, _emberComputed, _emberUtils) {

    /**
     * Renders one random error message when passed a DS.Errors object
     * and a property name. The message will be one of the ones associated with
     * that specific property. If there are no errors associated with the property,
     * nothing will be rendered.
     * @param  {DS.Errors} errors   The DS.Errors object
     * @param  {string} property    The property name
     */
    exports['default'] = _emberComponent['default'].extend({
        tagName: 'p',
        classNames: ['response'],

        errors: null,
        property: '',

        isVisible: (0, _emberComputed.notEmpty)('errors'),

        message: (0, _emberComputed['default'])('errors.[]', 'property', function () {
            var property = this.get('property');
            var errors = this.get('errors');
            var messages = [];
            var index = undefined;

            if (!(0, _emberUtils.isEmpty)(errors) && errors.get(property)) {
                errors.get(property).forEach(function (error) {
                    messages.push(error);
                });
                index = Math.floor(Math.random() * messages.length);
                return messages[index].message;
            }
        })
    });
});