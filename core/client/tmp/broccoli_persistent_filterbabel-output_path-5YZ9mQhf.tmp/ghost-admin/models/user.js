define('ghost-admin/models/user', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships', 'ember-computed', 'ember-service/inject', 'ember-concurrency', 'ghost-admin/mixins/validation-engine'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships, _emberComputed, _emberServiceInject, _emberConcurrency, _ghostAdminMixinsValidationEngine) {
    exports['default'] = _emberDataModel['default'].extend(_ghostAdminMixinsValidationEngine['default'], {
        validationType: 'user',

        uuid: (0, _emberDataAttr['default'])('string'),
        name: (0, _emberDataAttr['default'])('string'),
        slug: (0, _emberDataAttr['default'])('string'),
        email: (0, _emberDataAttr['default'])('string'),
        image: (0, _emberDataAttr['default'])('string'),
        cover: (0, _emberDataAttr['default'])('string'),
        bio: (0, _emberDataAttr['default'])('string'),
        website: (0, _emberDataAttr['default'])('string'),
        location: (0, _emberDataAttr['default'])('string'),
        accessibility: (0, _emberDataAttr['default'])('string'),
        status: (0, _emberDataAttr['default'])('string'),
        language: (0, _emberDataAttr['default'])('string', { defaultValue: 'en_US' }),
        metaTitle: (0, _emberDataAttr['default'])('string'),
        metaDescription: (0, _emberDataAttr['default'])('string'),
        lastLoginUTC: (0, _emberDataAttr['default'])('moment-utc'),
        createdAtUTC: (0, _emberDataAttr['default'])('moment-utc'),
        createdBy: (0, _emberDataAttr['default'])('number'),
        updatedAtUTC: (0, _emberDataAttr['default'])('moment-utc'),
        updatedBy: (0, _emberDataAttr['default'])('number'),
        roles: (0, _emberDataRelationships.hasMany)('role', {
            embedded: 'always',
            async: false
        }),
        count: (0, _emberDataAttr['default'])('raw'),
        facebook: (0, _emberDataAttr['default'])('facebook-url-user'),
        twitter: (0, _emberDataAttr['default'])('twitter-url-user'),

        ghostPaths: (0, _emberServiceInject['default'])(),
        ajax: (0, _emberServiceInject['default'])(),
        session: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),

        // TODO: Once client-side permissions are in place,
        // remove the hard role check.
        isAuthor: (0, _emberComputed.equal)('role.name', 'Author'),
        isEditor: (0, _emberComputed.equal)('role.name', 'Editor'),
        isAdmin: (0, _emberComputed.equal)('role.name', 'Administrator'),
        isOwner: (0, _emberComputed.equal)('role.name', 'Owner'),

        isLoggedIn: (0, _emberComputed['default'])('id', 'session.user.id', function () {
            return this.get('id') === this.get('session.user.id');
        }),

        active: (0, _emberComputed['default'])('status', function () {
            return ['active', 'warn-1', 'warn-2', 'warn-3', 'warn-4', 'locked'].indexOf(this.get('status')) > -1;
        }),

        invited: (0, _emberComputed['default'])('status', function () {
            return ['invited', 'invited-pending'].indexOf(this.get('status')) > -1;
        }),

        pending: (0, _emberComputed.equal)('status', 'invited-pending'),

        role: (0, _emberComputed['default'])('roles', {
            get: function get() {
                return this.get('roles.firstObject');
            },
            set: function set(key, value) {
                // Only one role per user, so remove any old data.
                this.get('roles').clear();
                this.get('roles').pushObject(value);

                return value;
            }
        }),

        saveNewPassword: (0, _emberConcurrency.task)(regeneratorRuntime.mark(function callee$0$0() {
            var validation, url;
            return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
                while (1) switch (context$1$0.prev = context$1$0.next) {
                    case 0:
                        validation = this.get('isLoggedIn') ? 'ownPasswordChange' : 'passwordChange';
                        context$1$0.prev = 1;
                        context$1$0.next = 4;
                        return this.validate({ property: validation });

                    case 4:
                        context$1$0.next = 9;
                        break;

                    case 6:
                        context$1$0.prev = 6;
                        context$1$0.t0 = context$1$0['catch'](1);
                        return context$1$0.abrupt('return');

                    case 9:
                        context$1$0.prev = 9;
                        url = this.get('ghostPaths.url').api('users', 'password');
                        context$1$0.next = 13;
                        return this.get('ajax').put(url, {
                            data: {
                                password: [{
                                    user_id: this.get('id'),
                                    oldPassword: this.get('password'),
                                    newPassword: this.get('newPassword'),
                                    ne2Password: this.get('ne2Password')
                                }]
                            }
                        });

                    case 13:

                        this.setProperties({
                            password: '',
                            newPassword: '',
                            ne2Password: ''
                        });

                        this.get('notifications').showNotification('Password updated.', { type: 'success', key: 'user.change-password.success' });

                        // clear errors manually for ne2password because validation
                        // engine only clears the "validated proeprty"
                        // TODO: clean up once we have a better validations library
                        this.get('errors').remove('ne2Password');
                        context$1$0.next = 21;
                        break;

                    case 18:
                        context$1$0.prev = 18;
                        context$1$0.t1 = context$1$0['catch'](9);

                        this.get('notifications').showAPIError(context$1$0.t1, { key: 'user.change-password' });

                    case 21:
                    case 'end':
                        return context$1$0.stop();
                }
            }, callee$0$0, this, [[1, 6], [9, 18]]);
        })).drop(),

        resendInvite: function resendInvite() {
            var fullUserData = this.toJSON();
            var userData = {
                email: fullUserData.email,
                roles: fullUserData.roles
            };
            var inviteUrl = this.get('ghostPaths.url').api('users');

            return this.get('ajax').post(inviteUrl, {
                data: JSON.stringify({ users: [userData] }),
                contentType: 'application/json'
            });
        }
    });
});
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */

// validation error, don't do anything