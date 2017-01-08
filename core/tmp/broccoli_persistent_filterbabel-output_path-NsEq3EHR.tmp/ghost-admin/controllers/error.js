define('ghost-admin/controllers/error', ['exports', 'ember-controller', 'ember-computed'], function (exports, _emberController, _emberComputed) {
    exports['default'] = _emberController['default'].extend({

        stack: false,

        code: (0, _emberComputed['default'])('content.status', function () {
            return this.get('content.status') > 200 ? this.get('content.status') : 500;
        }),

        message: (0, _emberComputed['default'])('content.statusText', function () {
            if (this.get('code') === 404) {
                return 'Page not found';
            }

            return this.get('content.statusText') !== 'error' ? this.get('content.statusText') : 'Internal Server Error';
        })
    });
});