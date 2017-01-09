define('ghost-admin/tests/integration/services/ajax-test', ['exports', 'chai', 'ember-mocha', 'pretender', 'ember-ajax/errors', 'ghost-admin/services/ajax', 'ghost-admin/config/environment'], function (exports, _chai, _emberMocha, _pretender, _emberAjaxErrors, _ghostAdminServicesAjax, _ghostAdminConfigEnvironment) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    function stubAjaxEndpoint(server) {
        var response = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var code = arguments.length <= 2 || arguments[2] === undefined ? 200 : arguments[2];

        server.get('/test/', function () {
            return [code, { 'Content-Type': 'application/json' }, JSON.stringify(response)];
        });
    }

    (0, _emberMocha.describeModule)('service:ajax', 'Integration: Service: ajax', {
        integration: true
    }, function () {
        var server = undefined;

        beforeEach(function () {
            server = new _pretender['default']();
        });

        afterEach(function () {
            server.shutdown();
        });

        (0, _emberMocha.it)('adds Ghost version header to requests', function (done) {
            var version = _ghostAdminConfigEnvironment['default'].APP.version;

            var ajax = this.subject();

            stubAjaxEndpoint(server, {});

            ajax.request('/test/').then(function () {
                var _server$handledRequests = _slicedToArray(server.handledRequests, 1);

                var request = _server$handledRequests[0];

                (0, _chai.expect)(request.requestHeaders['X-Ghost-Version']).to.equal(version);
                done();
            });
        });

        (0, _emberMocha.it)('correctly parses single message response text', function (done) {
            var error = { message: 'Test Error' };
            stubAjaxEndpoint(server, error, 500);

            var ajax = this.subject();

            ajax.request('/test/').then(function () {
                (0, _chai.expect)(false).to.be['true']();
            })['catch'](function (error) {
                (0, _chai.expect)(error.errors).to.equal('Test Error');
                done();
            });
        });

        (0, _emberMocha.it)('correctly parses single error response text', function (done) {
            var error = { error: 'Test Error' };
            stubAjaxEndpoint(server, error, 500);

            var ajax = this.subject();

            ajax.request('/test/').then(function () {
                (0, _chai.expect)(false).to.be['true']();
            })['catch'](function (error) {
                (0, _chai.expect)(error.errors).to.equal('Test Error');
                done();
            });
        });

        (0, _emberMocha.it)('correctly parses multiple error messages', function (done) {
            var error = { errors: ['First Error', 'Second Error'] };
            stubAjaxEndpoint(server, error, 500);

            var ajax = this.subject();

            ajax.request('/test/').then(function () {
                (0, _chai.expect)(false).to.be['true']();
            })['catch'](function (error) {
                (0, _chai.expect)(error.errors).to.deep.equal([{ message: 'First Error' }, { message: 'Second Error' }]);
                done();
            });
        });

        (0, _emberMocha.it)('returns default error object for non built-in error', function (done) {
            stubAjaxEndpoint(server, {}, 500);

            var ajax = this.subject();

            ajax.request('/test/').then(function () {
                (0, _chai.expect)(false).to.be['true'];
            })['catch'](function (error) {
                (0, _chai.expect)((0, _emberAjaxErrors.isAjaxError)(error)).to.be['true'];
                done();
            });
        });

        (0, _emberMocha.it)('handles error checking for built-in errors', function (done) {
            stubAjaxEndpoint(server, '', 401);

            var ajax = this.subject();

            ajax.request('/test/').then(function () {
                (0, _chai.expect)(false).to.be['true'];
            })['catch'](function (error) {
                (0, _chai.expect)((0, _emberAjaxErrors.isUnauthorizedError)(error)).to.be['true'];
                done();
            });
        });

        (0, _emberMocha.it)('handles error checking for VersionMismatchError', function (done) {
            server.get('/test/', function () {
                return [400, { 'Content-Type': 'application/json' }, JSON.stringify({
                    errors: [{
                        errorType: 'VersionMismatchError',
                        statusCode: 400
                    }]
                })];
            });

            var ajax = this.subject();

            ajax.request('/test/').then(function () {
                (0, _chai.expect)(false).to.be['true'];
            })['catch'](function (error) {
                (0, _chai.expect)((0, _ghostAdminServicesAjax.isVersionMismatchError)(error)).to.be['true'];
                done();
            });
        });

        (0, _emberMocha.it)('handles error checking for RequestEntityTooLargeError on 413 errors', function (done) {
            stubAjaxEndpoint(server, {}, 413);

            var ajax = this.subject();

            ajax.request('/test/').then(function () {
                (0, _chai.expect)(false).to.be['true'];
            })['catch'](function (error) {
                (0, _chai.expect)((0, _ghostAdminServicesAjax.isRequestEntityTooLargeError)(error)).to.be['true'];
                done();
            });
        });

        (0, _emberMocha.it)('handles error checking for UnsupportedMediaTypeError on 415 errors', function (done) {
            stubAjaxEndpoint(server, {}, 415);

            var ajax = this.subject();

            ajax.request('/test/').then(function () {
                (0, _chai.expect)(false).to.be['true'];
            })['catch'](function (error) {
                (0, _chai.expect)((0, _ghostAdminServicesAjax.isUnsupportedMediaTypeError)(error)).to.be['true'];
                done();
            });
        });
    });
});