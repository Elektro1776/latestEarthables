define('ghost-admin/components/gh-select-native', ['exports', 'ember-component', 'ember-computed'], function (exports, _emberComponent, _emberComputed) {

    function K() {
        return this;
    }

    exports['default'] = _emberComponent['default'].extend({
        content: null,
        prompt: null,
        optionValuePath: 'id',
        optionLabelPath: 'title',
        selection: null,
        action: K, // action to fire on change

        // shadow the passed-in `selection` to avoid
        // leaking changes to it via a 2-way binding
        _selection: (0, _emberComputed.reads)('selection'),

        actions: {
            change: function change() {
                // jscs:disable requireArrayDestructuring
                var selectEl = this.$('select')[0];
                // jscs:enable requireArrayDestructuring
                var selectedIndex = selectEl.selectedIndex;

                // decrement index by 1 if we have a prompt
                var hasPrompt = !!this.get('prompt');
                var contentIndex = hasPrompt ? selectedIndex - 1 : selectedIndex;

                var selection = this.get('content').objectAt(contentIndex);

                // set the local, shadowed selection to avoid leaking
                // changes to `selection` out via 2-way binding
                this.set('_selection', selection);

                this.sendAction('action', selection);
            }
        }
    });
});