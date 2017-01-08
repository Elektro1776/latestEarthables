define('ghost-admin/tests/acceptance/authentication-test', ['exports', 'mocha', 'chai', 'jquery', 'ember-runloop', 'ghost-admin/tests/helpers/start-app', 'ghost-admin/tests/helpers/destroy-app', 'ghost-admin/tests/helpers/ember-simple-auth', 'ember-cli-mirage', 'ghost-admin/utils/window-proxy', 'ghost-admin/utils/ghost-paths'], function (exports, _mocha, _chai, _jquery, _emberRunloop, _ghostAdminTestsHelpersStartApp, _ghostAdminTestsHelpersDestroyApp, _ghostAdminTestsHelpersEmberSimpleAuth, _emberCliMirage, _ghostAdminUtilsWindowProxy, _ghostAdminUtilsGhostPaths) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    var Ghost = (0, _ghostAdminUtilsGhostPaths['default'])();

    (0, _mocha.describe)('Acceptance: Authentication', function () {
        var application = undefined,
            originalReplaceLocation = undefined;

        (0, _mocha.beforeEach)(function () {
            application = (0, _ghostAdminTestsHelpersStartApp['default'])();
        });

        (0, _mocha.afterEach)(function () {
            (0, _ghostAdminTestsHelpersDestroyApp['default'])(application);
        });

        (0, _mocha.describe)('general page', function () {
            (0, _mocha.beforeEach)(function () {
                originalReplaceLocation = _ghostAdminUtilsWindowProxy['default'].replaceLocation;
                _ghostAdminUtilsWindowProxy['default'].replaceLocation = function (url) {
                    visit(url);
                };

                server.loadFixtures();
                var role = server.create('role', { name: 'Administrator' });
                var user = server.create('user', { roles: [role], slug: 'test-user' });
            });

            (0, _mocha.afterEach)(function () {
                _ghostAdminUtilsWindowProxy['default'].replaceLocation = originalReplaceLocation;
            });

            (0, _mocha.it)('invalidates session on 401 API response', function () {
                // return a 401 when attempting to retrieve users
                server.get('/users/', function (db, request) {
                    return new _emberCliMirage['default'].Response(401, {}, {
                        errors: [{ message: 'Access denied.', errorType: 'UnauthorizedError' }]
                    });
                });

                (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
                visit('/team');

                andThen(function () {
                    (0, _chai.expect)(currentURL(), 'url after 401').to.equal('/signin');
                });
            });

            (0, _mocha.it)('doesn\'t show navigation menu on invalid url when not authenticated', function () {
                (0, _ghostAdminTestsHelpersEmberSimpleAuth.invalidateSession)(application);

                visit('/');

                andThen(function () {
                    (0, _chai.expect)(currentURL(), 'current url').to.equal('/signin');
                    (0, _chai.expect)(find('nav.gh-nav').length, 'nav menu presence').to.equal(0);
                });

                visit('/signin/invalidurl/');

                andThen(function () {
                    (0, _chai.expect)(currentURL(), 'url after invalid url').to.equal('/signin/invalidurl/');
                    (0, _chai.expect)(currentPath(), 'path after invalid url').to.equal('error404');
                    (0, _chai.expect)(find('nav.gh-nav').length, 'nav menu presence').to.equal(0);
                });
            });

            (0, _mocha.it)('shows nav menu on invalid url when authenticated', function () {
                (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
                visit('/signin/invalidurl/');

                andThen(function () {
                    (0, _chai.expect)(currentURL(), 'url after invalid url').to.equal('/signin/invalidurl/');
                    (0, _chai.expect)(currentPath(), 'path after invalid url').to.equal('error404');
                    (0, _chai.expect)(find('nav.gh-nav').length, 'nav menu presence').to.equal(1);
                });
            });
        });

        (0, _mocha.describe)('editor', function () {
            var origDebounce = _emberRunloop['default'].debounce;
            var origThrottle = _emberRunloop['default'].throttle;

            // we don't want the autosave interfering in this test
            (0, _mocha.beforeEach)(function () {
                _emberRunloop['default'].debounce = function () {};
                _emberRunloop['default'].throttle = function () {};
            });

            (0, _mocha.it)('displays re-auth modal attempting to save with invalid session', function () {
                var role = server.create('role', { name: 'Administrator' });
                var user = server.create('user', { roles: [role] });

                // simulate an invalid session when saving the edited post
                server.put('/posts/:id/', function (db, request) {
                    var post = db.posts.find(request.params.id);

                    var _JSON$parse$posts = _slicedToArray(JSON.parse(request.requestBody).posts, 1);

                    var attrs = _JSON$parse$posts[0];

                    if (attrs.markdown === 'Edited post body') {
                        return new _emberCliMirage['default'].Response(401, {}, {
                            errors: [{ message: 'Access denied.', errorType: 'UnauthorizedError' }]
                        });
                    } else {
                        return {
                            posts: [post]
                        };
                    }
                });

                server.loadFixtures();
                (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);

                visit('/editor');

                // create the post
                fillIn('#entry-title', 'Test Post');
                fillIn('textarea.markdown-editor', 'Test post body');
                click('.js-publish-button');

                andThen(function () {
                    // we shouldn't have a modal at this point
                    (0, _chai.expect)(find('.modal-container #login').length, 'modal exists').to.equal(0);
                    // we also shouldn't have any alerts
                    (0, _chai.expect)(find('.gh-alert').length, 'no of alerts').to.equal(0);
                });

                // update the post
                fillIn('textarea.markdown-editor', 'Edited post body');
                click('.js-publish-button');

                andThen(function () {
                    // we should see a re-auth modal
                    (0, _chai.expect)(find('.fullscreen-modal #login').length, 'modal exists').to.equal(1);
                });
            });

            // don't clobber debounce/throttle for future tests
            (0, _mocha.afterEach)(function () {
                _emberRunloop['default'].debounce = origDebounce;
                _emberRunloop['default'].throttle = origThrottle;
            });
        });

        (0, _mocha.it)('adds auth headers to jquery ajax', function (done) {
            var role = server.create('role', { name: 'Administrator' });
            var user = server.create('user', { roles: [role] });

            server.post('/uploads', function (db, request) {
                return request;
            });
            server.loadFixtures();

            // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
            (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application, {
                access_token: 'test_token',
                expires_in: 3600,
                token_type: 'Bearer'
            });
            // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

            // necessary to visit a page to fully boot the app in testing
            visit('/').andThen(function () {
                _jquery['default'].ajax({
                    type: 'POST',
                    url: Ghost.apiRoot + '/uploads/',
                    data: { test: 'Test' }
                }).then(function (request) {
                    (0, _chai.expect)(request.requestHeaders.Authorization, 'Authorization header').to.exist;
                    (0, _chai.expect)(request.requestHeaders.Authorization, 'Authotization header content').to.equal('Bearer test_token');
                }).always(function () {
                    done();
                });
            });
        });
    });
});
/* jshint expr:true */