define('ghost-admin/mixins/style-body', ['exports', 'jquery', 'ember-metal/mixin', 'ember-runloop'], function (exports, _jquery, _emberMetalMixin, _emberRunloop) {

    // mixin used for routes that need to set a css className on the body tag
    exports['default'] = _emberMetalMixin['default'].create({
        activate: function activate() {
            var cssClasses = this.get('classNames');

            this._super.apply(this, arguments);

            if (cssClasses) {
                _emberRunloop['default'].schedule('afterRender', null, function () {
                    cssClasses.forEach(function (curClass) {
                        (0, _jquery['default'])('body').addClass(curClass);
                    });
                });
            }
        },

        deactivate: function deactivate() {
            var cssClasses = this.get('classNames');

            this._super.apply(this, arguments);

            _emberRunloop['default'].schedule('afterRender', null, function () {
                cssClasses.forEach(function (curClass) {
                    (0, _jquery['default'])('body').removeClass(curClass);
                });
            });
        }
    });
});