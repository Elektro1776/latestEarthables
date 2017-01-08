define('ghost-admin/services/clock', ['exports', 'ember', 'ember-service', 'ember-runloop'], function (exports, _ember, _emberService, _emberRunloop) {

    // ember-cli-shims doesn't export Ember.testing
    var testing = _ember['default'].testing;

    var ONE_SECOND = 1000;

    // Creates a clock service to run intervals.

    exports['default'] = _emberService['default'].extend({
        second: null,
        minute: null,
        hour: null,

        init: function init() {
            this.tick();
        },

        tick: function tick() {
            var _this = this;

            var now = moment().utc();

            this.setProperties({
                second: now.seconds(),
                minute: now.minutes(),
                hour: now.hours()
            });

            if (!testing) {
                _emberRunloop['default'].later(function () {
                    _this.tick();
                }, ONE_SECOND);
            }
        }

    });
});