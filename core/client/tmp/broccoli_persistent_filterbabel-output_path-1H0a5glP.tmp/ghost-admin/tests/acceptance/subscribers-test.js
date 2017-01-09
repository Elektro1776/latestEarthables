define('ghost-admin/tests/acceptance/subscribers-test', ['exports', 'mocha', 'chai', 'ghost-admin/tests/helpers/start-app', 'ghost-admin/tests/helpers/destroy-app', 'ghost-admin/tests/helpers/ember-simple-auth'], function (exports, _mocha, _chai, _ghostAdminTestsHelpersStartApp, _ghostAdminTestsHelpersDestroyApp, _ghostAdminTestsHelpersEmberSimpleAuth) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    (0, _mocha.describe)('Acceptance: Subscribers', function () {
        var application = undefined;

        (0, _mocha.beforeEach)(function () {
            application = (0, _ghostAdminTestsHelpersStartApp['default'])();
        });

        (0, _mocha.afterEach)(function () {
            (0, _ghostAdminTestsHelpersDestroyApp['default'])(application);
        });

        (0, _mocha.it)('redirects to signin when not authenticated', function () {
            (0, _ghostAdminTestsHelpersEmberSimpleAuth.invalidateSession)(application);
            visit('/subscribers');

            andThen(function () {
                (0, _chai.expect)(currentURL()).to.equal('/signin');
            });
        });

        (0, _mocha.it)('redirects editors to posts', function () {
            var role = server.create('role', { name: 'Editor' });
            var user = server.create('user', { roles: [role] });

            (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            visit('/subscribers');

            andThen(function () {
                (0, _chai.expect)(currentURL()).to.equal('/');
                (0, _chai.expect)(find('.gh-nav-main a:contains("Subscribers")').length, 'sidebar link is visible').to.equal(0);
            });
        });

        (0, _mocha.it)('redirects authors to posts', function () {
            var role = server.create('role', { name: 'Author' });
            var user = server.create('user', { roles: [role] });

            (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            visit('/subscribers');

            andThen(function () {
                (0, _chai.expect)(currentURL()).to.equal('/');
                (0, _chai.expect)(find('.gh-nav-main a:contains("Subscribers")').length, 'sidebar link is visible').to.equal(0);
            });
        });

        (0, _mocha.describe)('an admin', function () {
            (0, _mocha.beforeEach)(function () {
                var role = server.create('role', { name: 'Administrator' });
                var user = server.create('user', { roles: [role] });

                server.loadFixtures();

                return (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
            });

            (0, _mocha.it)('can manage subscribers', function () {
                server.createList('subscriber', 40);

                (0, _ghostAdminTestsHelpersEmberSimpleAuth.authenticateSession)(application);
                visit('/');
                click('.gh-nav-main a:contains("Subscribers")');

                andThen(function () {
                    // it navigates to the correct page
                    (0, _chai.expect)(currentPath()).to.equal('subscribers.index');

                    // it has correct page title
                    (0, _chai.expect)(document.title, 'page title').to.equal('Subscribers - Test Blog');

                    // it loads the first page
                    (0, _chai.expect)(find('.subscribers-table .lt-body .lt-row').length, 'number of subscriber rows').to.equal(30);

                    // it shows the total number of subscribers
                    (0, _chai.expect)(find('#total-subscribers').text().trim(), 'displayed subscribers total').to.equal('40');

                    // it defaults to sorting by created_at desc

                    var _server$pretender$handledRequests$slice = server.pretender.handledRequests.slice(-1);

                    var _server$pretender$handledRequests$slice2 = _slicedToArray(_server$pretender$handledRequests$slice, 1);

                    var lastRequest = _server$pretender$handledRequests$slice2[0];

                    (0, _chai.expect)(lastRequest.queryParams.order).to.equal('created_at desc');

                    var createdAtHeader = find('.subscribers-table th:contains("Subscription Date")');
                    (0, _chai.expect)(createdAtHeader.hasClass('is-sorted'), 'createdAt column is sorted').to.be['true'];
                    (0, _chai.expect)(createdAtHeader.find('.icon-descending').length, 'createdAt column has descending icon').to.equal(1);
                });

                // click the column to re-order
                click('th:contains("Subscription Date")');

                andThen(function () {
                    // it flips the directions and re-fetches

                    var _server$pretender$handledRequests$slice3 = server.pretender.handledRequests.slice(-1);

                    var _server$pretender$handledRequests$slice32 = _slicedToArray(_server$pretender$handledRequests$slice3, 1);

                    var lastRequest = _server$pretender$handledRequests$slice32[0];

                    (0, _chai.expect)(lastRequest.queryParams.order).to.equal('created_at asc');

                    var createdAtHeader = find('.subscribers-table th:contains("Subscription Date")');
                    (0, _chai.expect)(createdAtHeader.find('.icon-ascending').length, 'createdAt column has ascending icon').to.equal(1);

                    // scroll to the bottom of the table to simulate infinite scroll
                    find('.subscribers-table').scrollTop(find('.subscribers-table .ember-light-table').height());
                });

                // trigger infinite scroll
                triggerEvent('.subscribers-table', 'scroll');

                andThen(function () {
                    // it loads the next page
                    (0, _chai.expect)(find('.subscribers-table .lt-body .lt-row').length, 'number of subscriber rows after infinite-scroll').to.equal(40);
                });

                // click the add subscriber button
                click('.btn:contains("Add Subscriber")');

                andThen(function () {
                    // it displays the add subscriber modal
                    (0, _chai.expect)(find('.fullscreen-modal').length, 'add subscriber modal displayed').to.equal(1);
                });

                // cancel the modal
                click('.fullscreen-modal .btn:contains("Cancel")');

                andThen(function () {
                    // it closes the add subscriber modal
                    (0, _chai.expect)(find('.fullscreen-modal').length, 'add subscriber modal displayed after cancel').to.equal(0);
                });

                // save a new subscriber
                click('.btn:contains("Add Subscriber")');
                fillIn('.fullscreen-modal input[name="email"]', 'test@example.com');
                click('.fullscreen-modal .btn:contains("Add")');

                andThen(function () {
                    // the add subscriber modal is closed
                    (0, _chai.expect)(find('.fullscreen-modal').length, 'add subscriber modal displayed after save').to.equal(0);

                    // the subscriber is added to the table
                    (0, _chai.expect)(find('.subscribers-table .lt-body .lt-row:first-of-type .lt-cell:first-of-type').text().trim(), 'first email in list after addition').to.equal('test@example.com');

                    // the table is scrolled to the top
                    // TODO: implement scroll to new record after addition
                    // expect(find('.subscribers-table').scrollTop(), 'scroll position after addition')
                    //     .to.equal(0);

                    // the subscriber total is updated
                    (0, _chai.expect)(find('#total-subscribers').text().trim(), 'subscribers total after addition').to.equal('41');
                });

                // saving a duplicate subscriber
                click('.btn:contains("Add Subscriber")');
                fillIn('.fullscreen-modal input[name="email"]', 'test@example.com');
                click('.fullscreen-modal .btn:contains("Add")');

                andThen(function () {
                    // the validation error is displayed
                    (0, _chai.expect)(find('.fullscreen-modal .error .response').text().trim(), 'duplicate email validation').to.equal('Email already exists.');

                    // the subscriber is not added to the table
                    (0, _chai.expect)(find('.lt-cell:contains(test@example.com)').length, 'number of "test@example.com rows"').to.equal(1);

                    // the subscriber total is unchanged
                    (0, _chai.expect)(find('#total-subscribers').text().trim(), 'subscribers total after failed add').to.equal('41');
                });

                // deleting a subscriber
                click('.fullscreen-modal .btn:contains("Cancel")');
                click('.subscribers-table tbody tr:first-of-type button:last-of-type');

                andThen(function () {
                    // it displays the delete subscriber modal
                    (0, _chai.expect)(find('.fullscreen-modal').length, 'delete subscriber modal displayed').to.equal(1);
                });

                // cancel the modal
                click('.fullscreen-modal .btn:contains("Cancel")');

                andThen(function () {
                    // return pauseTest();
                    // it closes the add subscriber modal
                    (0, _chai.expect)(find('.fullscreen-modal').length, 'delete subscriber modal displayed after cancel').to.equal(0);
                });

                click('.subscribers-table tbody tr:first-of-type button:last-of-type');
                click('.fullscreen-modal .btn:contains("Delete")');

                andThen(function () {
                    // the add subscriber modal is closed
                    (0, _chai.expect)(find('.fullscreen-modal').length, 'delete subscriber modal displayed after confirm').to.equal(0);

                    // the subscriber is removed from the table
                    (0, _chai.expect)(find('.subscribers-table .lt-body .lt-row:first-of-type .lt-cell:first-of-type').text().trim(), 'first email in list after addition').to.not.equal('test@example.com');

                    // the subscriber total is updated
                    (0, _chai.expect)(find('#total-subscribers').text().trim(), 'subscribers total after addition').to.equal('40');
                });

                // click the import subscribers button
                click('.btn:contains("Import CSV")');

                andThen(function () {
                    // it displays the import subscribers modal
                    (0, _chai.expect)(find('.fullscreen-modal').length, 'import subscribers modal displayed').to.equal(1);
                    (0, _chai.expect)(find('.fullscreen-modal input[type="file"]').length, 'import modal contains file input').to.equal(1);
                });

                // cancel the modal
                click('.fullscreen-modal .btn:contains("Cancel")');

                andThen(function () {
                    // it closes the import subscribers modal
                    (0, _chai.expect)(find('.fullscreen-modal').length, 'import subscribers modal displayed after cancel').to.equal(0);
                });

                click('.btn:contains("Import CSV")');
                fileUpload('.fullscreen-modal input[type="file"]', ['test'], { name: 'test.csv' });

                andThen(function () {
                    // modal title changes
                    (0, _chai.expect)(find('.fullscreen-modal h1').text().trim(), 'import modal title after import').to.equal('Import Successful');

                    // modal button changes
                    (0, _chai.expect)(find('.fullscreen-modal .modal-footer button').text().trim(), 'import modal button text after import').to.equal('Close');

                    // subscriber total is updated
                    (0, _chai.expect)(find('#total-subscribers').text().trim(), 'subscribers total after import').to.equal('90');

                    // table is reset

                    var _server$pretender$handledRequests$slice4 = server.pretender.handledRequests.slice(-1);

                    var _server$pretender$handledRequests$slice42 = _slicedToArray(_server$pretender$handledRequests$slice4, 1);

                    var lastRequest = _server$pretender$handledRequests$slice42[0];

                    (0, _chai.expect)(lastRequest.url, 'endpoint requested after import').to.match(/\/subscribers\/\?/);
                    (0, _chai.expect)(lastRequest.queryParams.page, 'page requested after import').to.equal('1');

                    (0, _chai.expect)(find('.subscribers-table .lt-body .lt-row').length, 'number of rows in table after import').to.equal(30);
                });

                // close modal
            });
        });
    });
});
/* jshint expr:true */