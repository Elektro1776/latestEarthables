define('ghost-admin/mixins/dropdown-mixin', ['exports', 'ember-metal/mixin', 'ember-evented'], function (exports, _emberMetalMixin, _emberEvented) {

    /*
      Dropdowns and their buttons are evented and do not propagate clicks.
    */
    exports['default'] = _emberMetalMixin['default'].create(_emberEvented['default'], {
        classNameBindings: ['isOpen:open:closed'],
        isOpen: false,

        click: function click(event) {
            this._super(event);

            return event.stopPropagation();
        }
    });
});