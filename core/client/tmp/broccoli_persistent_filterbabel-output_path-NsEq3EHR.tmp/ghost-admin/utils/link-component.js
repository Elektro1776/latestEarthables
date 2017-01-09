define('ghost-admin/utils/link-component', ['exports', 'ember', 'ember-computed', 'ember-invoke-action'], function (exports, _ember, _emberComputed, _emberInvokeAction) {
    var LinkComponent = _ember['default'].LinkComponent;

    LinkComponent.reopen({
        active: (0, _emberComputed['default'])('attrs.params', '_routing.currentState', function () {
            var isActive = this._super.apply(this, arguments);

            if (typeof this.get('alternateActive') === 'function') {
                (0, _emberInvokeAction.invokeAction)(this, 'alternateActive', isActive);
            }

            return isActive;
        }),

        activeClass: (0, _emberComputed['default'])('tagName', function () {
            return this.get('tagName') === 'button' ? '' : 'active';
        })
    });
});