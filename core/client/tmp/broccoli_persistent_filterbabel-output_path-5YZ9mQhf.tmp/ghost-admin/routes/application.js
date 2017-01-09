define('ghost-admin/routes/application', ['exports', 'ember-route', 'ember-string', 'ember-service/inject', 'ember-runloop', 'ember-array/utils', 'ember-simple-auth/configuration', 'ember-simple-auth/mixins/application-route-mixin', 'ghost-admin/mixins/shortcuts-route', 'ghost-admin/utils/ctrl-or-cmd', 'ghost-admin/utils/window-proxy'], function (exports, _emberRoute, _emberString, _emberServiceInject, _emberRunloop, _emberArrayUtils, _emberSimpleAuthConfiguration, _emberSimpleAuthMixinsApplicationRouteMixin, _ghostAdminMixinsShortcutsRoute, _ghostAdminUtilsCtrlOrCmd, _ghostAdminUtilsWindowProxy) {

    function K() {
        return this;
    }

    var shortcuts = {};

    shortcuts.esc = { action: 'closeMenus', scope: 'all' };
    shortcuts[_ghostAdminUtilsCtrlOrCmd['default'] + '+s'] = { action: 'save', scope: 'all' };

    exports['default'] = _emberRoute['default'].extend(_emberSimpleAuthMixinsApplicationRouteMixin['default'], _ghostAdminMixinsShortcutsRoute['default'], {
        shortcuts: shortcuts,

        config: (0, _emberServiceInject['default'])(),
        feature: (0, _emberServiceInject['default'])(),
        dropdown: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),
        upgradeNotification: (0, _emberServiceInject['default'])(),

        afterModel: function afterModel(model, transition) {
            this._super.apply(this, arguments);

            if (this.get('session.isAuthenticated')) {
                this.set('appLoadTransition', transition);
                transition.send('loadServerNotifications');
                transition.send('checkForOutdatedDesktopApp');

                // return the feature loading promise so that we block until settings
                // are loaded in order for synchronous access everywhere
                return this.get('feature').fetch();
            }
        },

        title: function title(tokens) {
            return tokens.join(' - ') + ' - ' + this.get('config.blogTitle');
        },

        sessionAuthenticated: function sessionAuthenticated() {
            var _this = this;

            if (this.get('session.skipAuthSuccessHandler')) {
                return;
            }

            // standard ESA post-sign-in redirect
            this._super.apply(this, arguments);

            // trigger post-sign-in background behaviour
            this.get('session.user').then(function (user) {
                _this.send('signedIn', user);
            });
        },

        sessionInvalidated: function sessionInvalidated() {
            var transition = this.get('appLoadTransition');

            if (transition) {
                transition.send('authorizationFailed');
            } else {
                _emberRunloop['default'].scheduleOnce('routerTransitions', this, function () {
                    this.send('authorizationFailed');
                });
            }
        },

        actions: {
            openMobileMenu: function openMobileMenu() {
                this.controller.set('showMobileMenu', true);
            },

            openSettingsMenu: function openSettingsMenu() {
                this.controller.set('showSettingsMenu', true);
            },

            closeMenus: function closeMenus() {
                this.get('dropdown').closeDropdowns();
                this.controller.setProperties({
                    showSettingsMenu: false,
                    showMobileMenu: false
                });
            },

            didTransition: function didTransition() {
                this.set('appLoadTransition', null);
                this.send('closeMenus');
            },

            signedIn: function signedIn() {
                this.get('notifications').clearAll();
                this.send('loadServerNotifications', true);
            },

            invalidateSession: function invalidateSession() {
                var _this2 = this;

                this.get('session').invalidate()['catch'](function (error) {
                    _this2.get('notifications').showAlert(error.message, { type: 'error', key: 'session.invalidate.failed' });
                });
            },

            authorizationFailed: function authorizationFailed() {
                _ghostAdminUtilsWindowProxy['default'].replaceLocation(_emberSimpleAuthConfiguration['default'].baseURL);
            },

            loadServerNotifications: function loadServerNotifications(isDelayed) {
                var _this3 = this;

                if (this.get('session.isAuthenticated')) {
                    this.get('session.user').then(function (user) {
                        if (!user.get('isAuthor') && !user.get('isEditor')) {
                            _this3.store.findAll('notification', { reload: true }).then(function (serverNotifications) {
                                serverNotifications.forEach(function (notification) {
                                    if (notification.get('type') === 'upgrade') {
                                        _this3.get('upgradeNotification').set('content', notification.get('message'));
                                    } else {
                                        _this3.get('notifications').handleNotification(notification, isDelayed);
                                    }
                                });
                            });
                        }
                    });
                }
            },

            checkForOutdatedDesktopApp: function checkForOutdatedDesktopApp() {
                // Check if the user is running an older version of Ghost Desktop
                // that needs to be manually updated
                // (yes, the desktop team is deeply ashamed of these lines 😢)
                var ua = navigator && navigator.userAgent ? navigator.userAgent : null;

                if (ua && ua.includes && ua.includes('ghost-desktop')) {
                    var updateCheck = /ghost-desktop\/0\.((5\.0)|((4|2)\.0)|((3\.)(0|1)))/;
                    var link = '<a href="https://dev.ghost.org/ghost-desktop-manual-update" target="_blank">click here</a>';
                    var msg = 'Your version of Ghost Desktop needs to be manually updated. Please ' + link + ' to get started.';

                    if (updateCheck.test(ua)) {
                        this.get('notifications').showAlert((0, _emberString.htmlSafe)(msg), {
                            type: 'warn',
                            key: 'desktop.manual.upgrade'
                        });
                    }
                }
            },

            toggleMarkdownHelpModal: function toggleMarkdownHelpModal() {
                this.get('controller').toggleProperty('showMarkdownHelpModal');
            },

            // noop default for unhandled save (used from shortcuts)
            save: K,

            error: function error(_error, transition) {
                if (_error && (0, _emberArrayUtils.isEmberArray)(_error.errors)) {
                    switch (_error.errors[0].errorType) {

                        case 'NotFoundError':
                            if (transition) {
                                transition.abort();
                            }

                            var routeInfo = transition.handlerInfos[transition.handlerInfos.length - 1];
                            var router = this.get('router');
                            var params = [];

                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;

                            try {
                                for (var _iterator = Object.keys(routeInfo.params)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var key = _step.value;

                                    params.push(routeInfo.params[key]);
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator['return']) {
                                        _iterator['return']();
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }

                            return this.transitionTo('error404', router.generate.apply(router, [routeInfo.name].concat(params)).replace('/ghost/', '').replace(/^\//g, ''));

                        case 'VersionMismatchError':
                            if (transition) {
                                transition.abort();
                            }

                            this.get('upgradeStatus').requireUpgrade();
                            return false;

                        case 'Maintenance':
                            if (transition) {
                                transition.abort();
                            }

                            this.get('upgradeStatus').maintenanceAlert();
                            return false;

                        default:
                            this.get('notifications').showAPIError(_error);
                            // don't show the 500 page if we weren't navigating
                            if (!transition) {
                                return false;
                            }
                    }
                }

                // fallback to 500 error page
                return true;
            }
        }
    });
});