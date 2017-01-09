define('ghost-admin/components/gh-search-input', ['exports', 'ember-component', 'rsvp', 'ember-computed', 'ember-runloop', 'ember-service/inject', 'ember-utils'], function (exports, _emberComponent, _rsvp, _emberComputed, _emberRunloop, _emberServiceInject, _emberUtils) {
    exports.computedGroup = computedGroup;

    function computedGroup(category) {
        return (0, _emberComputed['default'])('content', 'currentSearch', function () {
            var _this = this;

            if (!this.get('currentSearch') || !this.get('content')) {
                return [];
            }

            return this.get('content').filter(function (item) {
                var search = new RegExp(_this.get('currentSearch'), 'ig');

                return item.category === category && item.title.match(search);
            });
        });
    }

    exports['default'] = _emberComponent['default'].extend({

        selection: null,
        content: [],
        isLoading: false,
        contentExpiry: 10 * 1000,
        contentExpiresAt: false,
        currentSearch: '',

        posts: computedGroup('Posts'),
        pages: computedGroup('Pages'),
        users: computedGroup('Users'),
        tags: computedGroup('Tags'),

        _store: (0, _emberServiceInject['default'])('store'),
        _routing: (0, _emberServiceInject['default'])('-routing'),
        ajax: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),

        refreshContent: function refreshContent() {
            var _this2 = this;

            var promises = [];
            var now = new Date();
            var contentExpiry = this.get('contentExpiry');
            var contentExpiresAt = this.get('contentExpiresAt');

            if (this.get('isLoading') || contentExpiresAt > now) {
                return _rsvp['default'].resolve();
            }

            this.set('isLoading', true);
            this.set('content', []);
            promises.pushObject(this._loadPosts());
            promises.pushObject(this._loadUsers());
            promises.pushObject(this._loadTags());

            return _rsvp['default'].all(promises).then(function () {})['finally'](function () {
                _this2.set('isLoading', false);
                _this2.set('contentExpiresAt', new Date(now.getTime() + contentExpiry));
            });
        },

        groupedContent: (0, _emberComputed['default'])('posts', 'pages', 'users', 'tags', function () {
            var groups = [];

            if (!(0, _emberUtils.isEmpty)(this.get('posts'))) {
                groups.pushObject({ groupName: 'Posts', options: this.get('posts') });
            }

            if (!(0, _emberUtils.isEmpty)(this.get('pages'))) {
                groups.pushObject({ groupName: 'Pages', options: this.get('pages') });
            }

            if (!(0, _emberUtils.isEmpty)(this.get('users'))) {
                groups.pushObject({ groupName: 'Users', options: this.get('users') });
            }

            if (!(0, _emberUtils.isEmpty)(this.get('tags'))) {
                groups.pushObject({ groupName: 'Tags', options: this.get('tags') });
            }

            return groups;
        }),

        _loadPosts: function _loadPosts() {
            var _this3 = this;

            var store = this.get('_store');
            var postsUrl = store.adapterFor('post').urlForQuery({}, 'post') + '/';
            var postsQuery = { fields: 'id,title,page', limit: 'all', status: 'all', staticPages: 'all' };
            var content = this.get('content');

            return this.get('ajax').request(postsUrl, { data: postsQuery }).then(function (posts) {
                content.pushObjects(posts.posts.map(function (post) {
                    return {
                        id: 'post.' + post.id,
                        title: post.title,
                        category: post.page ? 'Pages' : 'Posts'
                    };
                }));
            })['catch'](function (error) {
                _this3.get('notifications').showAPIError(error, { key: 'search.loadPosts.error' });
            });
        },

        _loadUsers: function _loadUsers() {
            var _this4 = this;

            var store = this.get('_store');
            var usersUrl = store.adapterFor('user').urlForQuery({}, 'user') + '/';
            var usersQuery = { fields: 'name,slug', limit: 'all' };
            var content = this.get('content');

            return this.get('ajax').request(usersUrl, { data: usersQuery }).then(function (users) {
                content.pushObjects(users.users.map(function (user) {
                    return {
                        id: 'user.' + user.slug,
                        title: user.name,
                        category: 'Users'
                    };
                }));
            })['catch'](function (error) {
                _this4.get('notifications').showAPIError(error, { key: 'search.loadUsers.error' });
            });
        },

        _loadTags: function _loadTags() {
            var _this5 = this;

            var store = this.get('_store');
            var tagsUrl = store.adapterFor('tag').urlForQuery({}, 'tag') + '/';
            var tagsQuery = { fields: 'name,slug', limit: 'all' };
            var content = this.get('content');

            return this.get('ajax').request(tagsUrl, { data: tagsQuery }).then(function (tags) {
                content.pushObjects(tags.tags.map(function (tag) {
                    return {
                        id: 'tag.' + tag.slug,
                        title: tag.name,
                        category: 'Tags'
                    };
                }));
            })['catch'](function (error) {
                _this5.get('notifications').showAPIError(error, { key: 'search.loadTags.error' });
            });
        },

        _performSearch: function _performSearch(term, resolve, reject) {
            var _this6 = this;

            if ((0, _emberUtils.isBlank)(term)) {
                return resolve([]);
            }

            this.refreshContent().then(function () {
                _this6.set('currentSearch', term);

                return resolve(_this6.get('groupedContent'));
            })['catch'](reject);
        },

        _setKeymasterScope: function _setKeymasterScope() {
            key.setScope('search-input');
        },

        _resetKeymasterScope: function _resetKeymasterScope() {
            key.setScope('default');
        },

        willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            this._resetKeymasterScope();
        },

        actions: {
            openSelected: function openSelected(selected) {
                if (!selected) {
                    return;
                }

                if (selected.category === 'Posts' || selected.category === 'Pages') {
                    var id = selected.id.replace('post.', '');
                    this.get('_routing.router').transitionTo('editor.edit', id);
                }

                if (selected.category === 'Users') {
                    var id = selected.id.replace('user.', '');
                    this.get('_routing.router').transitionTo('team.user', id);
                }

                if (selected.category === 'Tags') {
                    var id = selected.id.replace('tag.', '');
                    this.get('_routing.router').transitionTo('settings.tags.tag', id);
                }
            },

            onFocus: function onFocus() {
                this._setKeymasterScope();
            },

            onBlur: function onBlur() {
                this._resetKeymasterScope();
            },

            search: function search(term) {
                var _this7 = this;

                return new _rsvp['default'].Promise(function (resolve, reject) {
                    _emberRunloop['default'].debounce(_this7, _this7._performSearch, term, resolve, reject, 200);
                });
            }
        }

    });
});
/* global key */
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */