define('ghost-admin/components/gh-navitem', ['exports', 'ember-component', 'ember-computed', 'ember-runloop', 'ghost-admin/mixins/validation-state', 'ember-sortable/mixins/sortable-item'], function (exports, _emberComponent, _emberComputed, _emberRunloop, _ghostAdminMixinsValidationState, _emberSortableMixinsSortableItem) {
    exports['default'] = _emberComponent['default'].extend(_ghostAdminMixinsValidationState['default'], _emberSortableMixinsSortableItem['default'], {
        classNames: 'gh-blognav-item',
        classNameBindings: ['errorClass', 'navItem.isNew::gh-blognav-item--sortable'],

        'new': false,
        handle: '.gh-blognav-grab',

        model: (0, _emberComputed.alias)('navItem'),
        errors: (0, _emberComputed.readOnly)('navItem.errors'),

        errorClass: (0, _emberComputed['default'])('hasError', function () {
            if (this.get('hasError')) {
                return 'gh-blognav-item--error';
            }
        }),

        keyPress: function keyPress(event) {
            // enter key
            if (event.keyCode === 13 && this.get('navItem.isNew')) {
                event.preventDefault();
                _emberRunloop['default'].scheduleOnce('actions', this, function () {
                    this.send('addItem');
                });
            }
        },

        actions: {
            addItem: function addItem() {
                this.sendAction('addItem');
            },

            deleteItem: function deleteItem(item) {
                this.sendAction('deleteItem', item);
            },

            updateUrl: function updateUrl(value) {
                this.sendAction('updateUrl', value, this.get('navItem'));
            },

            clearLabelErrors: function clearLabelErrors() {
                this.get('navItem.errors').remove('label');
            },

            clearUrlErrors: function clearUrlErrors() {
                this.get('navItem.errors').remove('url');
            }
        }
    });
});