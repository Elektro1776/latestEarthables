define('ghost-admin/validators/new-user', ['exports', 'ghost-admin/validators/base'], function (exports, _ghostAdminValidatorsBase) {
    exports['default'] = _ghostAdminValidatorsBase['default'].extend({
        properties: ['name', 'email', 'password'],

        name: function name(model) {
            var name = model.get('name');

            if (!validator.isLength(name, 1)) {
                model.get('errors').add('name', 'Please enter a name.');
                this.invalidate();
            }
        },

        email: function email(model) {
            var email = model.get('email');

            if (validator.empty(email)) {
                model.get('errors').add('email', 'Please enter an email.');
                this.invalidate();
            } else if (!validator.isEmail(email)) {
                model.get('errors').add('email', 'Invalid Email.');
                this.invalidate();
            }
        },

        password: function password(model) {
            var password = model.get('password');

            if (!validator.isLength(password, 8)) {
                model.get('errors').add('password', 'Password must be at least 8 characters long');
                this.invalidate();
            }
        }
    });
});