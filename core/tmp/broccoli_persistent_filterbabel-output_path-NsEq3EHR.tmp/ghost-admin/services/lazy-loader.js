define('ghost-admin/services/lazy-loader', ['exports', 'jquery', 'ember', 'rsvp', 'ember-service', 'ember-service/inject'], function (exports, _jquery, _ember, _rsvp, _emberService, _emberServiceInject) {
    var testing = _ember['default'].testing;
    exports['default'] = _emberService['default'].extend({
        ajax: (0, _emberServiceInject['default'])(),
        ghostPaths: (0, _emberServiceInject['default'])(),

        // This is needed so we can disable it in unit tests
        testing: testing,

        scriptPromises: {},

        loadScript: function loadScript(key, url) {
            if (this.get('testing')) {
                return _rsvp['default'].resolve();
            }

            if (this.get('scriptPromises.' + key)) {
                // Script is already loaded/in the process of being loaded,
                // so return that promise
                return this.get('scriptPromises.' + key);
            }

            var ajax = this.get('ajax');
            var adminRoot = this.get('ghostPaths.adminRoot');

            var scriptPromise = ajax.request('' + adminRoot + url, {
                dataType: 'script',
                cache: true
            });

            this.set('scriptPromises.' + key, scriptPromise);

            return scriptPromise;
        },

        loadStyle: function loadStyle(key, url) {
            if (this.get('testing')) {
                return _rsvp['default'].resolve();
            }

            if (!(0, _jquery['default'])('#' + key + '-styles').length) {
                var $style = (0, _jquery['default'])('<link rel="stylesheet" id="' + key + '-styles" />');
                $style.attr('href', '' + this.get('ghostPaths.adminRoot') + url);
                (0, _jquery['default'])('head').append($style);
            }
        }
    });
});