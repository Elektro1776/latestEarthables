define('ghost-admin/services/ajax', ['exports', 'ember-metal/get', 'ember-computed', 'ember-service/inject', 'ember-array/utils', 'ember-ajax/services/ajax', 'ember-ajax/errors', 'ghost-admin/config/environment'], function (exports, _emberMetalGet, _emberComputed, _emberServiceInject, _emberArrayUtils, _emberAjaxServicesAjax, _emberAjaxErrors, _ghostAdminConfigEnvironment) {
    exports.VersionMismatchError = VersionMismatchError;
    exports.isVersionMismatchError = _isVersionMismatchError;
    exports.ServerUnreachableError = ServerUnreachableError;
    exports.isServerUnreachableError = _isServerUnreachableError;
    exports.RequestEntityTooLargeError = RequestEntityTooLargeError;
    exports.isRequestEntityTooLargeError = _isRequestEntityTooLargeError;
    exports.UnsupportedMediaTypeError = UnsupportedMediaTypeError;
    exports.isUnsupportedMediaTypeError = _isUnsupportedMediaTypeError;
    exports.MaintenanceError = MaintenanceError;
    exports.isMaintenanceError = _isMaintenanceError;
    exports.ThemeValidationError = ThemeValidationError;
    exports.isThemeValidationError = _isThemeValidationError;

    function _typeof(obj) { return obj && obj.constructor === Symbol ? 'symbol' : typeof obj; }

    function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

    /* Version mismatch error */

    function VersionMismatchError(errors) {
        _emberAjaxErrors.AjaxError.call(this, errors, 'API server is running a newer version of Ghost, please upgrade.');
    }

    VersionMismatchError.prototype = Object.create(_emberAjaxErrors.AjaxError.prototype);

    function _isVersionMismatchError(errorOrStatus, payload) {
        if ((0, _emberAjaxErrors.isAjaxError)(errorOrStatus)) {
            return _instanceof(errorOrStatus, VersionMismatchError);
        } else if (errorOrStatus && (0, _emberMetalGet['default'])(errorOrStatus, 'isAdapterError')) {
            return (0, _emberMetalGet['default'])(errorOrStatus, 'errors.firstObject.errorType') === 'VersionMismatchError';
        } else {
            return (0, _emberMetalGet['default'])(payload || {}, 'errors.firstObject.errorType') === 'VersionMismatchError';
        }
    }

    /* Request entity too large error */

    function ServerUnreachableError(errors) {
        _emberAjaxErrors.AjaxError.call(this, errors, 'Server was unreachable');
    }

    ServerUnreachableError.prototype = Object.create(_emberAjaxErrors.AjaxError.prototype);

    function _isServerUnreachableError(error) {
        if ((0, _emberAjaxErrors.isAjaxError)(error)) {
            return _instanceof(error, ServerUnreachableError);
        } else {
            return error === 0 || error === '0';
        }
    }

    function RequestEntityTooLargeError(errors) {
        _emberAjaxErrors.AjaxError.call(this, errors, 'Request is larger than the maximum file size the server allows');
    }

    RequestEntityTooLargeError.prototype = Object.create(_emberAjaxErrors.AjaxError.prototype);

    function _isRequestEntityTooLargeError(errorOrStatus) {
        if ((0, _emberAjaxErrors.isAjaxError)(errorOrStatus)) {
            return _instanceof(errorOrStatus, RequestEntityTooLargeError);
        } else {
            return errorOrStatus === 413;
        }
    }

    /* Unsupported media type error */

    function UnsupportedMediaTypeError(errors) {
        _emberAjaxErrors.AjaxError.call(this, errors, 'Request contains an unknown or unsupported file type.');
    }

    UnsupportedMediaTypeError.prototype = Object.create(_emberAjaxErrors.AjaxError.prototype);

    function _isUnsupportedMediaTypeError(errorOrStatus) {
        if ((0, _emberAjaxErrors.isAjaxError)(errorOrStatus)) {
            return _instanceof(errorOrStatus, UnsupportedMediaTypeError);
        } else {
            return errorOrStatus === 415;
        }
    }

    /* Maintenance error */

    function MaintenanceError(errors) {
        _emberAjaxErrors.AjaxError.call(this, errors, 'Ghost is currently undergoing maintenance, please wait a moment then retry.');
    }

    MaintenanceError.prototype = Object.create(_emberAjaxErrors.AjaxError.prototype);

    function _isMaintenanceError(errorOrStatus) {
        if ((0, _emberAjaxErrors.isAjaxError)(errorOrStatus)) {
            return _instanceof(errorOrStatus, MaintenanceError);
        } else if (errorOrStatus && (0, _emberMetalGet['default'])(errorOrStatus, 'isAdapterError')) {
            return (0, _emberMetalGet['default'])(errorOrStatus, 'errors.firstObject.errorType') === 'Maintenance';
        } else {
            return errorOrStatus === 503;
        }
    }

    /* Theme validation error */

    function ThemeValidationError(errors) {
        _emberAjaxErrors.AjaxError.call(this, errors, 'Theme is not compatible or contains errors.');
    }

    ThemeValidationError.prototype = Object.create(_emberAjaxErrors.AjaxError.prototype);

    function _isThemeValidationError(errorOrStatus, payload) {
        if ((0, _emberAjaxErrors.isAjaxError)(errorOrStatus)) {
            return _instanceof(errorOrStatus, ThemeValidationError);
        } else if (errorOrStatus && (0, _emberMetalGet['default'])(errorOrStatus, 'isAdapterError')) {
            return (0, _emberMetalGet['default'])(errorOrStatus, 'errors.firstObject.errorType') === 'ThemeValidationError';
        } else {
            return (0, _emberMetalGet['default'])(payload || {}, 'errors.firstObject.errorType') === 'ThemeValidationError';
        }
    }

    /* end: custom error types */

    exports['default'] = _emberAjaxServicesAjax['default'].extend({
        session: (0, _emberServiceInject['default'])(),

        headers: (0, _emberComputed['default'])('session.isAuthenticated', function () {
            var session = this.get('session');
            var headers = {};

            headers['X-Ghost-Version'] = _ghostAdminConfigEnvironment['default'].APP.version;

            if (session.get('isAuthenticated')) {
                session.authorize('authorizer:oauth2', function (headerName, headerValue) {
                    headers[headerName] = headerValue;
                });
            }

            return headers;
        }).volatile(),

        handleResponse: function handleResponse(status, headers, payload) {
            if (this.isVersionMismatchError(status, headers, payload)) {
                return new VersionMismatchError(payload.errors);
            } else if (this.isServerUnreachableError(status, headers, payload)) {
                return new ServerUnreachableError(payload.errors);
            } else if (this.isRequestEntityTooLargeError(status, headers, payload)) {
                return new RequestEntityTooLargeError(payload.errors);
            } else if (this.isUnsupportedMediaTypeError(status, headers, payload)) {
                return new UnsupportedMediaTypeError(payload.errors);
            } else if (this.isMaintenanceError(status, headers, payload)) {
                return new MaintenanceError(payload.errors);
            } else if (this.isThemeValidationError(status, headers, payload)) {
                return new ThemeValidationError(payload.errors);
            }

            return this._super.apply(this, arguments);
        },

        normalizeErrorResponse: function normalizeErrorResponse(status, headers, payload) {
            if (payload && (typeof payload === 'undefined' ? 'undefined' : _typeof(payload)) === 'object') {
                payload.errors = payload.error || payload.errors || payload.message || undefined;

                if ((0, _emberArrayUtils.isEmberArray)(payload.errors)) {
                    payload.errors = payload.errors.map(function (error) {
                        if (typeof error === 'string') {
                            return { message: error };
                        } else {
                            return error;
                        }
                    });
                }
            }

            return this._super(status, headers, payload);
        },

        isVersionMismatchError: function isVersionMismatchError(status, headers, payload) {
            return _isVersionMismatchError(status, payload);
        },

        isServerUnreachableError: function isServerUnreachableError(status /*, headers, payload */) {
            return _isServerUnreachableError(status);
        },

        isRequestEntityTooLargeError: function isRequestEntityTooLargeError(status /*, headers, payload */) {
            return _isRequestEntityTooLargeError(status);
        },

        isUnsupportedMediaTypeError: function isUnsupportedMediaTypeError(status /*, headers, payload */) {
            return _isUnsupportedMediaTypeError(status);
        },

        isMaintenanceError: function isMaintenanceError(status, headers, payload) {
            return _isMaintenanceError(status, payload);
        },

        isThemeValidationError: function isThemeValidationError(status, headers, payload) {
            return _isThemeValidationError(status, payload);
        }
    });
});