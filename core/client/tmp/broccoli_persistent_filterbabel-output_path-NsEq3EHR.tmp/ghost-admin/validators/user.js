define('ghost-admin/validators/user', ['exports', 'ghost-admin/validators/base', 'ember-utils'], function (exports, _ghostAdminValidatorsBase, _emberUtils) {
    exports['default'] = _ghostAdminValidatorsBase['default'].create({
        properties: ['name', 'bio', 'email', 'location', 'website', 'roles'],

        isActive: function isActive(model) {
            return model.get('status') === 'active';
        },

        name: function name(model) {
            var name = model.get('name');

            if (this.isActive(model)) {
                if (validator.empty(name)) {
                    model.get('errors').add('name', 'Please enter a name.');
                    this.invalidate();
                } else if (!validator.isLength(name, 0, 150)) {
                    model.get('errors').add('name', 'Name is too long');
                    this.invalidate();
                }
            }
        },

        bio: function bio(model) {
            var bio = model.get('bio');

            if (this.isActive(model)) {
                if (!validator.isLength(bio, 0, 200)) {
                    model.get('errors').add('bio', 'Bio is too long');
                    this.invalidate();
                }
            }
        },

        email: function email(model) {
            var email = model.get('email');

            if (!validator.isEmail(email)) {
                model.get('errors').add('email', 'Please supply a valid email address');
                this.invalidate();
            }
        },

        location: function location(model) {
            var location = model.get('location');

            if (this.isActive(model)) {
                if (!validator.isLength(location, 0, 150)) {
                    model.get('errors').add('location', 'Location is too long');
                    this.invalidate();
                }
            }
        },

        website: function website(model) {
            var website = model.get('website');

            /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
            if (this.isActive(model)) {
                if (!validator.empty(website) && (!validator.isURL(website, { require_protocol: false }) || !validator.isLength(website, 0, 2000))) {

                    model.get('errors').add('website', 'Website is not a valid url');
                    this.invalidate();
                }
            }
            /* jscs:enable requireCamelCaseOrUpperCaseIdentifiers */
        },

        roles: function roles(model) {
            if (!this.isActive(model)) {
                var roles = model.get('roles');

                if (roles.length < 1) {
                    model.get('errors').add('role', 'Please select a role');
                    this.invalidate();
                }
            }
        },

        passwordChange: function passwordChange(model) {
            var newPassword = model.get('newPassword');
            var ne2Password = model.get('ne2Password');

            // validation only marks the requested property as validated so we
            // have to add properties manually
            model.get('hasValidated').addObject('newPassword');
            model.get('hasValidated').addObject('ne2Password');

            if ((0, _emberUtils.isBlank)(newPassword) && (0, _emberUtils.isBlank)(ne2Password)) {
                model.get('errors').add('newPassword', 'Sorry, passwords can\'t be blank');
                this.invalidate();
            } else {
                if (!validator.equals(newPassword, ne2Password)) {
                    model.get('errors').add('ne2Password', 'Your new passwords do not match');
                    this.invalidate();
                }

                if (!validator.isLength(newPassword, 8)) {
                    model.get('errors').add('newPassword', 'Your password must be at least 8 characters long.');
                    this.invalidate();
                }
            }
        },

        ownPasswordChange: function ownPasswordChange(model) {
            var oldPassword = model.get('password');

            this.passwordChange(model);

            // validation only marks the requested property as validated so we
            // have to add properties manually
            model.get('hasValidated').addObject('password');

            if ((0, _emberUtils.isBlank)(oldPassword)) {
                model.get('errors').add('password', 'Your current password is required to set a new one');
                this.invalidate();
            }
        }
    });
});