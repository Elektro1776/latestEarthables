define('ghost-admin/tests/acceptance/version-mismatch-test', ['exports', 'mocha', 'chai', 'ghost-admin/tests/helpers/start-app', 'ghost-admin/tests/helpers/destroy-app', 'ghost-admin/tests/helpers/ember-simple-auth', 'ember-cli-mirage'], function (exports, _mocha, _chai, _ghostAdminTestsHelpersStartApp, _ghostAdminTestsHelpersDestroyApp, _ghostAdminTestsHelpersEmberSimpleAuth, _emberCliMirage) {

    var versionMismatchResponse = function versionMismatchResponse() {
        return new _emberCliMirage['default'].Response(400, {}, {
            errors: [{
                errorType: 'VersionMismatchError',
                statusCode: 400
            }]
        });
    };

    (0, _mocha.describe)('Acceptance: Version Mismatch', function () {
        var application = undefined;

        (0, _mocha.beforeEach)(function () {
            application = (0, _ghostAdminTestsHelpersStartApp['default'])();
        });

        (0, _mocha.afterEach)(function () {
            (0, _ghostAdminTestsHelpersDestroyApp['default'])(application);
        });

        (0, _mocha.describe)('logged in', function () {
            (0, _mocha.beforeEach)(function () {
                var role = server.create('role', { name: 'Administrator' });
                var user = server.create('user', { roles: [role] });

                server.loadFixtures();

                return (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            });

            (0, _mocha.it)('displays an alert and disables navigation when saving', function () {
                server.createList('post', 3);

                // mock the post save endpoint to return version mismatch
                server.put('/posts/:id', versionMismatchResponse);

                visit('/');
                click('.posts-list li:nth-of-type(2) a'); // select second post
                click('.post-edit'); // preview edit button
                click('.js-publish-button'); // "Save post"

                andThen(function () {
                    // has the refresh to update alert
                    (0, _chai.expect)(find('.gh-alert').length).to.equal(1);
                    (0, _chai.expect)(find('.gh-alert').text()).to.match(/refresh/);
                });

                // try navigating back to the content list
                click('.gh-nav-main-content');

                andThen(function () {
                    (0, _chai.expect)(currentPath()).to.equal('editor.edit');
                });
            });

            (0, _mocha.it)('displays alert and aborts the transition when navigating', function () {
                // mock the tags endpoint to return version mismatch
                server.get('/tags/', versionMismatchResponse);

                visit('/');
                click('.gh-nav-settings-tags');

                andThen(function () {
                    // navigation is blocked
                    (0, _chai.expect)(currentPath()).to.equal('posts.index');

                    // has the refresh to update alert
                    (0, _chai.expect)(find('.gh-alert').length).to.equal(1);
                    (0, _chai.expect)(find('.gh-alert').text()).to.match(/refresh/);
                });
            });

            (0, _mocha.it)('displays alert and aborts the transition when an ember-ajax error is thrown whilst navigating', function () {
                server.get('/configuration/timezones/', versionMismatchResponse);

                visit('/settings/tags');
                click('.gh-nav-settings-general');

                andThen(function () {
                    // navigation is blocked
                    (0, _chai.expect)(currentPath()).to.equal('settings.tags.index');

                    // has the refresh to update alert
                    (0, _chai.expect)(find('.gh-alert').length).to.equal(1);
                    (0, _chai.expect)(find('.gh-alert').text()).to.match(/refresh/);
                });
            });

            (0, _mocha.it)('can be triggered when passed in to a component', function () {
                server.post('/subscribers/csv/', versionMismatchResponse);

                visit('/subscribers');
                click('.btn:contains("Import CSV")');
                fileUpload('.fullscreen-modal input[type="file"]', ['test'], { name: 'test.csv' });

                andThen(function () {
                    // alert is shown
                    (0, _chai.expect)(find('.gh-alert').length).to.equal(1);
                    (0, _chai.expect)(find('.gh-alert').text()).to.match(/refresh/);
                });
            });
        });

        (0, _mocha.describe)('logged out', function () {
            (0, _mocha.it)('displays alert', function () {
                server.post('/authentication/token', versionMismatchResponse);

                visit('/signin');
                fillIn('[name="identification"]', 'test@example.com');
                fillIn('[name="password"]', 'password');
                click('.btn-blue');

                andThen(function () {
                    // has the refresh to update alert
                    (0, _chai.expect)(find('.gh-alert').length).to.equal(1);
                    (0, _chai.expect)(find('.gh-alert').text()).to.match(/refresh/);
                });
            });
        });
    });
});
/* jshint expr:true */