define('ghost-admin/controllers/application', ['exports', 'ember-controller', 'ember-computed', 'ember-service/inject'], function (exports, _emberController, _emberComputed, _emberServiceInject) {
    exports['default'] = _emberController['default'].extend({
        dropdown: (0, _emberServiceInject['default'])(),
        session: (0, _emberServiceInject['default'])(),

        showNavMenu: (0, _emberComputed['default'])('currentPath', 'session.isAuthenticated', function () {
            return (this.get('currentPath') !== 'error404' || this.get('session.isAuthenticated')) && !this.get('currentPath').match(/(signin|signup|setup|reset)/);
        }),

        topNotificationCount: 0,
        showMobileMenu: false,
        showSettingsMenu: false,
        showMarkdownHelpModal: false,

        autoNav: false,
        autoNavOpen: (0, _emberComputed['default'])('autoNav', {
            get: function get() {
                return false;
            },
            set: function set(key, value) {
                if (this.get('autoNav')) {
                    return value;
                }
                return false;
            }
        }),

        actions: {
            topNotificationChange: function topNotificationChange(count) {
                this.set('topNotificationCount', count);
            },

            toggleAutoNav: function toggleAutoNav() {
                this.toggleProperty('autoNav');
            },

            openAutoNav: function openAutoNav() {
                this.set('autoNavOpen', true);
            },

            closeAutoNav: function closeAutoNav() {
                this.set('autoNavOpen', false);
            },

            closeMobileMenu: function closeMobileMenu() {
                this.set('showMobileMenu', false);
            }
        }
    });
});