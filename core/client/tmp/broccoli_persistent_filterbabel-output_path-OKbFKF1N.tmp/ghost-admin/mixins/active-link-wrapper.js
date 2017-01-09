define('ghost-admin/mixins/active-link-wrapper', ['exports', 'ember-metal/mixin', 'ember-runloop', 'ember-computed', 'ember-array/utils'], function (exports, _emberMetalMixin, _emberRunloop, _emberComputed, _emberArrayUtils) {
    exports['default'] = _emberMetalMixin['default'].create({

        classNameBindings: ['active'],

        childLinkViews: [],

        active: (0, _emberComputed['default'])('childLinkViews.@each.active', function () {
            return (0, _emberArrayUtils.A)(this.get('childLinkViews')).isAny('active');
        }),

        didRender: function didRender() {
            this._super.apply(this, arguments);

            _emberRunloop['default'].schedule('afterRender', this, function () {
                var _this = this;

                var childLinkElements = this.$('a.ember-view');

                var childLinkViews = childLinkElements.toArray().map(function (view) {
                    return _this._viewRegistry[view.id];
                });

                this.set('childLinkViews', childLinkViews);
            });
        }

    });
});
// logic borrowed from https://github.com/alexspeller/ember-cli-active-link-wrapper/blob/master/addon/components/active-link.js