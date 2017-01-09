define('ghost-admin/tests/acceptance/signin-test', ['exports', 'mocha', 'chai', 'jquery', 'ghost-admin/tests/helpers/start-app', 'ghost-admin/tests/helpers/destroy-app', 'ghost-admin/tests/helpers/ember-simple-auth', 'ember-cli-mirage'], function (exports, _mocha, _chai, _jquery, _ghostAdminTestsHelpersStartApp, _ghostAdminTestsHelpersDestroyApp, _ghostAdminTestsHelpersEmberSimpleAuth, _emberCliMirage) {

    (0, _mocha.describe)('Acceptance: Signin', function () {
        var application = undefined;

        (0, _mocha.beforeEach)(function () {
            application = (0, _ghostAdminTestsHelpersStartApp['default'])();
        });

        (0, _mocha.afterEach)(function () {
            (0, _ghostAdminTestsHelpersDestroyApp['default'])(application);
        });

        (0, _mocha.it)('redirects if already authenticated', function () {
            var role = server.create('role', { name: 'Author' });
            var user = server.create('user', { roles: [role], slug: 'test-user' });

            (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);

            visit('/signin');
            andThen(function () {
                (0, _chai.expect)(currentURL(), 'current url').to.equal('/');
            });
        });

        (0, _mocha.describe)('when attempting to signin', function () {
            (0, _mocha.beforeEach)(function () {
                var role = server.create('role', { name: 'Administrator' });
                var user = server.create('user', { roles: [role], slug: 'test-user' });

                server.post('/authentication/token', function (db, request) {
                    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers

                    var _$$deparam = _jquery['default'].deparam(request.requestBody);

                    var grantType = _$$deparam.grant_type;
                    var username = _$$deparam.username;
                    var password = _$$deparam.password;
                    var clientId = _$$deparam.client_id;

                    (0, _chai.expect)(grantType, 'grant type').to.equal('password');
                    (0, _chai.expect)(username, 'username').to.equal('test@example.com');
                    (0, _chai.expect)(clientId, 'client id').to.equal('ghost-admin');

                    if (password === 'testpass') {
                        return {
                            access_token: '5JhTdKI7PpoZv4ROsFoERc6wCHALKFH5jxozwOOAErmUzWrFNARuH1q01TYTKeZkPW7FmV5MJ2fU00pg9sm4jtH3Z1LjCf8D6nNqLYCfFb2YEKyuvG7zHj4jZqSYVodN2YTCkcHv6k8oJ54QXzNTLIDMlCevkOebm5OjxGiJpafMxncm043q9u1QhdU9eee3zouGRMVVp8zkKVoo5zlGMi3zvS2XDpx7xsfk8hKHpUgd7EDDQxmMueifWv7hv6n',
                            expires_in: 3600,
                            refresh_token: 'XP13eDjwV5mxOcrq1jkIY9idhdvN3R1Br5vxYpYIub2P5Hdc8pdWMOGmwFyoUshiEB62JWHTl8H1kACJR18Z8aMXbnk5orG28br2kmVgtVZKqOSoiiWrQoeKTqrRV0t7ua8uY5HdDUaKpnYKyOdpagsSPn3WEj8op4vHctGL3svOWOjZhq6F2XeVPMR7YsbiwBE8fjT3VhTB3KRlBtWZd1rE0Qo2EtSplWyjGKv1liAEiL0ndQoLeeSOCH4rTP7',
                            token_type: 'Bearer'
                        };
                    } else {
                        return new _emberCliMirage['default'].Response(401, {}, {
                            errors: [{
                                errorType: 'UnauthorizedError',
                                message: 'Invalid Password'
                            }]
                        });
                    }
                    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
                });
            });

            (0, _mocha.it)('errors correctly', function () {
                (0, _ghostAdminTestsHelpersEmberSimpleAuth.invalidateSession)(application);

                visit('/signin');

                andThen(function () {
                    (0, _chai.expect)(currentURL(), 'signin url').to.equal('/signin');

                    (0, _chai.expect)(find('input[name="identification"]').length, 'email input field').to.equal(1);
                    (0, _chai.expect)(find('input[name="password"]').length, 'password input field').to.equal(1);
                });

                click('.btn-blue');

                andThen(function () {
                    (0, _chai.expect)(find('.form-group.error').length, 'number of invalid fields').to.equal(2);

                    (0, _chai.expect)(find('.main-error').length, 'main error is displayed').to.equal(1);
                });

                fillIn('[name="identification"]', 'test@example.com');
                fillIn('[name="password"]', 'invalid');
                click('.btn-blue');

                andThen(function () {
                    (0, _chai.expect)(currentURL(), 'current url').to.equal('/signin');

                    (0, _chai.expect)(find('.main-error').length, 'main error is displayed').to.equal(1);

                    (0, _chai.expect)(find('.main-error').text().trim(), 'main error text').to.equal('Invalid Password');
                });
            });

            (0, _mocha.it)('submits successfully', function () {
                (0, _ghostAdminTestsHelpersEmberSimpleAuth.invalidateSession)(application);

                visit('/signin');

                andThen(function () {
                    (0, _chai.expect)(currentURL(), 'current url').to.equal('/signin');
                });

                fillIn('[name="identification"]', 'test@example.com');
                fillIn('[name="password"]', 'testpass');
                click('.btn-blue');

                andThen(function () {
                    (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/');
                });
            });
        });
    });
});
/* jshint expr:true */