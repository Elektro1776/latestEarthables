define('ghost-admin/validators/subscriber', ['exports', 'ghost-admin/validators/base'], function (exports, _ghostAdminValidatorsBase) {
    exports['default'] = _ghostAdminValidatorsBase['default'].create({
        properties: ['email'],

        email: function email(model) {
            var email = model.get('email');

            if (validator.empty(email)) {
                model.get('errors').add('email', 'Please enter an email.');
                model.get('hasValidated').pushObject('email');
                this.invalidate();
            } else if (!validator.isEmail(email)) {
                model.get('errors').add('email', 'Invalid email.');
                model.get('hasValidated').pushObject('email');
                this.invalidate();
            }
        }
    });
});