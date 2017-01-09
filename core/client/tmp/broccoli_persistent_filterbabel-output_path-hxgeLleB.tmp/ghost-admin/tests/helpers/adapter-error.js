define('ghost-admin/tests/helpers/adapter-error', ['exports', 'ember', 'ember-test'], function (exports, _ember, _emberTest) {
    exports.errorOverride = errorOverride;
    exports.errorReset = errorReset;

    // This is needed for testing error responses in acceptance tests
    // See http://williamsbdev.com/posts/testing-rsvp-errors-handled-globally/

    // ember-cli-shims doesn't export Logger
    var Logger = _ember['default'].Logger;

    var originalException = undefined;
    var originalLoggerError = undefined;

    function errorOverride() {
        originalException = _emberTest['default'].adapter.exception;
        originalLoggerError = Logger.error;
        _emberTest['default'].adapter.exception = function () {};
        Logger.error = function () {};
    }

    function errorReset() {
        _emberTest['default'].adapter.exception = originalException;
        Logger.error = originalLoggerError;
    }
});