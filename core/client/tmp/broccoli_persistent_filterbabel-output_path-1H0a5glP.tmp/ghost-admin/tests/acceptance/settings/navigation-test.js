define('ghost-admin/tests/acceptance/settings/navigation-test', ['exports', 'mocha', 'chai', 'ghost-admin/tests/helpers/start-app', 'ghost-admin/tests/helpers/destroy-app', 'ghost-admin/tests/helpers/ember-simple-auth'], function (exports, _mocha, _chai, _ghostAdminTestsHelpersStartApp, _ghostAdminTestsHelpersDestroyApp, _ghostAdminTestsHelpersEmberSimpleAuth) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    (0, _mocha.describe)('Acceptance: Settings - Navigation', function () {
        var application = undefined;

        (0, _mocha.beforeEach)(function () {
            application = (0, _ghostAdminTestsHelpersStartApp['default'])();
        });

        (0, _mocha.afterEach)(function () {
            (0, _ghostAdminTestsHelpersDestroyApp['default'])(application);
        });

        (0, _mocha.it)('redirects to signin when not authenticated', function () {
            (0, _ghostAdminTestsHelpersEmberSimpleAuth.invalidateSession)(application);
            visit('/settings/navigation');

            andThen(function () {
                (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/signin');
            });
        });

        (0, _mocha.it)('redirects to team page when authenticated as author', function () {
            var role = server.create('role', { name: 'Author' });
            var user = server.create('user', { roles: [role], slug: 'test-user' });

            (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            visit('/settings/navigation');

            andThen(function () {
                (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/team/test-user');
            });
        });

        (0, _mocha.describe)('when logged in', function () {
            (0, _mocha.beforeEach)(function () {
                var role = server.create('role', { name: 'Administrator' });
                var user = server.create('user', { roles: [role] });

                // load the settings fixtures
                // TODO: this should always be run for acceptance tests
                server.loadFixtures();

                (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            });

            (0, _mocha.it)('can visit /settings/navigation', function () {
                visit('/settings/navigation');

                andThen(function () {
                    (0, _chai.expect)(currentPath()).to.equal('settings.navigation');

                    // fixtures contain two nav items, check for three rows as we
                    // should have one extra that's blank
                    (0, _chai.expect)(find('.gh-blognav-item').length, 'navigation items count').to.equal(3);
                });
            });

            (0, _mocha.it)('saves navigation settings', function () {
                visit('/settings/navigation');
                fillIn('.gh-blognav-label:first input', 'Test');
                fillIn('.gh-blognav-url:first input', '/test');
                triggerEvent('.gh-blognav-url:first input', 'blur');

                click('.btn-blue');

                andThen(function () {
                    var _server$db$settings$where = server.db.settings.where({ key: 'navigation' });

                    var _server$db$settings$where2 = _slicedToArray(_server$db$settings$where, 1);

                    var navSetting = _server$db$settings$where2[0];

                    (0, _chai.expect)(navSetting.value).to.equal('[{"label":"Test","url":"/test/"},{"label":"About","url":"/about"}]');

                    // don't test against .error directly as it will pick up failed
                    // tests "pre.error" elements
                    (0, _chai.expect)(find('span.error').length, 'error fields count').to.equal(0);
                    (0, _chai.expect)(find('.gh-alert').length, 'alerts count').to.equal(0);
                    (0, _chai.expect)(find('.response:visible').length, 'validation errors count').to.equal(0);
                });
            });

            (0, _mocha.it)('validates new item correctly on save', function () {
                visit('/settings/navigation');

                click('.btn-blue');

                andThen(function () {
                    (0, _chai.expect)(find('.gh-blognav-item').length, 'number of nav items after saving with blank new item').to.equal(3);
                });

                fillIn('.gh-blognav-label:last input', 'Test');
                fillIn('.gh-blognav-url:last input', 'http://invalid domain/');
                triggerEvent('.gh-blognav-url:last input', 'blur');

                click('.btn-blue');

                andThen(function () {
                    (0, _chai.expect)(find('.gh-blognav-item').length, 'number of nav items after saving with invalid new item').to.equal(3);

                    (0, _chai.expect)(find('.gh-blognav-item:last .error').length, 'number of invalid fields in new item').to.equal(1);
                });
            });

            (0, _mocha.it)('clears unsaved settings when navigating away', function () {
                visit('/settings/navigation');
                fillIn('.gh-blognav-label:first input', 'Test');
                triggerEvent('.gh-blognav-label:first input', 'blur');

                andThen(function () {
                    (0, _chai.expect)(find('.gh-blognav-label:first input').val()).to.equal('Test');
                });

                visit('/settings/code-injection');
                visit('/settings/navigation');

                andThen(function () {
                    (0, _chai.expect)(find('.gh-blognav-label:first input').val()).to.equal('Home');
                });
            });

            (0, _mocha.it)('can add and remove items', function (done) {
                visit('/settings/navigation');

                click('.gh-blognav-add');

                andThen(function () {
                    (0, _chai.expect)(find('.gh-blognav-label:last .response').is(':visible'), 'blank label has validation error').to.be['true'];
                });

                fillIn('.gh-blognav-label:last input', 'New');
                triggerEvent('.gh-blognav-label:last input', 'keypress', {});

                andThen(function () {
                    (0, _chai.expect)(find('.gh-blognav-label:last .response').is(':visible'), 'label validation is visible after typing').to.be['false'];
                });

                fillIn('.gh-blognav-url:last input', '/new');
                triggerEvent('.gh-blognav-url:last input', 'keypress', {});
                triggerEvent('.gh-blognav-url:last input', 'blur');

                andThen(function () {
                    (0, _chai.expect)(find('.gh-blognav-url:last .response').is(':visible'), 'url validation is visible after typing').to.be['false'];

                    (0, _chai.expect)(find('.gh-blognav-url:last input').val()).to.equal(window.location.protocol + '//' + window.location.host + '/new/');
                });

                click('.gh-blognav-add');

                andThen(function () {
                    (0, _chai.expect)(find('.gh-blognav-item').length, 'number of nav items after successful add').to.equal(4);

                    (0, _chai.expect)(find('.gh-blognav-label:last input').val(), 'new item label value after successful add').to.be.blank;

                    (0, _chai.expect)(find('.gh-blognav-url:last input').val(), 'new item url value after successful add').to.equal(window.location.protocol + '//' + window.location.host + '/');

                    (0, _chai.expect)(find('.gh-blognav-item .response:visible').length, 'number or validation errors shown after successful add').to.equal(0);
                });

                click('.gh-blognav-item:first .gh-blognav-delete');

                andThen(function () {
                    (0, _chai.expect)(find('.gh-blognav-item').length, 'number of nav items after successful remove').to.equal(3);
                });

                click('.btn-blue');

                andThen(function () {
                    var _server$db$settings$where3 = server.db.settings.where({ key: 'navigation' });

                    var _server$db$settings$where32 = _slicedToArray(_server$db$settings$where3, 1);

                    var navSetting = _server$db$settings$where32[0];

                    (0, _chai.expect)(navSetting.value).to.equal('[{"label":"About","url":"/about"},{"label":"New","url":"/new/"}]');

                    done();
                });
            });
        });
    });
});
/* jshint expr:true */
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */