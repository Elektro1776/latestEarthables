define('ghost-admin/components/gh-content-cover', ['exports', 'ember-component'], function (exports, _emberComponent) {
    exports['default'] = _emberComponent['default'].extend({
        classNames: ['content-cover'],

        onClick: null,
        onMouseEnter: null,

        click: function click() {
            this.sendAction('onClick');
        },

        mouseEnter: function mouseEnter() {
            this.sendAction('onMouseEnter');
        }
    });
});
/*

Implements a div for covering the page content
when in a menu context that, for example,
should be closed when the user clicks elsewhere.

Example:
```
{{gh-content-cover onClick="closeMenus" onMouseEnter="closeAutoNav"}}
```
**/