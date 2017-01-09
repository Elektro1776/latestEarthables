define('ghost-admin/controllers/settings/general', ['exports', 'ember-controller', 'ember-computed', 'ember-service/inject', 'ember-metal/observer', 'ember-runloop', 'ghost-admin/mixins/settings-save', 'ghost-admin/utils/random-password', 'jquery'], function (exports, _emberController, _emberComputed, _emberServiceInject, _emberMetalObserver, _emberRunloop, _ghostAdminMixinsSettingsSave, _ghostAdminUtilsRandomPassword, _jquery) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports['default'] = _emberController['default'].extend(_ghostAdminMixinsSettingsSave['default'], {

        availableTimezones: null,
        themeToDelete: null,

        showUploadLogoModal: false,
        showUploadCoverModal: false,
        showDeleteThemeModal: (0, _emberComputed.notEmpty)('themeToDelete'),

        ajax: (0, _emberServiceInject['default'])(),
        config: (0, _emberServiceInject['default'])(),
        ghostPaths: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),
        session: (0, _emberServiceInject['default'])(),
        _scratchFacebook: null,
        _scratchTwitter: null,

        logoImageSource: (0, _emberComputed['default'])('model.logo', function () {
            return this.get('model.logo') || '';
        }),

        coverImageSource: (0, _emberComputed['default'])('model.cover', function () {
            return this.get('model.cover') || '';
        }),

        isDatedPermalinks: (0, _emberComputed['default'])('model.permalinks', {
            set: function set(key, value) {
                this.set('model.permalinks', value ? '/:year/:month/:day/:slug/' : '/:slug/');

                var slugForm = this.get('model.permalinks');
                return slugForm !== '/:slug/';
            },

            get: function get() {
                var slugForm = this.get('model.permalinks');

                return slugForm !== '/:slug/';
            }
        }),

        generatePassword: (0, _emberMetalObserver['default'])('model.isPrivate', function () {
            this.get('model.errors').remove('password');
            if (this.get('model.isPrivate') && this.get('model.hasDirtyAttributes')) {
                this.get('model').set('password', (0, _ghostAdminUtilsRandomPassword['default'])());
            }
        }),

        _deleteTheme: function _deleteTheme() {
            var _this = this;

            var theme = this.get('themeToDelete');
            var themeURL = this.get('ghostPaths.apiRoot') + '/themes/' + theme.name + '/';

            if (!theme) {
                return;
            }

            return this.get('ajax').del(themeURL).then(function () {
                _this.send('reloadSettings');
            })['catch'](function (error) {
                _this.get('notifications').showAPIError(error);
            });
        },

        save: function save() {
            var _this2 = this;

            var notifications = this.get('notifications');
            var config = this.get('config');
            return this.get('model').save().then(function (model) {
                config.set('blogTitle', model.get('title'));

                // this forces the document title to recompute after
                // a blog title change
                _this2.send('collectTitleTokens', []);

                return model;
            })['catch'](function (error) {
                if (error) {
                    notifications.showAPIError(error, { key: 'settings.save' });
                }
                throw error;
            });
        },

        actions: {
            checkPostsPerPage: function checkPostsPerPage() {
                var postsPerPage = this.get('model.postsPerPage');

                if (postsPerPage < 1 || postsPerPage > 1000 || isNaN(postsPerPage)) {
                    this.set('model.postsPerPage', 5);
                }
            },

            setTheme: function setTheme(theme) {
                this.set('model.activeTheme', theme.name);
                this.send('save');
            },

            downloadTheme: function downloadTheme(theme) {
                var themeURL = this.get('ghostPaths.apiRoot') + '/themes/' + theme.name;
                var accessToken = this.get('session.data.authenticated.access_token');
                var downloadURL = themeURL + '/download/?access_token=' + accessToken;
                var iframe = (0, _jquery['default'])('#iframeDownload');

                if (iframe.length === 0) {
                    iframe = (0, _jquery['default'])('<iframe>', { id: 'iframeDownload' }).hide().appendTo('body');
                }

                iframe.attr('src', downloadURL);
            },

            deleteTheme: function deleteTheme(theme) {
                if (theme) {
                    return this.set('themeToDelete', theme);
                }

                return this._deleteTheme();
            },

            hideDeleteThemeModal: function hideDeleteThemeModal() {
                this.set('themeToDelete', null);
            },

            setTimezone: function setTimezone(timezone) {
                this.set('model.activeTimezone', timezone.name);
            },

            toggleUploadCoverModal: function toggleUploadCoverModal() {
                this.toggleProperty('showUploadCoverModal');
            },

            toggleUploadLogoModal: function toggleUploadLogoModal() {
                this.toggleProperty('showUploadLogoModal');
            },

            validateFacebookUrl: function validateFacebookUrl() {
                var _this3 = this;

                var newUrl = this.get('_scratchFacebook');
                var oldUrl = this.get('model.facebook');
                var errMessage = '';

                if (newUrl === '') {
                    // Clear out the Facebook url
                    this.set('model.facebook', '');
                    this.get('model.errors').remove('facebook');
                    return;
                }

                // _scratchFacebook will be null unless the user has input something
                if (!newUrl) {
                    newUrl = oldUrl;
                }

                // If new url didn't change, exit
                if (newUrl === oldUrl) {
                    this.get('model.errors').remove('facebook');
                    return;
                }

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
                        errMessage = !username.match(/^([a-z\d\.]{5,50})$/mi) ? 'Your Page name is not a valid Facebook Page name' : 'The URL must be in a format like https://www.facebook.com/yourPage';

                        this.get('model.errors').add('facebook', errMessage);
                        this.get('model.hasValidated').pushObject('facebook');
                        return;
                    }

                    newUrl = 'https://www.facebook.com/' + username;
                    this.set('model.facebook', newUrl);

                    this.get('model.errors').remove('facebook');
                    this.get('model.hasValidated').pushObject('facebook');

                    // User input is validated
                    return this.save().then(function () {
                        _this3.set('model.facebook', '');
                        _emberRunloop['default'].schedule('afterRender', _this3, function () {
                            this.set('model.facebook', newUrl);
                        });
                    });
                } else {
                    errMessage = 'The URL must be in a format like ' + 'https://www.facebook.com/yourPage';
                    this.get('model.errors').add('facebook', errMessage);
                    this.get('model.hasValidated').pushObject('facebook');
                    return;
                }
            },

            validateTwitterUrl: function validateTwitterUrl() {
                var _this4 = this;

                var newUrl = this.get('_scratchTwitter');
                var oldUrl = this.get('model.twitter');
                var errMessage = '';

                if (newUrl === '') {
                    // Clear out the Twitter url
                    this.set('model.twitter', '');
                    this.get('model.errors').remove('twitter');
                    return;
                }

                // _scratchTwitter will be null unless the user has input something
                if (!newUrl) {
                    newUrl = oldUrl;
                }

                // If new url didn't change, exit
                if (newUrl === oldUrl) {
                    this.get('model.errors').remove('twitter');
                    return;
                }

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

                        this.get('model.errors').add('twitter', errMessage);
                        this.get('model.hasValidated').pushObject('twitter');
                        return;
                    }

                    newUrl = 'https://twitter.com/' + username;
                    this.set('model.twitter', newUrl);

                    this.get('model.errors').remove('twitter');
                    this.get('model.hasValidated').pushObject('twitter');

                    // User input is validated
                    return this.save().then(function () {
                        _this4.set('model.twitter', '');
                        _emberRunloop['default'].schedule('afterRender', _this4, function () {
                            this.set('model.twitter', newUrl);
                        });
                    });
                } else {
                    errMessage = 'The URL must be in a format like ' + 'https://twitter.com/yourUsername';
                    this.get('model.errors').add('twitter', errMessage);
                    this.get('model.hasValidated').pushObject('twitter');
                    return;
                }
            }
        }
    });
});