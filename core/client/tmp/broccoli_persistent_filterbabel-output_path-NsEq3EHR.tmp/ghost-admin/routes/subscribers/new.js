define('ghost-admin/routes/subscribers/new', ['exports', 'ember-route'], function (exports, _emberRoute) {
    exports['default'] = _emberRoute['default'].extend({
        model: function model() {
            return this.get('store').createRecord('subscriber');
        },

        deactivate: function deactivate() {
            var subscriber = this.controller.get('model');

            this._super.apply(this, arguments);

            if (subscriber.get('isNew')) {
                this.rollbackModel();
            }
        },

        rollbackModel: function rollbackModel() {
            var subscriber = this.controller.get('model');
            subscriber.rollbackAttributes();
        },

        actions: {
            save: function save() {
                var _this = this;

                var subscriber = this.controller.get('model');
                return subscriber.save().then(function (saved) {
                    _this.send('addSubscriber', saved);
                    return saved;
                });
            },

            cancel: function cancel() {
                this.rollbackModel();
                this.transitionTo('subscribers');
            }
        }
    });
});