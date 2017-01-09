define('ghost-admin/components/gh-main', ['exports', 'ember-component'], function (exports, _emberComponent) {
    exports['default'] = _emberComponent['default'].extend({
        tagName: 'main',
        classNames: ['gh-main'],
        ariaRole: 'main',

        mouseEnter: function mouseEnter() {
            this.sendAction('onMouseEnter');
        }
    });
});