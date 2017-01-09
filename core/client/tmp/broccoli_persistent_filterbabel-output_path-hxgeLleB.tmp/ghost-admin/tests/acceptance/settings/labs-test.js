define('ghost-admin/tests/acceptance/settings/labs-test', ['exports', 'mocha', 'chai', 'jquery', 'ghost-admin/tests/helpers/start-app', 'ghost-admin/tests/helpers/destroy-app', 'ghost-admin/tests/helpers/ember-simple-auth'], function (exports, _mocha, _chai, _jquery, _ghostAdminTestsHelpersStartApp, _ghostAdminTestsHelpersDestroyApp, _ghostAdminTestsHelpersEmberSimpleAuth) {

    (0, _mocha.describe)('Acceptance: Settings - Labs', function () {
        var application = undefined;

        (0, _mocha.beforeEach)(function () {
            application = (0, _ghostAdminTestsHelpersStartApp['default'])();
        });

        (0, _mocha.afterEach)(function () {
            (0, _ghostAdminTestsHelpersDestroyApp['default'])(application);
        });

        (0, _mocha.it)('redirects to signin when not authenticated', function () {
            (0, _ghostAdminTestsHelpersEmberSimpleAuth.invalidateSession)(application);
            visit('/settings/labs');

            andThen(function () {
                (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/signin');
            });
        });

        (0, _mocha.it)('redirects to team page when authenticated as author', function () {
            var role = server.create('role', { name: 'Author' });
            var user = server.create('user', { roles: [role], slug: 'test-user' });

            (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            visit('/settings/labs');

            andThen(function () {
                (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/team/test-user');
            });
        });

        (0, _mocha.it)('redirects to team page when authenticated as editor', function () {
            var role = server.create('role', { name: 'Editor' });
            var user = server.create('user', { roles: [role], slug: 'test-user' });

            (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            visit('/settings/labs');

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

            (0, _mocha.it)('it renders, loads modals correctly', function () {
                visit('/settings/labs');

                andThen(function () {
                    // has correct url
                    (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/settings/labs');

                    // has correct page title
                    (0, _chai.expect)(document.title, 'page title').to.equal('Settings - Labs - Test Blog');

                    // highlights nav menu
                    (0, _chai.expect)((0, _jquery['default'])('.gh-nav-settings-labs').hasClass('active'), 'highlights nav menu item').to.be['true'];
                });

                click('#settings-resetdb .js-delete');

                andThen(function () {
                    (0, _chai.expect)(find('.fullscreen-modal .modal-content').length, 'modal element').to.equal(1);
                });

                click('.fullscreen-modal .modal-footer .btn.btn-minor');

                andThen(function () {
                    (0, _chai.expect)(find('.fullscreen-modal').length, 'modal element').to.equal(0);
                });
            });
        });
    });
});
/* jshint expr:true */