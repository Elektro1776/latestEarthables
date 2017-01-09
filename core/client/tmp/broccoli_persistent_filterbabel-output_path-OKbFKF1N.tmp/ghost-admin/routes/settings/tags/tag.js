define('ghost-admin/routes/settings/tags/tag', ['exports', 'ghost-admin/routes/authenticated'], function (exports, _ghostAdminRoutesAuthenticated) {
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend({

        model: function model(params) {
            return this.store.queryRecord('tag', { slug: params.tag_slug });
        },

        serialize: function serialize(model) {
            return { tag_slug: model.get('slug') };
        },

        // reset the model so that mobile screens react to an empty selectedTag
        deactivate: function deactivate() {
            this._super.apply(this, arguments);
            this.set('controller.model', null);
        }
    });
});
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */