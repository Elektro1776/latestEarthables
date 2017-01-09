define('ghost-admin/routes/setup/three', ['exports', 'ember-route'], function (exports, _emberRoute) {
    exports['default'] = _emberRoute['default'].extend({
        beforeModel: function beforeModel() {
            this._super.apply(this, arguments);
            if (!this.controllerFor('setup.two').get('blogCreated')) {
                this.transitionTo('setup.two');
            }
        }
    });
});