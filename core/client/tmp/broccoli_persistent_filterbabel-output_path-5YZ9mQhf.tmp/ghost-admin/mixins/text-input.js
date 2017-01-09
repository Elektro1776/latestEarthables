define('ghost-admin/mixins/text-input', ['exports', 'ember-metal/mixin'], function (exports, _emberMetalMixin) {
    exports['default'] = _emberMetalMixin['default'].create({
        selectOnClick: false,
        stopEnterKeyDownPropagation: false,

        click: function click(event) {
            if (this.get('selectOnClick')) {
                event.currentTarget.select();
            }
        },

        keyDown: function keyDown(event) {
            // stop event propagation when pressing "enter"
            // most useful in the case when undesired (global) keyboard shortcuts are getting triggered while interacting
            // with this particular input element.
            if (this.get('stopEnterKeyDownPropagation') && event.keyCode === 13) {
                event.stopPropagation();

                return true;
            }
        }
    });
});