define('ghost-admin/tests/acceptance/settings/code-injection-test', ['exports', 'mocha', 'chai', 'jquery', 'ghost-admin/tests/helpers/start-app', 'ghost-admin/tests/helpers/destroy-app', 'ghost-admin/tests/helpers/ember-simple-auth'], function (exports, _mocha, _chai, _jquery, _ghostAdminTestsHelpersStartApp, _ghostAdminTestsHelpersDestroyApp, _ghostAdminTestsHelpersEmberSimpleAuth) {

    (0, _mocha.describe)('Acceptance: Settings - Code-Injection', function () {
        var application = undefined;

        (0, _mocha.beforeEach)(function () {
            application = (0, _ghostAdminTestsHelpersStartApp['default'])();
        });

        (0, _mocha.afterEach)(function () {
            (0, _ghostAdminTestsHelpersDestroyApp['default'])(application);
        });

        (0, _mocha.it)('redirects to signin when not authenticated', function () {
            (0, _ghostAdminTestsHelpersEmberSimpleAuth.invalidateSession)(application);
            visit('/settings/code-injection');

            andThen(function () {
                (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/signin');
            });
        });

        (0, _mocha.it)('redirects to team page when authenticated as author', function () {
            var role = server.create('role', { name: 'Author' });
            var user = server.create('user', { roles: [role], slug: 'test-user' });

            (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            visit('/settings/code-injection');

            andThen(function () {
                (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/team/test-user');
            });
        });

        (0, _mocha.it)('redirects to team page when authenticated as editor', function () {
            var role = server.create('role', { name: 'Editor' });
            var user = server.create('user', { roles: [role], slug: 'test-user' });

            (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            visit('/settings/code-injection');

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

            (0, _mocha.it)('it renders, loads editors correctly', function () {
                visit('/settings/code-injection');

                andThen(function () {
                    // has correct url
                    (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/settings/code-injection');

                    // has correct page title
                    (0, _chai.expect)(document.title, 'page title').to.equal('Settings - Code Injection - Test Blog');

                    // highlights nav menu
                    (0, _chai.expect)((0, _jquery['default'])('.gh-nav-settings-code-injection').hasClass('active'), 'highlights nav menu item').to.be['true'];

                    (0, _chai.expect)(find('.view-header .view-actions .btn-blue').text().trim(), 'save button text').to.equal('Save');

                    (0, _chai.expect)(find('#ghost-head .CodeMirror').length, 'ghost head codemirror element').to.equal(1);
                    (0, _chai.expect)((0, _jquery['default'])('#ghost-head .CodeMirror').hasClass('cm-s-xq-light'), 'ghost head editor theme').to.be['true'];

                    (0, _chai.expect)(find('#ghost-foot .CodeMirror').length, 'ghost head codemirror element').to.equal(1);
                    (0, _chai.expect)((0, _jquery['default'])('#ghost-foot .CodeMirror').hasClass('cm-s-xq-light'), 'ghost head editor theme').to.be['true'];
                });
            });
        });
    });
});
/* jshint expr:true */