define('ghost-admin/services/time-zone', ['exports', 'ember-service', 'ember-computed', 'ember-service/inject'], function (exports, _emberService, _emberComputed, _emberServiceInject) {
    exports['default'] = _emberService['default'].extend({
        store: (0, _emberServiceInject['default'])(),

        _parseTimezones: function _parseTimezones(settings) {
            var activeTimezone = settings.get('activeTimezone');
            return activeTimezone;
        },

        _settings: (0, _emberComputed['default'])(function () {
            var store = this.get('store');
            return store.queryRecord('setting', { type: 'blog,theme,private' });
        }),

        blogTimezone: (0, _emberComputed['default'])('_settings.activeTimezone', function () {
            var _this = this;

            return this.get('_settings').then(function (settings) {
                return _this._parseTimezones(settings);
            });
        })

    });
});