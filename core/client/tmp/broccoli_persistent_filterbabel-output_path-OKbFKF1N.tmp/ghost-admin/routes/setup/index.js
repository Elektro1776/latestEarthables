define('ghost-admin/routes/setup/index', ['exports', 'ember-route'], function (exports, _emberRoute) {
    exports['default'] = _emberRoute['default'].extend({
        beforeModel: function beforeModel() {
            this._super.apply(this, arguments);
            this.transitionTo('setup.one');
        }
    });
});