define('ghost-admin/mixins/slug-url', ['exports', 'ember-metal/mixin', 'ember-utils'], function (exports, _emberMetalMixin, _emberUtils) {
    exports['default'] = _emberMetalMixin['default'].create({
        buildURL: function buildURL(_modelName, _id, _snapshot, _requestType, query) {
            var url = this._super.apply(this, arguments);

            if (query && !(0, _emberUtils.isBlank)(query.slug)) {
                url += 'slug/' + query.slug + '/';
                delete query.slug;
            }

            return url;
        }
    });
});