define('ghost-admin/components/gh-tab-pane', ['exports', 'ember-component', 'ember-computed'], function (exports, _emberComponent, _emberComputed) {

    // See gh-tabs-manager.js for use
    exports['default'] = _emberComponent['default'].extend({
        classNameBindings: ['active'],

        tabsManager: (0, _emberComputed['default'])(function () {
            return this.nearestWithProperty('isTabsManager');
        }),

        tab: (0, _emberComputed['default'])('tabsManager.tabs.[]', 'tabsManager.tabPanes.[]', function () {
            var index = this.get('tabsManager.tabPanes').indexOf(this);
            var tabs = this.get('tabsManager.tabs');

            return tabs && tabs.objectAt(index);
        }),

        active: (0, _emberComputed.alias)('tab.active'),

        willRender: function willRender() {
            this._super.apply(this, arguments);
            // Register with the tabs manager
            this.get('tabsManager').registerTabPane(this);
        },

        willDestroyElement: function willDestroyElement() {
            this._super.apply(this, arguments);
            // Deregister with the tabs manager
            this.get('tabsManager').unregisterTabPane(this);
        }
    });
});