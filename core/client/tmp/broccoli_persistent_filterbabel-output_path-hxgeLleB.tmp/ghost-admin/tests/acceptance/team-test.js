define('ghost-admin/tests/acceptance/team-test', ['exports', 'mocha', 'chai', 'ghost-admin/tests/helpers/start-app', 'ghost-admin/tests/helpers/destroy-app', 'ghost-admin/tests/helpers/ember-simple-auth', 'ghost-admin/tests/helpers/adapter-error', 'ember-cli-mirage', 'jquery'], function (exports, _mocha, _chai, _ghostAdminTestsHelpersStartApp, _ghostAdminTestsHelpersDestroyApp, _ghostAdminTestsHelpersEmberSimpleAuth, _ghostAdminTestsHelpersAdapterError, _emberCliMirage, _jquery) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    (0, _mocha.describe)('Acceptance: Team', function () {
        var application = undefined;

        (0, _mocha.beforeEach)(function () {
            application = (0, _ghostAdminTestsHelpersStartApp['default'])();
        });

        (0, _mocha.afterEach)(function () {
            (0, _ghostAdminTestsHelpersDestroyApp['default'])(application);
        });

        (0, _mocha.it)('redirects to signin when not authenticated', function () {
            (0, _ghostAdminTestsHelpersEmberSimpleAuth.invalidateSession)(application);
            visit('/team');

            andThen(function () {
                (0, _chai.expect)(currentURL()).to.equal('/signin');
            });
        });

        (0, _mocha.it)('redirects correctly when authenticated as author', function () {
            var role = server.create('role', { name: 'Author' });
            var user = server.create('user', { roles: [role], slug: 'test-user' });

            server.create('user', { slug: 'no-access' });

            (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            visit('/team/no-access');

            andThen(function () {
                (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/team/test-user');
            });
        });

        (0, _mocha.it)('redirects correctly when authenticated as editor', function () {
            var role = server.create('role', { name: 'Editor' });
            var user = server.create('user', { roles: [role], slug: 'test-user' });

            server.create('user', { slug: 'no-access' });

            (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            visit('/team/no-access');

            andThen(function () {
                (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/team');
            });
        });

        (0, _mocha.describe)('when logged in', function () {
            var admin = undefined;

            (0, _mocha.beforeEach)(function () {
                var role = server.create('role', { name: 'Administrator' });
                admin = server.create('user', { roles: [role] });

                server.loadFixtures();

                return (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            });

            (0, _mocha.it)('it renders and navigates correctly', function () {
                var user1 = server.create('user');
                var user2 = server.create('user');

                visit('/team');

                andThen(function () {
                    // doesn't do any redirecting
                    (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/team');

                    // it has correct page title
                    (0, _chai.expect)(document.title, 'page title').to.equal('Team - Test Blog');

                    // it shows 3 users in list (includes currently logged in user)
                    (0, _chai.expect)(find('.user-list .user-list-item').length, 'user list count').to.equal(3);

                    click('.user-list-item:last');

                    andThen(function () {
                        // url is correct
                        (0, _chai.expect)(currentURL(), 'url after clicking user').to.equal('/team/' + user2.slug);

                        // title is correct
                        (0, _chai.expect)(document.title, 'title after clicking user').to.equal('Team - User - Test Blog');

                        // view title should exist and be linkable and active
                        (0, _chai.expect)(find('.view-title a[href="/ghost/team"]').hasClass('active'), 'has linkable url back to team main page').to.be['true'];
                    });

                    click('.view-title a');

                    andThen(function () {
                        // url should be /team again
                        (0, _chai.expect)(currentURL(), 'url after clicking back').to.equal('/team');
                    });
                });
            });

            (0, _mocha.describe)('invite new user', function () {
                var emailInputField = '.fullscreen-modal input[name="email"]';

                // @TODO: Evaluate after the modal PR goes in
                (0, _mocha.it)('modal loads correctly', function () {
                    visit('/team');

                    andThen(function () {
                        // url is correct
                        (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/team');

                        // invite user button exists
                        (0, _chai.expect)(find('.view-actions .btn-green').html(), 'invite people button text').to.equal('Invite People');
                    });

                    click('.view-actions .btn-green');

                    andThen(function () {
                        var roleOptions = find('#new-user-role select option');

                        function checkOwnerExists() {
                            for (var i in roleOptions) {
                                if (roleOptions[i].tagName === 'option' && roleOptions[i].text === 'Owner') {
                                    return true;
                                }
                            }
                            return false;
                        }

                        function checkSelectedIsAuthor() {
                            for (var i in roleOptions) {
                                if (roleOptions[i].selected) {
                                    return roleOptions[i].text === 'Author';
                                }
                            }
                            return false;
                        }

                        // should be 3 available roles
                        (0, _chai.expect)(roleOptions.length, 'number of available roles').to.equal(3);

                        (0, _chai.expect)(checkOwnerExists(), 'owner role isn\'t available').to.be['false'];
                        (0, _chai.expect)(checkSelectedIsAuthor(), 'author role is selected initially').to.be['true'];
                    });
                });

                (0, _mocha.it)('sends an invite correctly', function () {
                    visit('/team');

                    andThen(function () {
                        (0, _chai.expect)(find('.user-list.invited-users .user-list-item').length, 'number of invited users').to.equal(0);
                    });

                    click('.view-actions .btn-green');
                    click(emailInputField);
                    triggerEvent(emailInputField, 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('.modal-body .form-group:first').hasClass('error'), 'email input has error status').to.be['true'];
                        (0, _chai.expect)(find('.modal-body .form-group:first .response').text()).to.contain('Please enter an email.');
                    });

                    fillIn(emailInputField, 'test@example.com');
                    click('.fullscreen-modal .btn-green');

                    andThen(function () {
                        (0, _chai.expect)(find('.user-list.invited-users .user-list-item').length, 'number of invited users').to.equal(1);
                        (0, _chai.expect)(find('.user-list.invited-users .user-list-item:first .name').text(), 'name of invited user').to.equal('test@example.com');
                    });

                    click('.user-list.invited-users .user-list-item:first .user-list-item-aside .user-list-action:contains("Revoke")');

                    andThen(function () {
                        (0, _chai.expect)(find('.user-list.invited-users .user-list-item').length, 'number of invited users').to.equal(0);
                    });
                });

                (0, _mocha.it)('fails sending an invite correctly', function () {
                    server.create('user', { email: 'test1@example.com' });
                    server.create('user', { email: 'test2@example.com', status: 'invited' });

                    visit('/team');

                    // check our users lists are what we expect
                    andThen(function () {
                        (0, _chai.expect)(find('.user-list.invited-users .user-list-item').length, 'number of invited users').to.equal(1);
                        // number of active users is 2 because of the logged-in user
                        (0, _chai.expect)(find('.user-list.active-users .user-list-item').length, 'number of active users').to.equal(2);
                    });

                    // click the "invite new user" button to open the modal
                    click('.view-actions .btn-green');

                    // fill in and submit the invite user modal with an existing user
                    fillIn(emailInputField, 'test1@example.com');
                    click('.fullscreen-modal .btn-green');

                    andThen(function () {
                        // check the inline-validation
                        (0, _chai.expect)(find('.fullscreen-modal .error .response').text().trim(), 'inviting existing user error').to.equal('A user with that email address already exists.');
                    });

                    // fill in and submit the invite user modal with an invited user
                    fillIn(emailInputField, 'test2@example.com');
                    click('.fullscreen-modal .btn-green');

                    andThen(function () {
                        // check the inline-validation
                        (0, _chai.expect)(find('.fullscreen-modal .error .response').text().trim(), 'inviting invited user error').to.equal('A user with that email address was already invited.');

                        // ensure that there's been no change in our user lists
                        (0, _chai.expect)(find('.user-list.invited-users .user-list-item').length, 'number of invited users after failed invites').to.equal(1);
                        (0, _chai.expect)(find('.user-list.active-users .user-list-item').length, 'number of active users after failed invites').to.equal(2);
                    });
                });
            });

            (0, _mocha.it)('can delete users', function () {
                /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
                var user1 = server.create('user');
                var user2 = server.create('user');
                var post1 = server.create('post', { author_id: user2.id });
                /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */

                visit('/team');
                click('a.user-list-item:contains("' + user1.name + '")');

                // user deletion displays modal
                click('button.delete');
                andThen(function () {
                    (0, _chai.expect)(find('.fullscreen-modal .modal-content:contains("delete this user")').length, 'user deletion modal displayed after button click').to.equal(1);

                    // user has no posts so no warning about post deletion
                    (0, _chai.expect)(find('.fullscreen-modal .modal-content:contains("is the author of")').length, 'deleting user with no posts has no post count').to.equal(0);
                });

                // cancelling user deletion closes modal
                click('.fullscreen-modal button:contains("Cancel")');
                andThen(function () {
                    (0, _chai.expect)(find('.fullscreen-modal').length === 0, 'delete user modal is closed when cancelling').to.be['true'];
                });

                // deleting a user with posts
                visit('/team');
                click('a.user-list-item:contains("' + user2.name + '")');

                click('button.delete');
                andThen(function () {
                    // user has  posts so should warn about post deletion
                    (0, _chai.expect)(find('.fullscreen-modal .modal-content:contains("is the author of 1 post")').length, 'deleting user with posts has post count').to.equal(1);
                });

                click('.fullscreen-modal button:contains("Delete")');
                andThen(function () {
                    // redirected to team page
                    (0, _chai.expect)(currentURL()).to.equal('/team');

                    // deleted user is not in list
                    (0, _chai.expect)(find('.user-list-item .name:contains("' + user2.name + '")').length, 'deleted user is not in user list after deletion').to.equal(0);
                });
            });

            (0, _mocha.describe)('existing user', function () {
                var user = undefined;

                (0, _mocha.beforeEach)(function () {
                    user = server.create('user', {
                        slug: 'test-1',
                        name: 'Test User',
                        facebook: 'test',
                        twitter: '@test'
                    });

                    server.loadFixtures();
                });

                (0, _mocha.it)('input fields reset and validate correctly', function () {
                    // test user name
                    visit('/team/test-1');

                    andThen(function () {
                        (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/team/test-1');
                        (0, _chai.expect)(find('.user-details-top .first-form-group input.user-name').val(), 'current user name').to.equal('Test User');
                    });

                    // test empty user name
                    fillIn('.user-details-top .first-form-group input.user-name', '');
                    triggerEvent('.user-details-top .first-form-group input.user-name', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('.user-details-top .first-form-group').hasClass('error'), 'username input is in error state with blank input').to.be['true'];
                    });

                    // test too long user name
                    fillIn('.user-details-top .first-form-group input.user-name', new Array(160).join('a'));
                    triggerEvent('.user-details-top .first-form-group input.user-name', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('.user-details-top .first-form-group').hasClass('error'), 'username input is in error state with too long input').to.be['true'];
                    });

                    // reset name field
                    fillIn('.user-details-top .first-form-group input.user-name', 'Test User');

                    andThen(function () {
                        (0, _chai.expect)(find('.user-details-bottom input[name="user"]').val(), 'slug value is default').to.equal('test-1');
                    });

                    fillIn('.user-details-bottom input[name="user"]', '');
                    triggerEvent('.user-details-bottom input[name="user"]', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('.user-details-bottom input[name="user"]').val(), 'slug value is reset to original upon empty string').to.equal('test-1');
                    });

                    fillIn('.user-details-bottom input[name="user"]', 'white space');
                    triggerEvent('.user-details-bottom input[name="user"]', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('.user-details-bottom input[name="user"]').val(), 'slug value is correctly dasherized').to.equal('white-space');
                    });

                    fillIn('.user-details-bottom input[name="email"]', 'thisisnotanemail');
                    triggerEvent('.user-details-bottom input[name="email"]', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('.user-details-bottom .form-group:nth-of-type(2)').hasClass('error'), 'email input should be in error state with invalid email').to.be['true'];
                    });

                    fillIn('.user-details-bottom input[name="email"]', 'test@example.com');
                    fillIn('#user-location', new Array(160).join('a'));
                    triggerEvent('#user-location', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('#user-location').closest('.form-group').hasClass('error'), 'location input should be in error state').to.be['true'];
                    });

                    fillIn('#user-location', '');
                    fillIn('#user-website', 'thisisntawebsite');
                    triggerEvent('#user-website', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('#user-website').closest('.form-group').hasClass('error'), 'website input should be in error state').to.be['true'];
                    });

                    // Testing Facebook input

                    andThen(function () {
                        // displays initial value
                        (0, _chai.expect)(find('#user-facebook').val(), 'initial facebook value').to.equal('https://www.facebook.com/test');
                    });

                    triggerEvent('#user-facebook', 'focus');
                    triggerEvent('#user-facebook', 'blur');

                    andThen(function () {
                        // regression test: we still have a value after the input is
                        // focused and then blurred without any changes
                        (0, _chai.expect)(find('#user-facebook').val(), 'facebook value after blur with no change').to.equal('https://www.facebook.com/test');
                    });

                    fillIn('#user-facebook', '');
                    fillIn('#user-facebook', ')(*&%^%)');
                    triggerEvent('#user-facebook', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('#user-facebook').closest('.form-group').hasClass('error'), 'facebook input should be in error state').to.be['true'];
                    });

                    fillIn('#user-facebook', '');
                    fillIn('#user-facebook', 'pages/)(*&%^%)');
                    triggerEvent('#user-facebook', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('#user-facebook').val()).to.be.equal('https://www.facebook.com/pages/)(*&%^%)');
                        (0, _chai.expect)(find('#user-facebook').closest('.form-group').hasClass('error'), 'facebook input should be in error state').to.be['false'];
                    });

                    fillIn('#user-facebook', '');
                    fillIn('#user-facebook', 'testing');
                    triggerEvent('#user-facebook', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('#user-facebook').val()).to.be.equal('https://www.facebook.com/testing');
                        (0, _chai.expect)(find('#user-facebook').closest('.form-group').hasClass('error'), 'facebook input should be in error state').to.be['false'];
                    });

                    fillIn('#user-facebook', '');
                    fillIn('#user-facebook', 'somewebsite.com/pages/some-facebook-page/857469375913?ref=ts');
                    triggerEvent('#user-facebook', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('#user-facebook').val()).to.be.equal('https://www.facebook.com/pages/some-facebook-page/857469375913?ref=ts');
                        (0, _chai.expect)(find('#user-facebook').closest('.form-group').hasClass('error'), 'facebook input should be in error state').to.be['false'];
                    });

                    fillIn('#user-facebook', '');
                    fillIn('#user-facebook', 'test');
                    triggerEvent('#user-facebook', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('#user-facebook').closest('.form-group').hasClass('error'), 'facebook input should be in error state').to.be['true'];
                    });

                    fillIn('#user-facebook', '');
                    fillIn('#user-facebook', 'http://twitter.com/testuser');
                    triggerEvent('#user-facebook', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('#user-facebook').val()).to.be.equal('https://www.facebook.com/testuser');
                        (0, _chai.expect)(find('#user-facebook').closest('.form-group').hasClass('error'), 'facebook input should be in error state').to.be['false'];
                    });

                    fillIn('#user-facebook', '');
                    fillIn('#user-facebook', 'facebook.com/testing');
                    triggerEvent('#user-facebook', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('#user-facebook').val()).to.be.equal('https://www.facebook.com/testing');
                        (0, _chai.expect)(find('#user-facebook').closest('.form-group').hasClass('error'), 'facebook input should be in error state').to.be['false'];
                    });

                    // Testing Twitter input

                    andThen(function () {
                        // loads fixtures and performs transform
                        (0, _chai.expect)(find('#user-twitter').val(), 'initial twitter value').to.equal('https://twitter.com/test');
                    });

                    triggerEvent('#user-twitter', 'focus');
                    triggerEvent('#user-twitter', 'blur');

                    andThen(function () {
                        // regression test: we still have a value after the input is
                        // focused and then blurred without any changes
                        (0, _chai.expect)(find('#user-twitter').val(), 'twitter value after blur with no change').to.equal('https://twitter.com/test');
                    });

                    fillIn('#user-twitter', '');
                    fillIn('#user-twitter', ')(*&%^%)');
                    triggerEvent('#user-twitter', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('#user-twitter').closest('.form-group').hasClass('error'), 'twitter input should be in error state').to.be['true'];
                    });

                    fillIn('#user-twitter', '');
                    fillIn('#user-twitter', 'name');
                    triggerEvent('#user-twitter', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('#user-twitter').val()).to.be.equal('https://twitter.com/name');
                        (0, _chai.expect)(find('#user-twitter').closest('.form-group').hasClass('error'), 'twitter input should be in error state').to.be['false'];
                    });

                    fillIn('#user-twitter', '');
                    fillIn('#user-twitter', 'http://github.com/user');
                    triggerEvent('#user-twitter', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('#user-twitter').val()).to.be.equal('https://twitter.com/user');
                        (0, _chai.expect)(find('#user-twitter').closest('.form-group').hasClass('error'), 'twitter input should be in error state').to.be['false'];
                    });

                    fillIn('#user-twitter', '');
                    fillIn('#user-twitter', 'twitter.com/user');
                    triggerEvent('#user-twitter', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('#user-twitter').val()).to.be.equal('https://twitter.com/user');
                        (0, _chai.expect)(find('#user-twitter').closest('.form-group').hasClass('error'), 'twitter input should be in error state').to.be['false'];
                    });

                    fillIn('#user-website', '');
                    fillIn('#user-bio', new Array(210).join('a'));
                    triggerEvent('#user-bio', 'blur');

                    andThen(function () {
                        (0, _chai.expect)(find('#user-bio').closest('.form-group').hasClass('error'), 'bio input should be in error state').to.be['true'];
                    });

                    // password reset ------

                    // button triggers validation
                    click('.button-change-password');

                    andThen(function () {
                        (0, _chai.expect)(find('#user-password-new').closest('.form-group').hasClass('error'), 'new password has error class when blank').to.be['true'];

                        (0, _chai.expect)(find('#user-password-new').siblings('.response').text(), 'new password error when blank').to.match(/can't be blank/);
                    });

                    // typing in inputs clears validation
                    fillIn('#user-password-new', 'password');
                    triggerEvent('#user-password-new', 'input');

                    andThen(function () {
                        (0, _chai.expect)(find('#user-password-new').closest('.form-group').hasClass('error'), 'password validation is visible after typing').to.be['false'];
                    });

                    // enter key triggers action
                    keyEvent('#user-password-new', 'keyup', 13);

                    andThen(function () {
                        (0, _chai.expect)(find('#user-new-password-verification').closest('.form-group').hasClass('error'), 'confirm password has error class when it doesn\'t match').to.be['true'];

                        (0, _chai.expect)(find('#user-new-password-verification').siblings('.response').text(), 'confirm password error when it doesn\'t match').to.match(/do not match/);
                    });

                    // submits with correct details
                    fillIn('#user-new-password-verification', 'password');
                    click('.button-change-password');

                    andThen(function () {
                        // hits the endpoint

                        var _server$pretender$handledRequests$slice = server.pretender.handledRequests.slice(-1);

                        var _server$pretender$handledRequests$slice2 = _slicedToArray(_server$pretender$handledRequests$slice, 1);

                        var lastRequest = _server$pretender$handledRequests$slice2[0];

                        var params = _jquery['default'].deparam(lastRequest.requestBody);

                        (0, _chai.expect)(lastRequest.url, 'password request URL').to.match(/\/users\/password/);

                        /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
                        (0, _chai.expect)(params.password[0].user_id).to.equal(user.id.toString());
                        (0, _chai.expect)(params.password[0].newPassword).to.equal('password');
                        (0, _chai.expect)(params.password[0].ne2Password).to.equal('password');
                        /* jscs:enable requireCamelCaseOrUpperCaseIdentifiers */

                        // clears the fields
                        (0, _chai.expect)(find('#user-password-new').val(), 'password field after submit').to.be.blank;

                        (0, _chai.expect)(find('#user-new-password-verification').val(), 'password verification field after submit').to.be.blank;

                        // displays a notification
                        (0, _chai.expect)(find('.gh-notifications .gh-notification').length, 'password saved notification is displayed').to.equal(1);
                    });
                });
            });

            (0, _mocha.describe)('own user', function () {
                (0, _mocha.beforeEach)(function () {
                    server.loadFixtures();
                });

                (0, _mocha.it)('requires current password when changing password', function () {
                    visit('/team/' + admin.slug);

                    // test the "old password" field is validated
                    click('.button-change-password');

                    andThen(function () {
                        // old password has error
                        (0, _chai.expect)(find('#user-password-old').closest('.form-group').hasClass('error'), 'old password has error class when blank').to.be['true'];

                        (0, _chai.expect)(find('#user-password-old').siblings('.response').text(), 'old password error when blank').to.match(/is required/);

                        // new password has error
                        (0, _chai.expect)(find('#user-password-new').closest('.form-group').hasClass('error'), 'new password has error class when blank').to.be['true'];

                        (0, _chai.expect)(find('#user-password-new').siblings('.response').text(), 'new password error when blank').to.match(/can't be blank/);
                    });

                    // validation is cleared when typing
                    fillIn('#user-password-old', 'password');
                    triggerEvent('#user-password-old', 'input');

                    andThen(function () {
                        (0, _chai.expect)(find('#user-password-old').closest('.form-group').hasClass('error'), 'old password validation is in error state after typing').to.be['false'];
                    });
                });
            });

            (0, _mocha.it)('redirects to 404 when user does not exist', function () {
                server.get('/users/slug/unknown/', function () {
                    return new _emberCliMirage['default'].Response(404, { 'Content-Type': 'application/json' }, { errors: [{ message: 'User not found.', errorType: 'NotFoundError' }] });
                });

                (0, _ghostAdminTestsHelpersAdapterError.errorOverride)();

                visit('/team/unknown');

                andThen(function () {
                    (0, _ghostAdminTestsHelpersAdapterError.errorReset)();
                    (0, _chai.expect)(currentPath()).to.equal('error404');
                    (0, _chai.expect)(currentURL()).to.equal('/team/unknown');
                });
            });
        });
    });
});
/* jshint expr:true */