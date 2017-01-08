define('ghost-admin/tests/acceptance/settings/slack-test', ['exports', 'mocha', 'chai', 'ember-runloop', 'ghost-admin/tests/helpers/start-app', 'ghost-admin/tests/helpers/destroy-app', 'ember-cli-mirage', 'ghost-admin/tests/helpers/ember-simple-auth'], function (exports, _mocha, _chai, _emberRunloop, _ghostAdminTestsHelpersStartApp, _ghostAdminTestsHelpersDestroyApp, _emberCliMirage, _ghostAdminTestsHelpersEmberSimpleAuth) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    (0, _mocha.describe)('Acceptance: Settings - Apps - Slack', function () {
        var application = undefined;

        (0, _mocha.beforeEach)(function () {
            application = (0, _ghostAdminTestsHelpersStartApp['default'])();
        });

        (0, _mocha.afterEach)(function () {
            (0, _ghostAdminTestsHelpersDestroyApp['default'])(application);
        });

        (0, _mocha.it)('redirects to signin when not authenticated', function () {
            (0, _ghostAdminTestsHelpersEmberSimpleAuth.invalidateSession)(application);
            visit('/settings/apps/slack');

            andThen(function () {
                (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/signin');
            });
        });

        (0, _mocha.it)('redirects to team page when authenticated as author', function () {
            var role = server.create('role', { name: 'Author' });
            var user = server.create('user', { roles: [role], slug: 'test-user' });

            (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            visit('/settings/apps/slack');

            andThen(function () {
                (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/team/test-user');
            });
        });

        (0, _mocha.it)('redirects to team page when authenticated as editor', function () {
            var role = server.create('role', { name: 'Editor' });
            var user = server.create('user', { roles: [role], slug: 'test-user' });

            (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            visit('/settings/apps/slack');

            andThen(function () {
                (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/team');
            });
        });

        (0, _mocha.describe)('when logged in', function () {
            (0, _mocha.beforeEach)(function () {
                var role = server.create('role', { name: 'Administrator' });
                var user = server.create('user', { roles: [role] });

                server.loadFixtures();

                return (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            });

            (0, _mocha.it)('it validates and saves a slack url properly', function () {
                visit('/settings/apps/slack');

                andThen(function () {
                    // has correct url
                    (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/settings/apps/slack');
                });

                fillIn('#slack-settings input[name="slack[url]"]', 'notacorrecturl');
                click('#saveSlackIntegration');

                andThen(function () {
                    (0, _chai.expect)(find('#slack-settings .error .response').text().trim(), 'inline validation response').to.equal('The URL must be in a format like https://hooks.slack.com/services/<your personal key>');
                });

                fillIn('#slack-settings input[name="slack[url]"]', 'https://hooks.slack.com/services/1275958430');
                click('#sendTestNotification');

                andThen(function () {
                    (0, _chai.expect)(find('.gh-alert-blue').length, 'modal element').to.equal(1);
                    (0, _chai.expect)(find('#slack-settings .error .response').text().trim(), 'inline validation response').to.equal('');
                });

                andThen(function () {
                    server.put('/settings/', function (db, request) {
                        return new _emberCliMirage['default'].Response(402, {}, {
                            errors: [{
                                errorType: 'ValidationError',
                                message: 'Test error'
                            }]
                        });
                    });
                });

                click('.gh-alert-blue .gh-alert-close');
                click('#sendTestNotification');

                // we shouldn't try to send the test request if the save fails
                andThen(function () {
                    var _server$pretender$handledRequests$slice = server.pretender.handledRequests.slice(-1);

                    var _server$pretender$handledRequests$slice2 = _slicedToArray(_server$pretender$handledRequests$slice, 1);

                    var lastRequest = _server$pretender$handledRequests$slice2[0];

                    (0, _chai.expect)(lastRequest.url).to.not.match(/\/slack\/test/);
                    (0, _chai.expect)(find('.gh-alert-blue').length, 'check slack alert after api validation error').to.equal(0);
                });
            });
        });
    });
});
/* jshint expr:true */