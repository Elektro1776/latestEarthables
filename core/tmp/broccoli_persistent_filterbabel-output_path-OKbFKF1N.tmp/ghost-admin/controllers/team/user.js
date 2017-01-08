define('ghost-admin/controllers/team/user', ['exports', 'ember-controller', 'ember-computed', 'ember-service/inject', 'ember-string', 'ember-runloop', 'ember-array/utils', 'ember-concurrency', 'ghost-admin/utils/isNumber', 'ghost-admin/utils/bound-one-way'], function (exports, _emberController, _emberComputed, _emberServiceInject, _emberString, _emberRunloop, _emberArrayUtils, _emberConcurrency, _ghostAdminUtilsIsNumber, _ghostAdminUtilsBoundOneWay) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports['default'] = _emberController['default'].extend({
        showDeleteUserModal: false,
        showTransferOwnerModal: false,
        showUploadCoverModal: false,
        showUplaodImageModal: false,
        _scratchFacebook: null,
        _scratchTwitter: null,

        ajax: (0, _emberServiceInject['default'])(),
        dropdown: (0, _emberServiceInject['default'])(),
        ghostPaths: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),
        session: (0, _emberServiceInject['default'])(),
        slugGenerator: (0, _emberServiceInject['default'])(),

        user: (0, _emberComputed.alias)('model'),
        currentUser: (0, _emberComputed.alias)('session.user'),

        email: (0, _emberComputed.readOnly)('model.email'),
        slugValue: (0, _ghostAdminUtilsBoundOneWay['default'])('model.slug'),

        isNotOwnersProfile: (0, _emberComputed.not)('user.isOwner'),
        isAdminUserOnOwnerProfile: (0, _emberComputed.and)('currentUser.isAdmin', 'user.isOwner'),
        canAssignRoles: (0, _emberComputed.or)('currentUser.isAdmin', 'currentUser.isOwner'),
        canMakeOwner: (0, _emberComputed.and)('currentUser.isOwner', 'isNotOwnProfile', 'user.isAdmin'),
        rolesDropdownIsVisible: (0, _emberComputed.and)('isNotOwnProfile', 'canAssignRoles', 'isNotOwnersProfile'),
        userActionsAreVisible: (0, _emberComputed.or)('deleteUserActionIsVisible', 'canMakeOwner'),

        isNotOwnProfile: (0, _emberComputed['default'])('user.id', 'currentUser.id', function () {
            return this.get('user.id') !== this.get('currentUser.id');
        }),

        deleteUserActionIsVisible: (0, _emberComputed['default'])('currentUser', 'canAssignRoles', 'user', function () {
            if (this.get('canAssignRoles') && this.get('isNotOwnProfile') && !this.get('user.isOwner') || this.get('currentUser.isEditor') && (this.get('isNotOwnProfile') || this.get('user.isAuthor'))) {
                return true;
            }
        }),

        // duplicated in gh-user-active -- find a better home and consolidate?
        userDefault: (0, _emberComputed['default'])('ghostPaths', function () {
            return this.get('ghostPaths.subdir') + '/ghost/img/user-image.png';
        }),

        userImageBackground: (0, _emberComputed['default'])('user.image', 'userDefault', function () {
            var url = this.get('user.image') || this.get('userDefault');

            return (0, _emberString.htmlSafe)('background-image: url(' + url + ')');
        }),
        // end duplicated

        coverDefault: (0, _emberComputed['default'])('ghostPaths', function () {
            return this.get('ghostPaths.subdir') + '/ghost/img/user-cover.png';
        }),

        coverImageBackground: (0, _emberComputed['default'])('user.cover', 'coverDefault', function () {
            var url = this.get('user.cover') || this.get('coverDefault');

            return (0, _emberString.htmlSafe)('background-image: url(' + url + ')');
        }),

        coverTitle: (0, _emberComputed['default'])('user.name', function () {
            return this.get('user.name') + '\'s Cover Image';
        }),

        roles: (0, _emberComputed['default'])(function () {
            return this.store.query('role', { permissions: 'assign' });
        }),

        _deleteUser: function _deleteUser() {
            if (this.get('deleteUserActionIsVisible')) {
                var user = this.get('user');
                return user.destroyRecord();
            }
        },

        _deleteUserSuccess: function _deleteUserSuccess() {
            this.get('notifications').closeAlerts('user.delete');
            this.store.unloadAll('post');
            this.transitionToRoute('team');
        },

        _deleteUserFailure: function _deleteUserFailure() {
            this.get('notifications').showAlert('The user could not be deleted. Please try again.', { type: 'error', key: 'user.delete.failed' });
        },

        saveHandlers: (0, _emberConcurrency.taskGroup)().enqueue(),

        updateSlug: (0, _emberConcurrency.task)(regeneratorRuntime.mark(function callee$0$0(newSlug) {
            var slug, serverSlug, slugTokens, check;
            return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
                while (1) switch (context$1$0.prev = context$1$0.next) {
                    case 0:
                        slug = this.get('model.slug');

                        newSlug = newSlug || slug;
                        newSlug = newSlug.trim();

                        // Ignore unchanged slugs or candidate slugs that are empty

                        if (!(!newSlug || slug === newSlug)) {
                            context$1$0.next = 6;
                            break;
                        }

                        this.set('slugValue', slug);

                        return context$1$0.abrupt('return');

                    case 6:
                        context$1$0.next = 8;
                        return this.get('slugGenerator').generateSlug('user', newSlug);

                    case 8:
                        serverSlug = context$1$0.sent;

                        if (!(serverSlug === slug)) {
                            context$1$0.next = 11;
                            break;
                        }

                        return context$1$0.abrupt('return');

                    case 11:
                        slugTokens = serverSlug.split('-');
                        check = Number(slugTokens.pop());

                        if (!((0, _ghostAdminUtilsIsNumber['default'])(check) && check > 0)) {
                            context$1$0.next = 17;
                            break;
                        }

                        if (!(slug === slugTokens.join('-') && serverSlug !== newSlug)) {
                            context$1$0.next = 17;
                            break;
                        }

                        this.set('slugValue', slug);

                        return context$1$0.abrupt('return');

                    case 17:

                        this.set('slugValue', serverSlug);

                    case 18:
                    case 'end':
                        return context$1$0.stop();
                }
            }, callee$0$0, this);
        })).group('saveHandlers'),

        save: (0, _emberConcurrency.task)(regeneratorRuntime.mark(function callee$0$0() {
            var user, slugValue, slugChanged, model, currentPath, newPath;
            return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
                while (1) switch (context$1$0.prev = context$1$0.next) {
                    case 0:
                        user = this.get('user');
                        slugValue = this.get('slugValue');
                        slugChanged = undefined;

                        if (user.get('slug') !== slugValue) {
                            slugChanged = true;
                            user.set('slug', slugValue);
                        }

                        context$1$0.prev = 4;
                        context$1$0.next = 7;
                        return user.save({ format: false });

                    case 7:
                        model = context$1$0.sent;
                        currentPath = undefined, newPath = undefined;

                        // If the user's slug has changed, change the URL and replace
                        // the history so refresh and back button still work
                        if (slugChanged) {
                            currentPath = window.history.state.path;

                            newPath = currentPath.split('/');
                            newPath[newPath.length - 2] = model.get('slug');
                            newPath = newPath.join('/');

                            window.history.replaceState({ path: newPath }, '', newPath);
                        }

                        this.toggleProperty('submitting');
                        this.get('notifications').closeAlerts('user.update');

                        return context$1$0.abrupt('return', model);

                    case 15:
                        context$1$0.prev = 15;
                        context$1$0.t0 = context$1$0['catch'](4);

                        // validation engine returns undefined so we have to check
                        // before treating the failure as an API error
                        if (context$1$0.t0) {
                            this.get('notifications').showAPIError(context$1$0.t0, { key: 'user.update' });
                        }

                    case 18:
                    case 'end':
                        return context$1$0.stop();
                }
            }, callee$0$0, this, [[4, 15]]);
        })).group('saveHandlers'),

        actions: {
            changeRole: function changeRole(newRole) {
                this.set('model.role', newRole);
            },

            deleteUser: function deleteUser() {
                var _this = this;

                return this._deleteUser().then(function () {
                    _this._deleteUserSuccess();
                }, function () {
                    _this._deleteUserFailure();
                });
            },

            toggleDeleteUserModal: function toggleDeleteUserModal() {
                if (this.get('deleteUserActionIsVisible')) {
                    this.toggleProperty('showDeleteUserModal');
                }
            },

            validateFacebookUrl: function validateFacebookUrl() {
                var _this2 = this;

                var newUrl = this.get('_scratchFacebook');
                var oldUrl = this.get('user.facebook');
                var errMessage = '';

                if (newUrl === '') {
                    // Clear out the Facebook url
                    this.set('user.facebook', '');
                    this.get('user.errors').remove('facebook');
                    return;
                }

                // _scratchFacebook will be null unless the user has input something
                if (!newUrl) {
                    newUrl = oldUrl;
                }

                // If new url didn't change, exit
                if (newUrl === oldUrl) {
                    this.get('user.errors').remove('facebook');
                    return;
                }

                // TODO: put the validation here into a validator
                if (newUrl.match(/(?:facebook\.com\/)(\S+)/) || newUrl.match(/([a-z\d\.]+)/i)) {
                    var username = [];

                    if (newUrl.match(/(?:facebook\.com\/)(\S+)/)) {
                        var _newUrl$match = newUrl.match(/(?:facebook\.com\/)(\S+)/);

                        var _newUrl$match2 = _slicedToArray(_newUrl$match, 2);

                        username = _newUrl$match2[1];
                    } else {
                        var _newUrl$match3 = newUrl.match(/(?:https\:\/\/|http\:\/\/)?(?:www\.)?(?:\w+\.\w+\/+)?(\S+)/mi);

                        var _newUrl$match32 = _slicedToArray(_newUrl$match3, 2);

                        username = _newUrl$match32[1];
                    }

                    // check if we have a /page/username or without
                    if (username.match(/^(?:\/)?(pages?\/\S+)/mi)) {
                        var _username$match = username.match(/^(?:\/)?(pages?\/\S+)/mi);

                        // we got a page url, now save the username without the / in the beginning

                        var _username$match2 = _slicedToArray(_username$match, 2);

                        username = _username$match2[1];
                    } else if (username.match(/^(http|www)|(\/)/) || !username.match(/^([a-z\d\.]{5,50})$/mi)) {
                        errMessage = !username.match(/^([a-z\d\.]{5,50})$/mi) ? 'Your Username is not a valid Facebook Username' : 'The URL must be in a format like https://www.facebook.com/yourUsername';

                        this.get('user.errors').add('facebook', errMessage);
                        this.get('user.hasValidated').pushObject('facebook');
                        return;
                    }

                    newUrl = 'https://www.facebook.com/' + username;
                    this.set('user.facebook', newUrl);

                    this.get('user.errors').remove('facebook');
                    this.get('user.hasValidated').pushObject('facebook');

                    // User input is validated
                    this.get('save').perform().then(function () {
                        // necessary to update the value in the input field
                        _this2.set('user.facebook', '');
                        _emberRunloop['default'].schedule('afterRender', _this2, function () {
                            this.set('user.facebook', newUrl);
                        });
                    });
                } else {
                    errMessage = 'The URL must be in a format like ' + 'https://www.facebook.com/yourUsername';
                    this.get('user.errors').add('facebook', errMessage);
                    this.get('user.hasValidated').pushObject('facebook');
                    return;
                }
            },

            validateTwitterUrl: function validateTwitterUrl() {
                var _this3 = this;

                var newUrl = this.get('_scratchTwitter');
                var oldUrl = this.get('user.twitter');
                var errMessage = '';

                if (newUrl === '') {
                    // Clear out the Twitter url
                    this.set('user.twitter', '');
                    this.get('user.errors').remove('twitter');
                    return;
                }

                // _scratchTwitter will be null unless the user has input something
                if (!newUrl) {
                    newUrl = oldUrl;
                }

                // If new url didn't change, exit
                if (newUrl === oldUrl) {
                    this.get('user.errors').remove('twitter');
                    return;
                }

                // TODO: put the validation here into a validator
                if (newUrl.match(/(?:twitter\.com\/)(\S+)/) || newUrl.match(/([a-z\d\.]+)/i)) {
                    var username = [];

                    if (newUrl.match(/(?:twitter\.com\/)(\S+)/)) {
                        var _newUrl$match4 = newUrl.match(/(?:twitter\.com\/)(\S+)/);

                        var _newUrl$match42 = _slicedToArray(_newUrl$match4, 2);

                        username = _newUrl$match42[1];
                    } else {
                        var _newUrl$match5 = newUrl.match(/([^/]+)\/?$/mi);

                        var _newUrl$match52 = _slicedToArray(_newUrl$match5, 1);

                        username = _newUrl$match52[0];
                    }

                    // check if username starts with http or www and show error if so
                    if (username.match(/^(http|www)|(\/)/) || !username.match(/^[a-z\d\.\_]{1,15}$/mi)) {
                        errMessage = !username.match(/^[a-z\d\.\_]{1,15}$/mi) ? 'Your Username is not a valid Twitter Username' : 'The URL must be in a format like https://twitter.com/yourUsername';

                        this.get('user.errors').add('twitter', errMessage);
                        this.get('user.hasValidated').pushObject('twitter');
                        return;
                    }

                    newUrl = 'https://twitter.com/' + username;
                    this.set('user.twitter', newUrl);

                    this.get('user.errors').remove('twitter');
                    this.get('user.hasValidated').pushObject('twitter');

                    // User input is validated
                    this.get('save').perform().then(function () {
                        // necessary to update the value in the input field
                        _this3.set('user.twitter', '');
                        _emberRunloop['default'].schedule('afterRender', _this3, function () {
                            this.set('user.twitter', newUrl);
                        });
                    });
                } else {
                    errMessage = 'The URL must be in a format like ' + 'https://twitter.com/yourUsername';
                    this.get('user.errors').add('twitter', errMessage);
                    this.get('user.hasValidated').pushObject('twitter');
                    return;
                }
            },

            transferOwnership: function transferOwnership() {
                var _this4 = this;

                var user = this.get('user');
                var url = this.get('ghostPaths.url').api('users', 'owner');

                this.get('dropdown').closeDropdowns();

                return this.get('ajax').put(url, {
                    data: {
                        owner: [{
                            id: user.get('id')
                        }]
                    }
                }).then(function (response) {
                    // manually update the roles for the users that just changed roles
                    // because store.pushPayload is not working with embedded relations
                    if (response && (0, _emberArrayUtils.isEmberArray)(response.users)) {
                        response.users.forEach(function (userJSON) {
                            var user = _this4.store.peekRecord('user', userJSON.id);
                            var role = _this4.store.peekRecord('role', userJSON.roles[0].id);

                            user.set('role', role);
                        });
                    }

                    _this4.get('notifications').showAlert('Ownership successfully transferred to ' + user.get('name'), { type: 'success', key: 'owner.transfer.success' });
                })['catch'](function (error) {
                    _this4.get('notifications').showAPIError(error, { key: 'owner.transfer' });
                });
            },

            toggleTransferOwnerModal: function toggleTransferOwnerModal() {
                if (this.get('canMakeOwner')) {
                    this.toggleProperty('showTransferOwnerModal');
                }
            },

            toggleUploadCoverModal: function toggleUploadCoverModal() {
                this.toggleProperty('showUploadCoverModal');
            },

            toggleUploadImageModal: function toggleUploadImageModal() {
                this.toggleProperty('showUploadImageModal');
            },

            // TODO: remove those mutation actions once we have better
            // inline validations that auto-clear errors on input
            updatePassword: function updatePassword(password) {
                this.set('user.password', password);
                this.get('user.hasValidated').removeObject('password');
                this.get('user.errors').remove('password');
            },

            updateNewPassword: function updateNewPassword(password) {
                this.set('user.newPassword', password);
                this.get('user.hasValidated').removeObject('newPassword');
                this.get('user.errors').remove('newPassword');
            },

            updateNe2Password: function updateNe2Password(password) {
                this.set('user.ne2Password', password);
                this.get('user.hasValidated').removeObject('ne2Password');
                this.get('user.errors').remove('ne2Password');
            }
        }
    });
});

// If after getting the sanitized and unique slug back from the API
// we end up with a slug that matches the existing slug, abort the change

// Because the server transforms the candidate slug by stripping
// certain characters and appending a number onto the end of slugs
// to enforce uniqueness, there are cases where we can get back a
// candidate slug that is a duplicate of the original except for
// the trailing incrementor (e.g., this-is-a-slug and this-is-a-slug-2)

// get the last token out of the slug candidate and see if it's a number

// if the candidate slug is the same as the existing slug except
// for the incrementor then the existing slug should be used