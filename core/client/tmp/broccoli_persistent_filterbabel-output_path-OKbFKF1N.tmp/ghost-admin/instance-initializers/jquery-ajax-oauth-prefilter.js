define('ghost-admin/instance-initializers/jquery-ajax-oauth-prefilter', ['exports', 'jquery', 'ember-platform'], function (exports, _jquery, _emberPlatform) {
    exports['default'] = {
        name: 'jquery-ajax-oauth-prefilter',
        after: 'ember-simple-auth',

        initialize: function initialize(application) {
            var session = application.lookup('service:session');

            _jquery['default'].ajaxPrefilter(function (options) {
                session.authorize('authorizer:oauth2', function (headerName, headerValue) {
                    var headerObject = {};

                    headerObject[headerName] = headerValue;
                    options.headers = (0, _emberPlatform.assign)(options.headers || {}, headerObject);
                });
            });
        }
    };
});