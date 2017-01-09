define('ghost-admin/components/modals/invite-new-user', ['exports', 'rsvp', 'ember-service/inject', 'ember-array/utils', 'ember-runloop', 'ghost-admin/components/modals/base', 'ghost-admin/mixins/validation-engine'], function (exports, _rsvp, _emberServiceInject, _emberArrayUtils, _emberRunloop, _ghostAdminComponentsModalsBase, _ghostAdminMixinsValidationEngine) {
    var Promise = _rsvp['default'].Promise;
    exports['default'] = _ghostAdminComponentsModalsBase['default'].extend(_ghostAdminMixinsValidationEngine['default'], {
        classNames: 'modal-content invite-new-user',

        role: null,
        roles: null,
        authorRole: null,
        submitting: false,

        validationType: 'inviteUser',

        notifications: (0, _emberServiceInject['default'])(),
        store: (0, _emberServiceInject['default'])(),

        init: function init() {
            this._super.apply(this, arguments);

            // populate roles and set initial value for the dropdown
            _emberRunloop['default'].schedule('afterRender', this, function () {
                var _this = this;

                this.get('store').query('role', { permissions: 'assign' }).then(function (roles) {
                    var authorRole = roles.findBy('name', 'Author');

                    _this.set('roles', roles);
                    _this.set('authorRole', authorRole);

                    if (!_this.get('role')) {
                        _this.set('role', authorRole);
                    }
                });
            });
        },

        willDestroyElement: function willDestroyElement() {
            this._super.apply(this, arguments);
            // TODO: this should not be needed, ValidationEngine acts as a
            // singleton and so it's errors and hasValidated state stick around
            this.get('errors').clear();
            this.set('hasValidated', (0, _emberArrayUtils.A)());
        },

        validate: function validate() {
            var _this2 = this;

            var email = this.get('email');

            // TODO: either the validator should check the email's existence or
            // the API should return an appropriate error when attempting to save
            return new Promise(function (resolve, reject) {
                return _this2._super().then(function () {
                    _this2.get('store').findAll('user', { reload: true }).then(function (result) {
                        var invitedUser = result.findBy('email', email);

                        if (invitedUser) {
                            _this2.get('errors').clear('email');
                            if (invitedUser.get('status') === 'invited' || invitedUser.get('status') === 'invited-pending') {
                                _this2.get('errors').add('email', 'A user with that email address was already invited.');
                            } else {
                                _this2.get('errors').add('email', 'A user with that email address already exists.');
                            }

                            // TODO: this shouldn't be needed, ValidationEngine doesn't mark
                            // properties as validated when validating an entire object
                            _this2.get('hasValidated').addObject('email');
                            reject();
                        } else {
                            resolve();
                        }
                    });
                }, function () {
                    // TODO: this shouldn't be needed, ValidationEngine doesn't mark
                    // properties as validated when validating an entire object
                    _this2.get('hasValidated').addObject('email');
                    reject();
                });
            });
        },

        actions: {
            setRole: function setRole(role) {
                this.set('role', role);
            },

            confirm: function confirm() {
                var _this3 = this;

                var email = this.get('email');
                var role = this.get('role');
                var notifications = this.get('notifications');
                var newUser = undefined;

                this.validate().then(function () {
                    _this3.set('submitting', true);

                    newUser = _this3.get('store').createRecord('user', {
                        email: email,
                        role: role,
                        status: 'invited'
                    });

                    newUser.save().then(function () {
                        var notificationText = 'Invitation sent! (' + email + ')';

                        // If sending the invitation email fails, the API will still return a status of 201
                        // but the user's status in the response object will be 'invited-pending'.
                        if (newUser.get('status') === 'invited-pending') {
                            notifications.showAlert('Invitation email was not sent.  Please try resending.', { type: 'error', key: 'invite.send.failed' });
                        } else {
                            notifications.showNotification(notificationText, { key: 'invite.send.success' });
                        }
                    })['catch'](function (error) {
                        newUser.deleteRecord();
                        notifications.showAPIError(error, { key: 'invite.send' });
                    })['finally'](function () {
                        _this3.send('closeModal');
                    });
                });
            }
        }
    });
});