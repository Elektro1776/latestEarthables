define('ghost-admin/tests/acceptance/setup-test', ['exports', 'mocha', 'chai', 'ghost-admin/tests/helpers/start-app', 'ghost-admin/tests/helpers/destroy-app', 'ghost-admin/tests/helpers/ember-simple-auth', 'ember-cli-mirage'], function (exports, _mocha, _chai, _ghostAdminTestsHelpersStartApp, _ghostAdminTestsHelpersDestroyApp, _ghostAdminTestsHelpersEmberSimpleAuth, _emberCliMirage) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    (0, _mocha.describe)('Acceptance: Setup', function () {
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

            visit('/setup/one');
            andThen(function () {
                (0, _chai.expect)(currentURL()).to.equal('/');
            });

            visit('/setup/two');
            andThen(function () {
                (0, _chai.expect)(currentURL()).to.equal('/');
            });

            visit('/setup/three');
            andThen(function () {
                (0, _chai.expect)(currentURL()).to.equal('/');
            });
        });

        (0, _mocha.it)('redirects to signin if already set up', function () {
            // mimick an already setup blog
            server.get('/authentication/setup/', function () {
                return {
                    setup: [{ status: true }]
                };
            });

            (0, _ghostAdminTestsHelpersEmberSimpleAuth.invalidateSession)(application);

            visit('/setup');
            andThen(function () {
                (0, _chai.expect)(currentURL()).to.equal('/signin');
            });
        });

        (0, _mocha.describe)('with a new blog', function () {
            (0, _mocha.beforeEach)(function () {
                // mimick a new blog
                server.get('/authentication/setup/', function () {
                    return {
                        setup: [{ status: false }]
                    };
                });
            });

            (0, _mocha.it)('has a successful happy path', function () {
                (0, _ghostAdminTestsHelpersEmberSimpleAuth.invalidateSession)(application);
                server.loadFixtures('roles');

                visit('/setup');

                andThen(function () {
                    // it redirects to step one
                    (0, _chai.expect)(currentURL(), 'url after accessing /setup').to.equal('/setup/one');

                    // it highlights first step
                    (0, _chai.expect)(find('.gh-flow-nav .step:first-of-type').hasClass('active')).to.be['true'];
                    (0, _chai.expect)(find('.gh-flow-nav .step:nth-of-type(2)').hasClass('active')).to.be['false'];
                    (0, _chai.expect)(find('.gh-flow-nav .step:nth-of-type(3)').hasClass('active')).to.be['false'];

                    // it displays download count (count increments for each ajax call
                    // and polling is disabled in testing so our count should be "2" -
                    // 1 for first load and 1 for first poll)
                    (0, _chai.expect)(find('.gh-flow-content em').text()).to.equal('2');
                });

                click('.btn-green');

                andThen(function () {
                    // it transitions to step two
                    (0, _chai.expect)(currentURL(), 'url after clicking "Create your account"').to.equal('/setup/two');

                    // email field is focused by default
                    // NOTE: $('x').is(':focus') doesn't work in phantomjs CLI runner
                    // https://github.com/ariya/phantomjs/issues/10427
                    (0, _chai.expect)(find('[name="email"]').get(0) === document.activeElement, 'email field has focus').to.be['true'];
                });

                click('.btn-green');

                andThen(function () {
                    // it marks fields as invalid
                    (0, _chai.expect)(find('.form-group.error').length, 'number of invalid fields').to.equal(4);

                    // it displays error messages
                    (0, _chai.expect)(find('.error .response').length, 'number of in-line validation messages').to.equal(4);

                    // it displays main error
                    (0, _chai.expect)(find('.main-error').length, 'main error is displayed').to.equal(1);
                });

                // enter valid details and submit
                fillIn('[name="email"]', 'test@example.com');
                fillIn('[name="name"]', 'Test User');
                fillIn('[name="password"]', 'password');
                fillIn('[name="blog-title"]', 'Blog Title');
                click('.btn-green');

                andThen(function () {
                    // it transitions to step 3
                    (0, _chai.expect)(currentURL(), 'url after submitting step two').to.equal('/setup/three');

                    // submit button is "disabled"
                    (0, _chai.expect)(find('button[type="submit"]').hasClass('btn-green'), 'invite button with no emails is white').to.be['false'];
                });

                // fill in a valid email
                fillIn('[name="users"]', 'new-user@example.com');

                andThen(function () {
                    // submit button is "enabled"
                    (0, _chai.expect)(find('button[type="submit"]').hasClass('btn-green'), 'invite button is green with valid email address').to.be['true'];
                });

                // submit the invite form
                click('button[type="submit"]');

                andThen(function () {
                    // it redirects to the home / "content" screen
                    (0, _chai.expect)(currentURL(), 'url after submitting invites').to.equal('/');

                    // it displays success alert
                    (0, _chai.expect)(find('.gh-alert-green').length, 'number of success alerts').to.equal(1);
                });
            });

            (0, _mocha.it)('handles validation errors in step 2', function () {
                var postCount = 0;

                (0, _ghostAdminTestsHelpersEmberSimpleAuth.invalidateSession)(application);
                server.loadFixtures('roles');

                server.post('/authentication/setup', function () {
                    postCount++;

                    // validation error
                    if (postCount === 1) {
                        return new _emberCliMirage['default'].Response(422, {}, {
                            errors: [{
                                errorType: 'ValidationError',
                                message: 'Server response message'
                            }]
                        });
                    }

                    // server error
                    if (postCount === 2) {
                        return new _emberCliMirage['default'].Response(500, {}, null);
                    }
                });

                visit('/setup/two');
                click('.btn-green');

                andThen(function () {
                    // non-server validation
                    (0, _chai.expect)(find('.main-error').text().trim(), 'error text').to.not.be.blank;
                });

                fillIn('[name="email"]', 'test@example.com');
                fillIn('[name="name"]', 'Test User');
                fillIn('[name="password"]', 'password');
                fillIn('[name="blog-title"]', 'Blog Title');

                // first post - simulated validation error
                click('.btn-green');

                andThen(function () {
                    (0, _chai.expect)(find('.main-error').text().trim(), 'error text').to.equal('Server response message');
                });

                // second post - simulated server error
                click('.btn-green');

                andThen(function () {
                    (0, _chai.expect)(find('.main-error').text().trim(), 'error text').to.be.blank;

                    (0, _chai.expect)(find('.gh-alert-red').length, 'number of alerts').to.equal(1);
                });
            });

            (0, _mocha.it)('handles invalid origin error on step 2', function () {
                // mimick the API response for an invalid origin
                server.post('/authentication/token', function () {
                    return new _emberCliMirage['default'].Response(401, {}, {
                        errors: [{
                            errorType: 'UnauthorizedError',
                            message: 'Access Denied from url: unknown.com. Please use the url configured in config.js.'
                        }]
                    });
                });

                (0, _ghostAdminTestsHelpersEmberSimpleAuth.invalidateSession)(application);
                server.loadFixtures('roles');

                visit('/setup/two');
                fillIn('[name="email"]', 'test@example.com');
                fillIn('[name="name"]', 'Test User');
                fillIn('[name="password"]', 'password');
                fillIn('[name="blog-title"]', 'Blog Title');
                click('.btn-green');

                andThen(function () {
                    // button should not be spinning
                    (0, _chai.expect)(find('.btn-green .spinner').length, 'button has spinner').to.equal(0);
                    // we should show an error message
                    (0, _chai.expect)(find('.main-error').text(), 'error text').to.equal('Access Denied from url: unknown.com. Please use the url configured in config.js.');
                });
            });

            (0, _mocha.it)('handles validation errors in step 3', function () {
                var input = '[name="users"]';
                var postCount = 0;
                var button = undefined,
                    formGroup = undefined,
                    user = undefined;

                (0, _ghostAdminTestsHelpersEmberSimpleAuth.invalidateSession)(application);
                server.loadFixtures('roles');

                server.post('/users', function (db, request) {
                    var _JSON$parse$users = _slicedToArray(JSON.parse(request.requestBody).users, 1);

                    var params = _JSON$parse$users[0];

                    postCount++;

                    // invalid
                    if (postCount === 1) {
                        return new _emberCliMirage['default'].Response(422, {}, {
                            errors: [{
                                errorType: 'ValidationError',
                                message: 'Dummy validation error'
                            }]
                        });
                    }

                    // valid
                    user = db.users.insert(params);
                    return {
                        users: [user]
                    };
                });

                // complete step 2 so we can access step 3
                visit('/setup/two');
                fillIn('[name="email"]', 'test@example.com');
                fillIn('[name="name"]', 'Test User');
                fillIn('[name="password"]', 'password');
                fillIn('[name="blog-title"]', 'Blog Title');
                click('.btn-green');

                // default field/button state
                andThen(function () {
                    formGroup = find('.gh-flow-invite .form-group');
                    button = find('.gh-flow-invite button[type="submit"]');

                    (0, _chai.expect)(formGroup.hasClass('error'), 'default field has error class').to.be['false'];

                    (0, _chai.expect)(button.text().trim(), 'default button text').to.equal('Invite some users');

                    (0, _chai.expect)(button.hasClass('btn-minor'), 'default button is disabled').to.be['true'];
                });

                // no users submitted state
                click('.gh-flow-invite button[type="submit"]');

                andThen(function () {
                    (0, _chai.expect)(formGroup.hasClass('error'), 'no users submitted field has error class').to.be['true'];

                    (0, _chai.expect)(button.text().trim(), 'no users submitted button text').to.equal('No users to invite');

                    (0, _chai.expect)(button.hasClass('btn-minor'), 'no users submitted button is disabled').to.be['true'];
                });

                // single invalid email
                fillIn(input, 'invalid email');
                triggerEvent(input, 'blur');

                andThen(function () {
                    (0, _chai.expect)(formGroup.hasClass('error'), 'invalid field has error class').to.be['true'];

                    (0, _chai.expect)(button.text().trim(), 'single invalid button text').to.equal('1 invalid email address');

                    (0, _chai.expect)(button.hasClass('btn-minor'), 'invalid email button is disabled').to.be['true'];
                });

                // multiple invalid emails
                fillIn(input, 'invalid email\nanother invalid address');
                triggerEvent(input, 'blur');

                andThen(function () {
                    (0, _chai.expect)(button.text().trim(), 'multiple invalid button text').to.equal('2 invalid email addresses');
                });

                // single valid email
                fillIn(input, 'invited@example.com');
                triggerEvent(input, 'blur');

                andThen(function () {
                    (0, _chai.expect)(formGroup.hasClass('error'), 'valid field has error class').to.be['false'];

                    (0, _chai.expect)(button.text().trim(), 'single valid button text').to.equal('Invite 1 user');

                    (0, _chai.expect)(button.hasClass('btn-green'), 'valid email button is enabled').to.be['true'];
                });

                // multiple valid emails
                fillIn(input, 'invited1@example.com\ninvited2@example.com');
                triggerEvent(input, 'blur');

                andThen(function () {
                    (0, _chai.expect)(button.text().trim(), 'multiple valid button text').to.equal('Invite 2 users');
                });

                // submit invitations with simulated failure on 1 invite
                click('.btn-green');

                andThen(function () {
                    // it redirects to the home / "content" screen
                    (0, _chai.expect)(currentURL(), 'url after submitting invites').to.equal('/');

                    // it displays success alert
                    (0, _chai.expect)(find('.gh-alert-green').length, 'number of success alerts').to.equal(1);

                    // it displays failure alert
                    (0, _chai.expect)(find('.gh-alert-red').length, 'number of failure alerts').to.equal(1);
                });
            });
        });
    });
});
/* jshint expr:true */