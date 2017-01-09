define('ghost-admin/controllers/settings/navigation', ['exports', 'rsvp', 'ember-controller', 'ember-computed', 'ember-service/inject', 'ghost-admin/mixins/settings-save', 'ghost-admin/models/navigation-item'], function (exports, _rsvp, _emberController, _emberComputed, _emberServiceInject, _ghostAdminMixinsSettingsSave, _ghostAdminModelsNavigationItem) {
    exports['default'] = _emberController['default'].extend(_ghostAdminMixinsSettingsSave['default'], {
        config: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),

        newNavItem: null,

        blogUrl: (0, _emberComputed['default'])('config.blogUrl', function () {
            var url = this.get('config.blogUrl');

            return url.slice(-1) !== '/' ? url + '/' : url;
        }),

        init: function init() {
            this._super.apply(this, arguments);
            this.set('newNavItem', _ghostAdminModelsNavigationItem['default'].create({ isNew: true }));
        },

        save: function save() {
            var _this = this;

            var navItems = this.get('model.navigation');
            var newNavItem = this.get('newNavItem');
            var notifications = this.get('notifications');
            var validationPromises = [];

            if (!newNavItem.get('isBlank')) {
                validationPromises.pushObject(this.send('addItem'));
            }

            navItems.map(function (item) {
                validationPromises.pushObject(item.validate());
            });

            return _rsvp['default'].all(validationPromises).then(function () {
                return _this.get('model').save()['catch'](function (err) {
                    notifications.showAPIError(err);
                });
            })['catch'](function () {
                // TODO: noop - needed to satisfy spinner button
            });
        },

        addNewNavItem: function addNewNavItem() {
            var navItems = this.get('model.navigation');
            var newNavItem = this.get('newNavItem');

            newNavItem.set('isNew', false);
            navItems.pushObject(newNavItem);
            this.set('newNavItem', _ghostAdminModelsNavigationItem['default'].create({ isNew: true }));
        },

        actions: {
            addItem: function addItem() {
                var _this2 = this;

                var newNavItem = this.get('newNavItem');

                // If the url sent through is blank (user never edited the url)
                if (newNavItem.get('url') === '') {
                    newNavItem.set('url', '/');
                }

                return newNavItem.validate().then(function () {
                    _this2.addNewNavItem();
                });
            },

            deleteItem: function deleteItem(item) {
                if (!item) {
                    return;
                }

                var navItems = this.get('model.navigation');

                navItems.removeObject(item);
            },

            reorderItems: function reorderItems(navItems) {
                this.set('model.navigation', navItems);
            },

            updateUrl: function updateUrl(url, navItem) {
                if (!navItem) {
                    return;
                }

                navItem.set('url', url);
            },

            reset: function reset() {
                this.set('newNavItem', _ghostAdminModelsNavigationItem['default'].create({ isNew: true }));
            }
        }
    });
});