define('ghost-admin/components/gh-tab', ['exports', 'ember-component', 'ember-computed'], function (exports, _emberComponent, _emberComputed) {

    // See gh-tabs-manager.js for use
    exports['default'] = _emberComponent['default'].extend({
        tabsManager: (0, _emberComputed['default'])(function () {
            return this.nearestWithProperty('isTabsManager');
        }),

        active: (0, _emberComputed['default'])('tabsManager.activeTab', function () {
            return this.get('tabsManager.activeTab') === this;
        }),

        index: (0, _emberComputed['default'])('tabsManager.tabs.[]', function () {
            return this.get('tabsManager.tabs').indexOf(this);
        }),

        // Select on click
        click: function click() {
            this.get('tabsManager').select(this);
        },

        willRender: function willRender() {
            this._super.apply(this, arguments);
            // register the tabs with the tab manager
            this.get('tabsManager').registerTab(this);
        },

        willDestroyElement: function willDestroyElement() {
            this._super.apply(this, arguments);
            // unregister the tabs with the tab manager
            this.get('tabsManager').unregisterTab(this);
        }
    });
});