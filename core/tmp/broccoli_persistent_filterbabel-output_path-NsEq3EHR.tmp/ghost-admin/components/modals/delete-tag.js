define('ghost-admin/components/modals/delete-tag', ['exports', 'ember-computed', 'ghost-admin/components/modals/base', 'ember-invoke-action'], function (exports, _emberComputed, _ghostAdminComponentsModalsBase, _emberInvokeAction) {
    exports['default'] = _ghostAdminComponentsModalsBase['default'].extend({

        submitting: false,

        tag: (0, _emberComputed.alias)('model'),

        postInflection: (0, _emberComputed['default'])('tag.count.posts', function () {
            return this.get('tag.count.posts') > 1 ? 'posts' : 'post';
        }),

        actions: {
            confirm: function confirm() {
                var _this = this;

                this.set('submitting', true);

                (0, _emberInvokeAction.invokeAction)(this, 'confirm')['finally'](function () {
                    _this.send('closeModal');
                });
            }
        }
    });
});