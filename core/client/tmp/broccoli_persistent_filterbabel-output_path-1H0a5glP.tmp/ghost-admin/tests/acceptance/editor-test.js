define('ghost-admin/tests/acceptance/editor-test', ['exports', 'mocha', 'chai', 'ghost-admin/tests/helpers/start-app', 'ghost-admin/tests/helpers/destroy-app', 'ghost-admin/tests/helpers/ember-simple-auth', 'ember-cli-mirage', 'sinon'], function (exports, _mocha, _chai, _ghostAdminTestsHelpersStartApp, _ghostAdminTestsHelpersDestroyApp, _ghostAdminTestsHelpersEmberSimpleAuth, _emberCliMirage, _sinon) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    (0, _mocha.describe)('Acceptance: Editor', function () {
        var application = undefined;

        (0, _mocha.beforeEach)(function () {
            application = (0, _ghostAdminTestsHelpersStartApp['default'])();
        });

        (0, _mocha.afterEach)(function () {
            (0, _ghostAdminTestsHelpersDestroyApp['default'])(application);
        });

        (0, _mocha.it)('redirects to signin when not authenticated', function () {
            server.create('post');

            (0, _ghostAdminTestsHelpersEmberSimpleAuth.invalidateSession)(application);
            visit('/editor/1');

            andThen(function () {
                (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/signin');
            });
        });

        (0, _mocha.it)('does not redirect to team page when authenticated as author', function () {
            var role = server.create('role', { name: 'Author' });
            var user = server.create('user', { roles: [role], slug: 'test-user' });
            server.create('post');

            (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            visit('/editor/1');

            andThen(function () {
                (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/editor/1');
            });
        });

        (0, _mocha.it)('does not redirect to team page when authenticated as editor', function () {
            var role = server.create('role', { name: 'Editor' });
            var user = server.create('user', { roles: [role], slug: 'test-user' });
            server.create('post');

            (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            visit('/editor/1');

            andThen(function () {
                (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/editor/1');
            });
        });

        (0, _mocha.it)('displays 404 when post does not exist', function () {
            var role = server.create('role', { name: 'Editor' });
            var user = server.create('user', { roles: [role], slug: 'test-user' });

            (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            visit('/editor/1');

            andThen(function () {
                (0, _chai.expect)(currentPath()).to.equal('error404');
                (0, _chai.expect)(currentURL()).to.equal('/editor/1');
            });
        });

        (0, _mocha.describe)('when logged in', function () {

            (0, _mocha.beforeEach)(function () {
                var role = server.create('role', { name: 'Administrator' });
                var user = server.create('user', { roles: [role] });

                server.loadFixtures();

                return (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            });

            (0, _mocha.it)('renders the editor correctly, PSM Publish Date and Save Button', function () {
                var posts = server.createList('post', 2);
                var plusTenMinPacific = moment().tz('Pacific/Kwajalein').add(10, 'minutes').format('DD MMM YY @ HH:mm').toString();
                var plusTwoMinPacific = moment().tz('Pacific/Kwajalein').add(2, 'minutes').format('DD MMM YY @ HH:mm').toString();

                // post id 1 is a draft, checking for draft behaviour now
                visit('/editor/1');

                andThen(function () {
                    (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/editor/1');
                });

                // should error, if the date input is in a wrong format
                fillIn('input[name="post-setting-date"]', 'testdate');
                triggerEvent('input[name="post-setting-date"]', 'blur');

                andThen(function () {
                    (0, _chai.expect)(find('.ember-view.response').text().trim(), 'inline error response for invalid date').to.equal('Published Date must be a valid date with format: DD MMM YY @ HH:mm (e.g. 6 Dec 14 @ 15:00)');
                });

                // saves the post with the new date
                fillIn('input[name="post-setting-date"]', '10 May 16 @ 10:00');
                triggerEvent('input[name="post-setting-date"]', 'blur');
                // saving
                click('.view-header .btn.btn-sm.js-publish-button');

                andThen(function () {
                    (0, _chai.expect)(find('input[name="post-setting-date"]').val(), 'date after saving').to.equal('10 May 16 @ 10:00');
                });

                // should not do anything if the input date is not different
                fillIn('input[name="post-setting-date"]', '10 May 16 @ 10:00');
                triggerEvent('input[name="post-setting-date"]', 'blur');

                andThen(function () {
                    (0, _chai.expect)(find('input[name="post-setting-date"]').val(), 'date didn\'t change').to.equal('10 May 16 @ 10:00');
                });

                // checking the flow of the saving button for a draft
                andThen(function () {
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').hasClass('btn-red'), 'no red button expected').to.be['false'];
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').text().trim(), 'text in save button').to.equal('Save Draft');
                    (0, _chai.expect)(find('.post-save-draft').hasClass('active'), 'highlights the default active button state for a draft').to.be['true'];
                });

                // click on publish now
                click('.post-save-publish a');

                andThen(function () {
                    (0, _chai.expect)(find('.post-save-publish').hasClass('active'), 'highlights the selected active button state').to.be['true'];
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').hasClass('btn-red'), 'red button to change from draft to published').to.be['true'];
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').text().trim(), 'text in save button after click on \'publish now\'').to.equal('Publish Now');
                });

                // Publish the post
                click('.view-header .btn.btn-sm.js-publish-button');

                andThen(function () {
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').text().trim(), 'text in save button after publishing').to.equal('Update Post');
                    (0, _chai.expect)(find('.post-save-publish').hasClass('active'), 'highlights the default active button state for a published post').to.be['true'];
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').hasClass('btn-red'), 'no red button expected').to.be['false'];
                });

                // post id 2 is a published post, checking for published post behaviour now
                visit('/editor/2');

                andThen(function () {
                    (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/editor/2');
                    (0, _chai.expect)(find('input[name="post-setting-date"]').val()).to.equal('19 Dec 15 @ 16:25');
                });

                // should reset the date if the input field is blank
                fillIn('input[name="post-setting-date"]', '');
                triggerEvent('input[name="post-setting-date"]', 'blur');

                andThen(function () {
                    (0, _chai.expect)(find('input[name="post-setting-date"]').val(), 'empty date input').to.equal('');
                });

                // saving
                click('.view-header .btn.btn-sm.js-publish-button');

                andThen(function () {
                    (0, _chai.expect)(find('input[name="post-setting-date"]').val(), 'date value restored').to.equal('19 Dec 15 @ 16:25');
                });

                // saves the post with a new date
                fillIn('input[name="post-setting-date"]', '10 May 16 @ 10:00');
                triggerEvent('input[name="post-setting-date"]', 'blur');
                // saving
                click('.view-header .btn.btn-sm.js-publish-button');

                andThen(function () {
                    (0, _chai.expect)(find('input[name="post-setting-date"]').val(), 'new date after saving').to.equal('10 May 16 @ 10:00');
                });

                // go to settings to change the timezone
                visit('/settings/general');

                andThen(function () {
                    (0, _chai.expect)(currentURL(), 'currentURL for settings').to.equal('/settings/general');
                    (0, _chai.expect)(find('#activeTimezone option:selected').text().trim(), 'default timezone').to.equal('(GMT) UTC');
                    // select a new timezone
                    find('#activeTimezone option[value="Pacific/Kwajalein"]').prop('selected', true);
                });

                triggerEvent('#activeTimezone select', 'change');
                // save the settings
                click('.view-header .btn.btn-blue');

                andThen(function () {
                    (0, _chai.expect)(find('#activeTimezone option:selected').text().trim(), 'new timezone after saving').to.equal('(GMT +12:00) International Date Line West');
                });

                // and now go back to the editor
                visit('/editor/2');

                andThen(function () {
                    (0, _chai.expect)(currentURL(), 'currentURL in editor').to.equal('/editor/2');
                    (0, _chai.expect)(find('input[name="post-setting-date"]').val(), 'date with blog timezone').to.equal('10 May 16 @ 22:00');
                });

                // should not do anything if the input date is not different
                fillIn('input[name="post-setting-date"]', '10 May 16 @ 22:00');
                triggerEvent('input[name="post-setting-date"]', 'blur');

                andThen(function () {
                    (0, _chai.expect)(find('input[name="post-setting-date"]').val(), 'date didn\'t change').to.equal('10 May 16 @ 22:00');
                });

                // click on unpublish
                click('.post-save-draft a');

                andThen(function () {
                    (0, _chai.expect)(find('.post-save-draft').hasClass('active'), 'highlights the active button state for a draft').to.be['true'];
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').hasClass('btn-red'), 'red button to change from published to draft').to.be['true'];
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').text().trim(), 'text in save button for post to unpublish').to.equal('Unpublish');
                });

                // Unpublish the post
                click('.view-header .btn.btn-sm.js-publish-button');

                andThen(function () {
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').text().trim(), 'text in save button for draft').to.equal('Save Draft');
                    (0, _chai.expect)(find('.post-save-draft').hasClass('active'), 'highlights the default active button state for a draft').to.be['true'];
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').hasClass('btn-red'), 'no red button expected').to.be['false'];
                });

                // Set the publish date 2 minute to the future to find an error message
                fillIn('input[name="post-setting-date"]', plusTwoMinPacific);
                triggerEvent('input[name="post-setting-date"]', 'blur');

                andThen(function () {
                    andThen(function () {
                        (0, _chai.expect)(find('.ember-view.response').text().trim(), 'inline error response for invalid date in future').to.equal('Must be at least 2 minutes from now.');
                    });
                });

                // Set the publish date into the future (best to have it 10 minutes from now in the future)
                fillIn('input[name="post-setting-date"]', plusTenMinPacific);
                triggerEvent('input[name="post-setting-date"]', 'blur');

                andThen(function () {
                    (0, _chai.expect)(find('label[for="post-setting-date"]').text().trim(), 'label changes to \'Scheduled Date\'').to.equal('Scheduled Date');
                });

                // click on 'Schedule Post'
                click('.post-save-schedule a');

                // button should show 'schedule post'
                andThen(function () {
                    (0, _chai.expect)(find('.post-save-schedule').hasClass('active'), 'highlights the active button state for a draft').to.be['true'];
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').hasClass('btn-red'), 'red button to change from published to draft').to.be['true'];
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').text().trim(), 'text in save button for post to schedule').to.equal('Schedule Post');
                });

                // click on schedule post and save
                click('.view-header .btn.btn-sm.js-publish-button');

                andThen(function () {
                    // Dropdown menu should be 'Update Post' and 'Unschedule'
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').text().trim(), 'text in save button for scheduled post').to.equal('Update Post');
                    (0, _chai.expect)(find('.post-save-schedule').hasClass('active'), 'highlights the default active button state for a scheduled post').to.be['true'];
                    (0, _chai.expect)(find('.post-save-draft').text().trim(), 'not active option should say \'Unschedule\'').to.equal('Unschedule');
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').hasClass('btn-red'), 'no red button expected').to.be['false'];
                    // expect countdown to show warning, that post will be published in x minutes
                    (0, _chai.expect)(find('.gh-notification.gh-notification-schedule').text().trim(), 'notification countdown').to.contain('Post will be published in');
                });

                // click on 'Unschedule'
                click('.post-save-draft a');

                andThen(function () {
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').text().trim(), 'text in save button to unscheduled post').to.equal('Unschedule');
                    (0, _chai.expect)(find('.post-save-draft').hasClass('active'), 'highlights the default active button state for a scheduled post').to.be['true'];
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').hasClass('btn-red'), 'red button expected due to status change').to.be['true'];
                });

                // click on unschedule post and save
                click('.view-header .btn.btn-sm.js-publish-button');

                andThen(function () {
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').text().trim(), 'text in save button for a draft').to.equal('Save Draft');
                    (0, _chai.expect)(find('.post-save-draft').hasClass('active'), 'highlights the default active button state for a draft post').to.be['true'];
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').hasClass('btn-red'), 'red button expected due to status change').to.be['false'];
                    // expect no countdown notification after unscheduling
                    (0, _chai.expect)(find('.gh-notification.gh-notification-schedule').text().trim(), 'notification countdown').to.equal('');
                });
            });

            (0, _mocha.it)('handles validation errors when scheduling', function () {
                var saveCount = 0;

                server.put('/posts/:id/', function (db, request) {
                    // we have three saves occurring here :-(
                    // 1. Auto-save of draft
                    // 2. Change of publish time
                    // 3. Pressing the Schedule button
                    saveCount++;
                    if (saveCount === 3) {
                        return new _emberCliMirage['default'].Response(422, {}, {
                            errors: [{
                                errorType: 'ValidationError',
                                message: 'Error test'
                            }]
                        });
                    } else {
                        var id = request.params.id;

                        var _JSON$parse$posts = _slicedToArray(JSON.parse(request.requestBody).posts, 1);

                        var attrs = _JSON$parse$posts[0];

                        delete attrs.id;

                        var _post = db.posts.update(id, attrs);

                        return {
                            posts: [_post]
                        };
                    }
                });

                var post = server.create('post', 1);
                var plusTenMin = moment().add(10, 'minutes').format('DD MMM YY @ HH:mm').toString();

                visit('/editor/' + post.id);

                fillIn('input[name="post-setting-date"]', plusTenMin);
                triggerEvent('input[name="post-setting-date"]', 'blur');
                click('.post-save-schedule a');
                click('.view-header .btn.btn-sm.js-publish-button');

                andThen(function () {
                    (0, _chai.expect)(find('.gh-alert').length, 'number of alerts after failed schedule').to.equal(1);

                    (0, _chai.expect)(find('.gh-alert').text(), 'alert text after failed schedule').to.match(/Scheduling failed: Error test/);
                });
            });

            (0, _mocha.it)('handles title validation errors correctly', function () {
                var post = server.createList('post', 1);

                // post id 1 is a draft, checking for draft behaviour now
                visit('/editor/1');

                andThen(function () {
                    (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/editor/1');
                });

                // Test title validation
                fillIn('input[id="entry-title"]', Array(160).join('a'));
                triggerEvent('input[id="entry-title"]', 'blur');
                click('.view-header .btn.btn-sm.js-publish-button');

                andThen(function () {
                    (0, _chai.expect)(find('.gh-alert').length, 'number of alerts after invalid title').to.equal(1);

                    (0, _chai.expect)(find('.gh-alert').text(), 'alert text after invalid title').to.match(/Title cannot be longer than 150 characters/);
                });
            });

            (0, _mocha.it)('renders first countdown notification before scheduled time', function () {
                /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
                var clock = _sinon['default'].useFakeTimers(moment().valueOf());
                var post = server.create('post', { published_at: moment.utc().add(4, 'minutes'), status: 'scheduled' });
                var compareDate = moment().tz('Etc/UTC').add(4, 'minutes').format('DD MMM YY @ HH:mm').toString();
                var settings = server.create('setting', { activeTimezone: 'Europe/Dublin' });

                visit('/editor/1');

                andThen(function () {
                    (0, _chai.expect)(currentURL(), 'currentURL').to.equal('/editor/1');
                    (0, _chai.expect)(find('input[name="post-setting-date"]').val(), 'scheduled date').to.equal(compareDate);
                    // Dropdown menu should be 'Update Post' and 'Unschedule'
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').text().trim(), 'text in save button for scheduled post').to.equal('Update Post');
                    (0, _chai.expect)(find('.post-save-schedule').hasClass('active'), 'highlights the default active button state for a scheduled post').to.be['true'];
                    (0, _chai.expect)(find('.post-save-draft').text().trim(), 'not active option should say \'Unschedule\'').to.equal('Unschedule');
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').hasClass('btn-red'), 'no red button expected').to.be['false'];
                    // expect countdown to show warning, that post will be published in x minutes
                    (0, _chai.expect)(find('.gh-notification.gh-notification-schedule').text().trim(), 'notification countdown').to.contain('Post will be published in');
                });
                clock.restore();
            });

            (0, _mocha.it)('only shows option to unschedule post 2 minutes before scheduled time', function () {
                /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
                var clock = _sinon['default'].useFakeTimers(moment().valueOf());
                var post = server.create('post', { published_at: moment.utc().add(2, 'minutes'), status: 'scheduled' });
                var compareDate = moment().tz('Europe/Dublin').add(2, 'minutes').format('DD MMM YY @ HH:mm').toString();
                var settings = server.create('setting', { activeTimezone: 'Europe/Dublin' });

                visit('/editor/1');

                andThen(function () {
                    // Save button should say 'Unschedule'
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').text().trim(), 'text in save button for scheduled post in status freeze mode').to.equal('Unschedule');
                    // expect countdown to show warning, that post will be published in x minutes
                    (0, _chai.expect)(find('.gh-notification.gh-notification-schedule').text().trim(), 'notification countdown').to.contain('Post will be published in');
                    // no dropdown menu
                    (0, _chai.expect)(find('.btn.btn-sm.dropdown-toggle').hasClass('active'), 'no dropdown menu').to.be['false'];
                });

                clock.restore();
            });

            (0, _mocha.it)('lets user unschedule the post shortly before scheduled date', function () {
                /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
                var clock = _sinon['default'].useFakeTimers(moment().valueOf());
                var post = server.create('post', { published_at: moment.utc().add(1, 'minute'), status: 'scheduled' });
                var compareDate = moment().tz('Europe/Dublin').add(1, 'minute').format('DD MMM YY @ HH:mm').toString();
                var settings = server.create('setting', { activeTimezone: 'Europe/Dublin' });

                visit('/editor/1');

                // change some text
                fillIn('.markdown-editor', 'Let\'s make some markdown changes');

                andThen(function () {
                    // Save button should say 'Unschedule'
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').text().trim(), 'text in save button for scheduled post in status freeze mode').to.equal('Unschedule');
                    // expect countdown to show warning, that post will be published in x minutes
                    (0, _chai.expect)(find('.gh-notification.gh-notification-schedule').text().trim(), 'notification countdown').to.contain('Post will be published in');
                    // no dropdown menu
                    (0, _chai.expect)(find('.btn.btn-sm.dropdown-toggle').hasClass('active'), 'no dropdown menu').to.be['false'];
                });

                // click on Unschedule
                click('.view-header .btn.btn-sm.js-publish-button');

                andThen(function () {
                    (0, _chai.expect)(find('.markdown-editor').val(), 'changed text in markdown editor').to.equal('Let\'s make some markdown changes');
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').text().trim(), 'text in save button for a draft').to.equal('Save Draft');
                    (0, _chai.expect)(find('.post-save-draft').hasClass('active'), 'highlights the default active button state for a draft post').to.be['true'];
                    (0, _chai.expect)(find('.view-header .btn.btn-sm.js-publish-button').hasClass('btn-red'), 'red button expected due to status change').to.be['false'];
                    // expect no countdown notification after unscheduling
                    (0, _chai.expect)(find('.gh-notification.gh-notification-schedule').text().trim(), 'notification countdown').to.equal('');
                });

                clock.restore();
            });
        });
    });
});
/* jshint expr:true */