define('ghost-admin/components/gh-nav-menu', ['exports', 'ember-component', 'ember-string', 'ember-service/inject', 'ember-computed'], function (exports, _emberComponent, _emberString, _emberServiceInject, _emberComputed) {
    exports['default'] = _emberComponent['default'].extend({
        tagName: 'nav',
        classNames: ['gh-nav'],
        classNameBindings: ['open'],

        open: false,

        navMenuIcon: (0, _emberComputed['default'])('ghostPaths.subdir', function () {
            var url = this.get('ghostPaths.subdir') + '/ghost/img/ghosticon.jpg';

            return (0, _emberString.htmlSafe)('background-image: url(' + url + ')');
        }),

        config: (0, _emberServiceInject['default'])(),
        session: (0, _emberServiceInject['default'])(),
        ghostPaths: (0, _emberServiceInject['default'])(),
        feature: (0, _emberServiceInject['default'])(),

        mouseEnter: function mouseEnter() {
            this.sendAction('onMouseEnter');
        },

        actions: {
            toggleAutoNav: function toggleAutoNav() {
                this.sendAction('toggleMaximise');
            },

            showMarkdownHelp: function showMarkdownHelp() {
                this.sendAction('showMarkdownHelp');
            },

            closeMobileMenu: function closeMobileMenu() {
                this.sendAction('closeMobileMenu');
            },

            openAutoNav: function openAutoNav() {
                this.sendAction('openAutoNav');
            }
        }
    });
});