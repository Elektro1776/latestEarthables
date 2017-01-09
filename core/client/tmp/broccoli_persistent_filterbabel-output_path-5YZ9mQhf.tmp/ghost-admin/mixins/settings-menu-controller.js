define('ghost-admin/mixins/settings-menu-controller', ['exports', 'ember-metal/mixin', 'ember-computed', 'ember-controller/inject'], function (exports, _emberMetalMixin, _emberComputed, _emberControllerInject) {
    exports['default'] = _emberMetalMixin['default'].create({
        application: (0, _emberControllerInject['default'])(),

        isViewingSubview: (0, _emberComputed['default'])('application.showSettingsMenu', {
            get: function get() {
                return false;
            },
            set: function set(key, value) {
                // Not viewing a subview if we can't even see the PSM
                if (!this.get('application.showSettingsMenu')) {
                    return false;
                }
                return value;
            }
        }),

        actions: {
            showSubview: function showSubview() {
                this.set('isViewingSubview', true);
            },

            closeSubview: function closeSubview() {
                this.set('isViewingSubview', false);
            }
        }
    });
});