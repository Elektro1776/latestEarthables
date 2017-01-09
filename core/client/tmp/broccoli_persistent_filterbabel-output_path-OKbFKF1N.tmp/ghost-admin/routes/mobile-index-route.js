define('ghost-admin/routes/mobile-index-route', ['exports', 'ember-route', 'ember-metal/observer', 'ember-service/inject'], function (exports, _emberRoute, _emberMetalObserver, _emberServiceInject) {

    function K() {
        return this;
    }

    // Routes that extend MobileIndexRoute need to implement
    // desktopTransition, a function which is called when
    // the user resizes to desktop levels.
    exports['default'] = _emberRoute['default'].extend({
        desktopTransition: K,
        _callDesktopTransition: null,

        mediaQueries: (0, _emberServiceInject['default'])(),

        activate: function activate() {
            var _this = this;

            this._super.apply(this, arguments);
            this._callDesktopTransition = function () {
                if (!_this.get('mediaQueries.isMobile')) {
                    _this.desktopTransition();
                }
            };
            (0, _emberMetalObserver.addObserver)(this, 'mediaQueries.isMobile', this._callDesktopTransition);
        },

        deactivate: function deactivate() {
            this._super.apply(this, arguments);
            if (this._callDesktopTransition) {
                (0, _emberMetalObserver.removeObserver)(this, 'mediaQueries.isMobile', this._callDesktopTransition);
                this._callDesktopTransition = null;
            }
        }
    });
});