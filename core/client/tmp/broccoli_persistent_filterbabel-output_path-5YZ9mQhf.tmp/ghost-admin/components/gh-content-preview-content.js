define('ghost-admin/components/gh-content-preview-content', ['exports', 'ember-component'], function (exports, _emberComponent) {
    exports['default'] = _emberComponent['default'].extend({
        classNames: ['content-preview-content'],

        content: null,

        didReceiveAttrs: function didReceiveAttrs(options) {
            this._super.apply(this, arguments);

            // adjust when didReceiveAttrs gets both newAttrs and oldAttrs
            if (options.newAttrs.content && this.get('content') !== options.newAttrs.content.value) {
                var el = this.$();

                if (el) {
                    el.closest('.content-preview').scrollTop(0);
                }
            }
        }
    });
});