define('ghost-admin/controllers/setup/three', ['exports', 'ember-controller', 'rsvp', 'ember-computed', 'ember-array/utils', 'ember-service/inject', 'ember-controller/inject', 'ember-string', 'ember-runloop', 'ember-data'], function (exports, _emberController, _rsvp, _emberComputed, _emberArrayUtils, _emberServiceInject, _emberControllerInject, _emberString, _emberRunloop, _emberData) {
    var Errors = _emberData['default'].Errors;
    exports['default'] = _emberController['default'].extend({
        notifications: (0, _emberServiceInject['default'])(),
        two: (0, _emberControllerInject['default'])('setup/two'),

        errors: Errors.create(),
        hasValidated: (0, _emberArrayUtils.A)(),
        users: '',
        ownerEmail: (0, _emberComputed.alias)('two.email'),
        submitting: false,

        usersArray: (0, _emberComputed['default'])('users', function () {
            var errors = this.get('errors');
            var users = this.get('users').split('\n').filter(function (email) {
                return email.trim().length > 0;
            });

            // remove "no users to invite" error if we have users
            if (users.uniq().length > 0 && errors.get('users.length') === 1) {
                if (errors.get('users.firstObject').message.match(/no users/i)) {
                    errors.remove('users');
                }
            }

            return users.uniq();
        }),

        validUsersArray: (0, _emberComputed['default'])('usersArray', 'ownerEmail', function () {
            var ownerEmail = this.get('ownerEmail');

            return this.get('usersArray').filter(function (user) {
                return validator.isEmail(user) && user !== ownerEmail;
            });
        }),

        invalidUsersArray: (0, _emberComputed['default'])('usersArray', 'ownerEmail', function () {
            var ownerEmail = this.get('ownerEmail');

            return this.get('usersArray').reject(function (user) {
                return validator.isEmail(user) || user === ownerEmail;
            });
        }),

        validationResult: (0, _emberComputed['default'])('invalidUsersArray', function () {
            var errors = [];

            this.get('invalidUsersArray').forEach(function (user) {
                errors.push({
                    user: user,
                    error: 'email'
                });
            });

            if (errors.length === 0) {
                // ensure we aren't highlighting fields when everything is fine
                this.get('errors').clear();
                return true;
            } else {
                return errors;
            }
        }),

        validate: function validate() {
            var errors = this.get('errors');
            var validationResult = this.get('validationResult');
            var property = 'users';

            errors.clear();

            // If property isn't in the `hasValidated` array, add it to mark that this field can show a validation result
            this.get('hasValidated').addObject(property);

            if (validationResult === true) {
                return true;
            }

            validationResult.forEach(function (error) {
                // Only one error type here so far, but one day the errors might be more detailed
                switch (error.error) {
                    case 'email':
                        errors.add(property, error.user + ' is not a valid email.');
                }
            });

            return false;
        },

        buttonText: (0, _emberComputed['default'])('errors.users', 'validUsersArray', 'invalidUsersArray', function () {
            var usersError = this.get('errors.users.firstObject.message');
            var validNum = this.get('validUsersArray').length;
            var invalidNum = this.get('invalidUsersArray').length;
            var userCount = undefined;

            if (usersError && usersError.match(/no users/i)) {
                return usersError;
            }

            if (invalidNum > 0) {
                userCount = invalidNum === 1 ? 'email address' : 'email addresses';
                return invalidNum + ' invalid ' + userCount;
            }

            if (validNum > 0) {
                userCount = validNum === 1 ? 'user' : 'users';
                userCount = validNum + ' ' + userCount;
            } else {
                userCount = 'some users';
            }

            return 'Invite ' + userCount;
        }),

        buttonClass: (0, _emberComputed['default'])('validationResult', 'usersArray.length', function () {
            if (this.get('validationResult') === true && this.get('usersArray.length') > 0) {
                return 'btn-green';
            } else {
                return 'btn-minor';
            }
        }),

        authorRole: (0, _emberComputed['default'])(function () {
            return this.store.findAll('role', { reload: true }).then(function (roles) {
                return roles.findBy('name', 'Author');
            });
        }),

        _transitionAfterSubmission: function _transitionAfterSubmission() {
            if (!this._hasTransitioned) {
                this._hasTransitioned = true;
                this.transitionToRoute('posts.index');
            }
        },

        actions: {
            validate: function validate() {
                this.validate();
            },

            invite: function invite() {
                var _this = this;

                var users = this.get('usersArray');
                var notifications = this.get('notifications');
                var invitationsString = undefined,
                    submissionTimeout = undefined;

                if (this.validate() && users.length > 0) {
                    this.set('submitting', true);
                    this._hasTransitioned = false;

                    // wait for 4 seconds, otherwise transition anyway
                    submissionTimeout = _emberRunloop['default'].later(this, function () {
                        this._transitionAfterSubmission();
                    }, 4000);

                    this.get('authorRole').then(function (authorRole) {
                        _rsvp['default'].Promise.all(users.map(function (user) {
                            var newUser = _this.store.createRecord('user', {
                                email: user,
                                status: 'invited',
                                role: authorRole
                            });

                            return newUser.save().then(function () {
                                return {
                                    email: user,
                                    success: newUser.get('status') === 'invited'
                                };
                            })['catch'](function () {
                                return {
                                    email: user,
                                    success: false
                                };
                            });
                        })).then(function (invites) {
                            var erroredEmails = [];
                            var successCount = 0;
                            var message = undefined;

                            _emberRunloop['default'].cancel(submissionTimeout);

                            invites.forEach(function (invite) {
                                if (invite.success) {
                                    successCount++;
                                } else {
                                    erroredEmails.push(invite.email);
                                }
                            });

                            if (erroredEmails.length > 0) {
                                invitationsString = erroredEmails.length > 1 ? ' invitations: ' : ' invitation: ';
                                message = 'Failed to send ' + erroredEmails.length + ' ' + invitationsString;
                                message += erroredEmails.join(', ');
                                message += ". Please check your email configuration, see <a href=\'http://support.ghost.org/mail\' target=\'_blank\'>http://support.ghost.org/mail</a> for instructions";

                                message = (0, _emberString.htmlSafe)(message);
                                notifications.showAlert(message, { type: 'error', delayed: successCount > 0, key: 'signup.send-invitations.failed' });
                            }

                            if (successCount > 0) {
                                // pluralize
                                invitationsString = successCount > 1 ? 'invitations' : 'invitation';
                                notifications.showAlert(successCount + ' ' + invitationsString + ' sent!', { type: 'success', delayed: true, key: 'signup.send-invitations.success' });
                            }

                            _this.set('submitting', false);

                            _emberRunloop['default'].schedule('actions', _this, function () {
                                this.send('loadServerNotifications');
                                this._transitionAfterSubmission();
                            });
                        });
                    });
                } else if (users.length === 0) {
                    this.get('errors').add('users', 'No users to invite');
                }
            },

            skipInvite: function skipInvite() {
                this.send('loadServerNotifications');
                this.transitionToRoute('posts.index');
            }
        }
    });
});