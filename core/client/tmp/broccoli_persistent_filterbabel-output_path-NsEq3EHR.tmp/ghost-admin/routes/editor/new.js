define('ghost-admin/routes/editor/new', ['exports', 'ghost-admin/routes/authenticated', 'ghost-admin/mixins/editor-base-route'], function (exports, _ghostAdminRoutesAuthenticated, _ghostAdminMixinsEditorBaseRoute) {
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend(_ghostAdminMixinsEditorBaseRoute['default'], {
        titleToken: 'Editor',

        model: function model() {
            var _this = this;

            return this.get('session.user').then(function (user) {
                return _this.store.createRecord('post', {
                    author: user
                });
            });
        },

        renderTemplate: function renderTemplate(controller, model) {
            this.render('editor/edit', {
                controller: controller,
                model: model
            });

            this.render('post-settings-menu', {
                model: model,
                into: 'application',
                outlet: 'settings-menu'
            });
        },

        setupController: function setupController() {
            var psm = this.controllerFor('post-settings-menu');

            // make sure there are no titleObserver functions hanging around
            // from previous posts
            psm.removeObserver('titleScratch', psm, 'titleObserver');

            // Ensure that the PSM Publish Date selector resets
            psm.send('resetPubDate');

            this._super.apply(this, arguments);
        },

        actions: {
            willTransition: function willTransition(transition) {
                // decorate the transition object so the editor.edit route
                // knows this was the previous active route
                transition.data.fromNew = true;

                this._super.apply(this, arguments);
            }
        }
    });
});