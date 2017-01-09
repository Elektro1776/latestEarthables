define('ghost-admin/mixins/settings-save', ['exports', 'ember-metal/mixin'], function (exports, _emberMetalMixin) {
    exports['default'] = _emberMetalMixin['default'].create({
        submitting: false,

        actions: {
            save: function save() {
                var _this = this;

                this.set('submitting', true);

                this.save()['finally'](function () {
                    _this.set('submitting', false);
                });
            }
        }
    });
});