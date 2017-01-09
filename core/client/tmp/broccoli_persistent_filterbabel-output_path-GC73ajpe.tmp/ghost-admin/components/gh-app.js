define('ghost-admin/components/gh-app', ['exports', 'jquery', 'ember-component', 'ember-metal/observer'], function (exports, _jquery, _emberComponent, _emberMetalObserver) {
    exports['default'] = _emberComponent['default'].extend({
        classNames: ['gh-app'],

        showSettingsMenu: false,

        toggleSettingsMenuBodyClass: (0, _emberMetalObserver['default'])('showSettingsMenu', function () {
            var showSettingsMenu = this.get('showSettingsMenu');

            (0, _jquery['default'])('body').toggleClass('settings-menu-expanded', showSettingsMenu);
        })
    });
});