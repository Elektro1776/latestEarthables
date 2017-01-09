define('ghost-admin/mixins/body-event-listener', ['exports', 'jquery', 'ember-runloop', 'ember-metal/mixin'], function (exports, _jquery, _emberRunloop, _emberMetalMixin) {

    function K() {
        return this;
    }

    // Code modified from Addepar/ember-widgets
    // https://github.com/Addepar/ember-widgets/blob/master/src/mixins.coffee#L39

    exports['default'] = _emberMetalMixin['default'].create({
        bodyElementSelector: 'html',
        bodyClick: K,

        init: function init() {
            this._super.apply(this, arguments);

            return _emberRunloop['default'].next(this, this._setupDocumentHandlers);
        },

        willDestroy: function willDestroy() {
            this._super.apply(this, arguments);

            return this._removeDocumentHandlers();
        },

        _setupDocumentHandlers: function _setupDocumentHandlers() {
            var _this = this;

            if (this._clickHandler) {
                return;
            }

            this._clickHandler = function () {
                return _this.bodyClick();
            };

            return (0, _jquery['default'])(this.get('bodyElementSelector')).on('click', this._clickHandler);
        },

        _removeDocumentHandlers: function _removeDocumentHandlers() {
            (0, _jquery['default'])(this.get('bodyElementSelector')).off('click', this._clickHandler);
            this._clickHandler = null;
        },

        // http://stackoverflow.com/questions/152975/how-to-detect-a-click-outside-an-element
        click: function click(event) {
            return event.stopPropagation();
        }
    });
});