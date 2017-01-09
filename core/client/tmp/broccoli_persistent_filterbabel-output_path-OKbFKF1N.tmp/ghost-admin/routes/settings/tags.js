define('ghost-admin/routes/settings/tags', ['exports', 'jquery', 'ghost-admin/routes/authenticated', 'ghost-admin/mixins/current-user-settings', 'ghost-admin/mixins/shortcuts-route', 'ghost-admin/mixins/pagination'], function (exports, _jquery, _ghostAdminRoutesAuthenticated, _ghostAdminMixinsCurrentUserSettings, _ghostAdminMixinsShortcutsRoute, _ghostAdminMixinsPagination) {
    exports['default'] = _ghostAdminRoutesAuthenticated['default'].extend(_ghostAdminMixinsCurrentUserSettings['default'], _ghostAdminMixinsPagination['default'], _ghostAdminMixinsShortcutsRoute['default'], {
        titleToken: 'Settings - Tags',

        paginationModel: 'tag',
        paginationSettings: {
            include: 'count.posts',
            limit: 15
        },

        shortcuts: {
            'up, k': 'moveUp',
            'down, j': 'moveDown',
            left: 'focusList',
            right: 'focusContent',
            c: 'newTag'
        },

        beforeModel: function beforeModel() {
            this._super.apply(this, arguments);

            return this.get('session.user').then(this.transitionAuthor());
        },

        model: function model(params, transition) {
            var _this = this;

            return this.loadFirstPage(transition).then(function () {
                return _this.store.filter('tag', function (tag) {
                    return !tag.get('isNew');
                });
            });
        },

        deactivate: function deactivate() {
            this._super.apply(this, arguments);
            this.send('resetShortcutsScope');
            this.send('resetPagination');
        },

        stepThroughTags: function stepThroughTags(step) {
            var currentTag = this.modelFor('settings.tags.tag');
            var tags = this.get('controller.tags');
            var length = tags.get('length');

            if (currentTag && length) {
                var newPosition = tags.indexOf(currentTag) + step;

                if (newPosition >= length) {
                    return;
                } else if (newPosition < 0) {
                    return;
                }

                this.transitionTo('settings.tags.tag', tags.objectAt(newPosition));
            }
        },

        scrollContent: function scrollContent(amount) {
            var content = (0, _jquery['default'])('.tag-settings-pane');
            var scrolled = content.scrollTop();

            content.scrollTop(scrolled + 50 * amount);
        },

        actions: {
            moveUp: function moveUp() {
                if (this.controller.get('tagContentFocused')) {
                    this.scrollContent(-1);
                } else {
                    this.stepThroughTags(-1);
                }
            },

            moveDown: function moveDown() {
                if (this.controller.get('tagContentFocused')) {
                    this.scrollContent(1);
                } else {
                    this.stepThroughTags(1);
                }
            },

            focusList: function focusList() {
                this.set('controller.keyboardFocus', 'tagList');
            },

            focusContent: function focusContent() {
                this.set('controller.keyboardFocus', 'tagContent');
            },

            newTag: function newTag() {
                this.transitionTo('settings.tags.new');
            },

            resetShortcutsScope: function resetShortcutsScope() {
                key.setScope('default');
            }
        }
    });
});
/* global key */