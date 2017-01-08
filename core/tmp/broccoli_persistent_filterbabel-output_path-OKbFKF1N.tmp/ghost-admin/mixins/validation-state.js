define('ghost-admin/mixins/validation-state', ['exports', 'ember-metal/mixin', 'ember-computed', 'ember-utils', 'ember-array/utils'], function (exports, _emberMetalMixin, _emberComputed, _emberUtils, _emberArrayUtils) {
    exports['default'] = _emberMetalMixin['default'].create({

        errors: null,
        property: '',
        hasValidated: (0, _emberArrayUtils.A)(),

        hasError: (0, _emberComputed['default'])('errors.[]', 'property', 'hasValidated.[]', function () {
            var property = this.get('property');
            var errors = this.get('errors');
            var hasValidated = this.get('hasValidated');

            // if we aren't looking at a specific property we always want an error class
            if (!property && !(0, _emberUtils.isEmpty)(errors)) {
                return true;
            }

            // If we haven't yet validated this field, there is no validation class needed
            if (!hasValidated || !hasValidated.contains(property)) {
                return false;
            }

            if (errors) {
                return errors.get(property);
            }

            return false;
        })

    });
});