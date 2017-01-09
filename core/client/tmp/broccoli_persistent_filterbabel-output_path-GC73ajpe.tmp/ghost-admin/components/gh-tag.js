define('ghost-admin/components/gh-tag', ['exports', 'ember-component', 'ember-service/inject', 'ember-invoke-action'], function (exports, _emberComponent, _emberServiceInject, _emberInvokeAction) {
    exports['default'] = _emberComponent['default'].extend({
        feature: (0, _emberServiceInject['default'])(),

        willDestroyElement: function willDestroyElement() {
            this._super.apply(this, arguments);

            if (this.get('tag.isDeleted') && this.get('onDelete')) {
                (0, _emberInvokeAction.invokeAction)(this, 'onDelete');
            }
        }
    });
});