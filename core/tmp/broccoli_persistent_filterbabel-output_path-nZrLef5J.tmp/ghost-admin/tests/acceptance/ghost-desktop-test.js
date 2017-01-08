define('ghost-admin/tests/acceptance/ghost-desktop-test', ['exports', 'mocha', 'chai', 'ghost-admin/tests/helpers/start-app', 'ghost-admin/tests/helpers/destroy-app', 'ghost-admin/tests/helpers/ember-simple-auth'], function (exports, _mocha, _chai, _ghostAdminTestsHelpersStartApp, _ghostAdminTestsHelpersDestroyApp, _ghostAdminTestsHelpersEmberSimpleAuth) {

    var originalAgent = window.navigator.userAgent;

    var setUserAgent = function setUserAgent(userAgent) {
        var userAgentProp = {
            get: function get() {
                return userAgent;
            },
            configurable: true
        };

        try {
            Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
        } catch (e) {
            window.navigator = Object.create(window.navigator, {
                userAgent: userAgentProp
            });
        }
    };

    var restoreUserAgent = function restoreUserAgent() {
        setUserAgent(originalAgent);
    };

    (0, _mocha.describe)('Acceptance: Ghost Desktop', function () {
        var application = undefined;

        (0, _mocha.beforeEach)(function () {
            application = (0, _ghostAdminTestsHelpersStartApp['default'])();
        });

        (0, _mocha.afterEach)(function () {
            (0, _ghostAdminTestsHelpersDestroyApp['default'])(application);
        });

        (0, _mocha.describe)('update alerts for broken versions', function () {
            (0, _mocha.beforeEach)(function () {
                var role = server.create('role', { name: 'Administrator' });
                var user = server.create('user', { roles: [role] });

                server.loadFixtures();

                return (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            });

            (0, _mocha.afterEach)(function () {
                restoreUserAgent();
            });

            (0, _mocha.it)('displays alert for broken version', function () {
                setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) ghost-desktop/0.4.0 Chrome/51.0.2704.84 Electron/1.2.2 Safari/537.36');

                visit('/');

                andThen(function () {
                    // has an alert with matching text
                    (0, _chai.expect)(find('.gh-alert-yellow').length, 'number of warning alerts').to.equal(1);
                    (0, _chai.expect)(find('.gh-alert-yellow').text().trim(), 'alert text').to.match(/Your version of Ghost Desktop needs to be manually updated/);
                });
            });

            (0, _mocha.it)('doesn\'t display alert for working version', function () {
                setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) ghost-desktop/0.5.1 Chrome/51.0.2704.84 Electron/1.2.2 Safari/537.36');

                visit('/');

                andThen(function () {
                    // no alerts
                    (0, _chai.expect)(find('.gh-alert').length, 'number of alerts').to.equal(0);
                });
            });
        });
    });
});
/* jshint expr:true */