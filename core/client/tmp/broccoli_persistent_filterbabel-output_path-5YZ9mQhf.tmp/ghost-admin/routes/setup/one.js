define('ghost-admin/routes/setup/one', ['exports', 'ember', 'ember-route', 'ember-service/inject', 'ember-object', 'ember-runloop', 'ember-ajax/services/ajax'], function (exports, _ember, _emberRoute, _emberServiceInject, _emberObject, _emberRunloop, _emberAjaxServicesAjax) {

    // ember-cli-shims doesn't export Ember.testing
    var testing = _ember['default'].testing;

    var DownloadCountPoller = _emberObject['default'].extend({
        url: null,
        count: '',
        runId: null,

        ajax: _emberAjaxServicesAjax['default'].create(),
        notifications: (0, _emberServiceInject['default'])(),

        init: function init() {
            this._super.apply(this, arguments);
            this.downloadCounter();
            this.poll();
        },

        poll: function poll() {
            var interval = testing ? 20 : 2000;
            var runId = _emberRunloop['default'].later(this, function () {
                this.downloadCounter();
                if (!testing) {
                    this.poll();
                }
            }, interval);

            this.set('runId', runId);
        },

        downloadCounter: function downloadCounter() {
            var _this = this;

            this.get('ajax').request(this.get('url')).then(function (data) {
                var pattern = /(-?\d+)(\d{3})/;
                var count = data.count.toString();

                while (pattern.test(count)) {
                    count = count.replace(pattern, '$1,$2');
                }

                _this.set('count', count);
            })['catch'](function (error) {
                _this.set('count', '');
                _this.get('notifications').showAPIError(error);
            });
        }
    });

    exports['default'] = _emberRoute['default'].extend({
        ghostPaths: (0, _emberServiceInject['default'])(),

        model: function model() {
            return DownloadCountPoller.create({ url: this.get('ghostPaths.count') });
        },

        resetController: function resetController(controller, isExiting) {
            if (isExiting) {
                _emberRunloop['default'].cancel(controller.get('model.runId'));
                controller.set('model', null);
            }
        }
    });
});