define('ghost-admin/mixins/pagination', ['exports', 'ember-metal/mixin', 'ember-platform', 'ember-computed', 'rsvp', 'ember-service/inject'], function (exports, _emberMetalMixin, _emberPlatform, _emberComputed, _rsvp, _emberServiceInject) {

    var defaultPaginationSettings = {
        page: 1,
        limit: 15
    };

    exports['default'] = _emberMetalMixin['default'].create({
        notifications: (0, _emberServiceInject['default'])(),

        paginationModel: null,
        paginationSettings: null,

        // add a hook so that routes/controllers can do something with the meta data
        paginationMeta: (0, _emberComputed['default'])({
            get: function get() {
                return this._paginationMeta;
            },
            set: function set(key, value) {
                if (this.didReceivePaginationMeta) {
                    this.didReceivePaginationMeta(value);
                }
                this._paginationMeta = value;
                return value;
            }
        }),

        init: function init() {
            var paginationSettings = this.get('paginationSettings');
            var settings = (0, _emberPlatform.assign)({}, defaultPaginationSettings, paginationSettings);

            this._super.apply(this, arguments);
            this.set('paginationSettings', settings);
            this.set('paginationMeta', {});
        },

        reportLoadError: function reportLoadError(error) {
            this.get('notifications').showAPIError(error, { key: 'pagination.load.failed' });
        },

        loadFirstPage: function loadFirstPage(transition) {
            var _this = this;

            var paginationSettings = this.get('paginationSettings');
            var modelName = this.get('paginationModel');

            this.set('paginationSettings.page', 1);

            this.set('isLoading', true);

            return this.get('store').query(modelName, paginationSettings).then(function (results) {
                _this.set('paginationMeta', results.meta);
                return results;
            })['catch'](function (error) {
                // if we have a transition we're executing in a route hook so we
                // want to throw in order to trigger the global error handler
                if (transition) {
                    throw error;
                } else {
                    _this.reportLoadError(error);
                }
            })['finally'](function () {
                _this.set('isLoading', false);
            });
        },

        actions: {
            loadFirstPage: function loadFirstPage() {
                return this.loadFirstPage();
            },

            /**
             * Loads the next paginated page of posts into the ember-data store. Will cause the posts list UI to update.
             * @return
             */
            loadNextPage: function loadNextPage() {
                var _this2 = this;

                var store = this.get('store');
                var modelName = this.get('paginationModel');
                var metadata = this.get('paginationMeta');
                var nextPage = metadata.pagination && metadata.pagination.next;
                var paginationSettings = this.get('paginationSettings');

                if (nextPage && !this.get('isLoading')) {
                    this.set('isLoading', true);
                    this.set('paginationSettings.page', nextPage);

                    return store.query(modelName, paginationSettings).then(function (results) {
                        _this2.set('paginationMeta', results.meta);
                        return results;
                    })['catch'](function (error) {
                        _this2.reportLoadError(error);
                    })['finally'](function () {
                        _this2.set('isLoading', false);
                    });
                } else {
                    return _rsvp['default'].resolve([]);
                }
            },

            resetPagination: function resetPagination() {
                this.set('paginationSettings.page', 1);
            }
        }
    });
});