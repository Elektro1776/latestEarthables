define('ghost-admin/components/gh-menu-toggle', ['exports', 'ember-component', 'ember-computed', 'ember-service/inject'], function (exports, _emberComponent, _emberComputed, _emberServiceInject) {

    /*
        This cute little component has two jobs.
    
        On desktop, it toggles autoNav behaviour. It tracks
        that state via the maximise property, and uses the
        state to render the appropriate icon.
    
        On mobile, it renders a closing icon, and clicking it
        closes the mobile menu
    */
    exports['default'] = _emberComponent['default'].extend({
        classNames: ['gh-menu-toggle'],

        mediaQueries: (0, _emberServiceInject['default'])(),
        isMobile: (0, _emberComputed.reads)('mediaQueries.isMobile'),
        maximise: false,

        iconClass: (0, _emberComputed['default'])('maximise', 'isMobile', function () {
            if (this.get('maximise') && !this.get('isMobile')) {
                return 'icon-maximise';
            } else {
                return 'icon-minimise';
            }
        }),

        click: function click() {
            if (this.get('isMobile')) {
                this.sendAction('mobileAction');
            } else {
                this.toggleProperty('maximise');
                this.sendAction('desktopAction');
            }
        }
    });
});