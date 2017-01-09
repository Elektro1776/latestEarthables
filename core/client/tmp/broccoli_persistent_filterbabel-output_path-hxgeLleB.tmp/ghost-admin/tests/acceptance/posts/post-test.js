define('ghost-admin/tests/acceptance/posts/post-test', ['exports', 'mocha', 'chai', 'ghost-admin/tests/helpers/start-app', 'ghost-admin/tests/helpers/destroy-app', 'ghost-admin/tests/helpers/ember-simple-auth', 'ghost-admin/tests/helpers/adapter-error', 'ember-cli-mirage'], function (exports, _mocha, _chai, _ghostAdminTestsHelpersStartApp, _ghostAdminTestsHelpersDestroyApp, _ghostAdminTestsHelpersEmberSimpleAuth, _ghostAdminTestsHelpersAdapterError, _emberCliMirage) {

    (0, _mocha.describe)('Acceptance: Posts - Post', function () {
        var application = undefined;

        (0, _mocha.beforeEach)(function () {
            application = (0, _ghostAdminTestsHelpersStartApp['default'])();
        });

        (0, _mocha.afterEach)(function () {
            (0, _ghostAdminTestsHelpersDestroyApp['default'])(application);
        });

        (0, _mocha.describe)('when logged in', function () {
            (0, _mocha.beforeEach)(function () {
                var role = server.create('role', { name: 'Administrator' });
                var user = server.create('user', { roles: [role] });

                // load the settings fixtures
                // TODO: this should always be run for acceptance tests
                server.loadFixtures();

                return (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            });

            (0, _mocha.it)('can visit post route', function () {
                var posts = server.createList('post', 6);

                visit('/');

                andThen(function () {
                    (0, _chai.expect)(find('.posts-list li').length, 'post list count').to.equal(6);

                    // if we're in "desktop" size, we should redirect and highlight
                    if (find('.content-preview:visible').length) {
                        (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/' + posts[0].id);
                        // expect(find('.posts-list li').first().hasClass('active'), 'highlights latest post').to.be.true;
                        (0, _chai.expect)(find('.posts-list li:nth-child(1) .status span').first().hasClass('scheduled'), 'first post in list is a scheduled one').to.be['true'];
                        (0, _chai.expect)(find('.posts-list li:nth-child(3) .status span').first().hasClass('draft'), 'third post in list is a draft').to.be['true'];
                        (0, _chai.expect)(find('.posts-list li:nth-child(5) .status time').first().hasClass('published'), 'fifth post in list is a published one').to.be['true'];
                    }
                });

                // check if we can edit the post
                click('.post-edit');

                andThen(function () {
                    (0, _chai.expect)(currentURL(), 'currentURL to editor').to.equal('/editor/1');
                });

                // TODO: test the right order of the listes posts
                //  and fix the faker import to ensure correct ordering
            });

            (0, _mocha.it)('redirects to 404 when post does not exist', function () {
                server.get('/posts/200/', function () {
                    return new _emberCliMirage['default'].Response(404, { 'Content-Type': 'application/json' }, { errors: [{ message: 'Post not found.', errorType: 'NotFoundError' }] });
                });

                (0, _ghostAdminTestsHelpersAdapterError.errorOverride)();

                visit('/200');

                andThen(function () {
                    (0, _ghostAdminTestsHelpersAdapterError.errorReset)();
                    (0, _chai.expect)(currentPath()).to.equal('error404');
                    (0, _chai.expect)(currentURL()).to.equal('/200');
                });
            });
        });
    });
});
/* jshint expr:true */
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */