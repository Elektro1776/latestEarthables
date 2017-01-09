define('ghost-admin/tests/acceptance/password-reset-test', ['exports', 'mocha', 'chai', 'ghost-admin/tests/helpers/start-app', 'ghost-admin/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _ghostAdminTestsHelpersStartApp, _ghostAdminTestsHelpersDestroyApp) {

    (0, _mocha.describe)('Acceptance: Password Reset', function () {
        var application = undefined;

        (0, _mocha.beforeEach)(function () {
            application = (0, _ghostAdminTestsHelpersStartApp['default'])();
        });

        (0, _mocha.afterEach)(function () {
            (0, _ghostAdminTestsHelpersDestroyApp['default'])(application);
        });

        (0, _mocha.describe)('request reset', function () {
            (0, _mocha.it)('is successful with valid data', function () {
                visit('/signin');
                fillIn('input[name="identification"]', 'test@example.com');
                click('.forgotten-link');

                andThen(function () {
                    // an alert with instructions is displayed
                    (0, _chai.expect)(find('.gh-alert-blue').length, 'alert count').to.equal(1);
                });
            });

            (0, _mocha.it)('shows error messages with invalid data', function () {
                visit('/signin');

                // no email provided
                click('.forgotten-link');

                andThen(function () {
                    // email field is invalid
                    (0, _chai.expect)(find('input[name="identification"]').closest('.form-group').hasClass('error'), 'email field has error class (no email)').to.be['true'];

                    // password field is valid
                    (0, _chai.expect)(find('input[name="password"]').closest('.form-group').hasClass('error'), 'password field has error class (no email)').to.be['false'];

                    // error message shown
                    (0, _chai.expect)(find('p.main-error').text().trim(), 'error message').to.equal('We need your email address to reset your password!');
                });

                // invalid email provided
                fillIn('input[name="identification"]', 'test');
                click('.forgotten-link');

                andThen(function () {
                    // email field is invalid
                    (0, _chai.expect)(find('input[name="identification"]').closest('.form-group').hasClass('error'), 'email field has error class (invalid email)').to.be['true'];

                    // password field is valid
                    (0, _chai.expect)(find('input[name="password"]').closest('.form-group').hasClass('error'), 'password field has error class (invalid email)').to.be['false'];

                    // error message
                    (0, _chai.expect)(find('p.main-error').text().trim(), 'error message').to.equal('We need your email address to reset your password!');
                });

                // unknown email provided
                fillIn('input[name="identification"]', 'unknown@example.com');
                click('.forgotten-link');

                andThen(function () {
                    // email field is invalid
                    (0, _chai.expect)(find('input[name="identification"]').closest('.form-group').hasClass('error'), 'email field has error class (unknown email)').to.be['true'];

                    // password field is valid
                    (0, _chai.expect)(find('input[name="password"]').closest('.form-group').hasClass('error'), 'password field has error class (unknown email)').to.be['false'];

                    // error message
                    (0, _chai.expect)(find('p.main-error').text().trim(), 'error message').to.equal('There is no user with that email address.');
                });
            });
        });

        // TODO: add tests for the change password screen
    });
});
/* jshint expr:true */