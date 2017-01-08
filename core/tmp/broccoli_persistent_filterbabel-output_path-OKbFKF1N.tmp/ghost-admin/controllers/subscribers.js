define('ghost-admin/controllers/subscribers', ['exports', 'jquery', 'ember-platform', 'ember-computed', 'ember-service/inject', 'ember-controller', 'ember-light-table', 'ghost-admin/mixins/pagination', 'ghost-admin/utils/ghost-paths'], function (exports, _jquery, _emberPlatform, _emberComputed, _emberServiceInject, _emberController, _emberLightTable, _ghostAdminMixinsPagination, _ghostAdminUtilsGhostPaths) {
    exports['default'] = _emberController['default'].extend(_ghostAdminMixinsPagination['default'], {

        queryParams: ['order', 'direction'],
        order: 'created_at',
        direction: 'desc',

        paginationModel: 'subscriber',

        total: 0,
        table: null,
        subscriberToDelete: null,

        session: (0, _emberServiceInject['default'])(),

        // paginationSettings is replaced by the pagination mixin so we need a
        // getter/setter CP here so that we don't lose the dynamic order param
        paginationSettings: (0, _emberComputed['default'])('order', 'direction', {
            get: function get() {
                var order = this.get('order');
                var direction = this.get('direction');

                var currentSettings = this._paginationSettings || {
                    limit: 30
                };

                return (0, _emberPlatform.assign)({}, currentSettings, {
                    order: order + ' ' + direction
                });
            },
            set: function set(key, value) {
                this._paginationSettings = value;
                return value;
            }
        }),

        columns: (0, _emberComputed['default'])('order', 'direction', function () {
            var order = this.get('order');
            var direction = this.get('direction');

            return [{
                label: 'Subscriber',
                valuePath: 'email',
                sorted: order === 'email',
                ascending: direction === 'asc'
            }, {
                label: 'Subscription Date',
                valuePath: 'createdAtUTC',
                format: function format(value) {
                    return value.format('MMMM DD, YYYY');
                },
                sorted: order === 'created_at',
                ascending: direction === 'asc'
            }, {
                label: 'Status',
                valuePath: 'status',
                sorted: order === 'status',
                ascending: direction === 'asc'
            }, {
                label: '',
                sortable: false,
                cellComponent: 'gh-subscribers-table-delete-cell',
                align: 'right'
            }];
        }),

        initializeTable: function initializeTable() {
            this.set('table', new _emberLightTable['default'](this.get('columns'), this.get('subscribers')));
        },

        // capture the total from the server any time we fetch a new page
        didReceivePaginationMeta: function didReceivePaginationMeta(meta) {
            if (meta && meta.pagination) {
                this.set('total', meta.pagination.total);
            }
        },

        actions: {
            loadFirstPage: function loadFirstPage() {
                var table = this.get('table');

                return this._super.apply(this, arguments).then(function (results) {
                    table.addRows(results);
                    return results;
                });
            },

            loadNextPage: function loadNextPage() {
                var table = this.get('table');

                return this._super.apply(this, arguments).then(function (results) {
                    table.addRows(results);
                    return results;
                });
            },

            sortByColumn: function sortByColumn(column) {
                var table = this.get('table');

                if (column.sorted) {
                    this.setProperties({
                        order: column.get('valuePath').trim().replace(/UTC$/, '').underscore(),
                        direction: column.ascending ? 'asc' : 'desc'
                    });
                    table.setRows([]);
                    this.send('loadFirstPage');
                }
            },

            addSubscriber: function addSubscriber(subscriber) {
                this.get('table').insertRowAt(0, subscriber);
                this.incrementProperty('total');
            },

            deleteSubscriber: function deleteSubscriber(subscriber) {
                this.set('subscriberToDelete', subscriber);
            },

            confirmDeleteSubscriber: function confirmDeleteSubscriber() {
                var _this = this;

                var subscriber = this.get('subscriberToDelete');

                return subscriber.destroyRecord().then(function () {
                    _this.set('subscriberToDelete', null);
                    _this.get('table').removeRow(subscriber);
                    _this.decrementProperty('total');
                });
            },

            cancelDeleteSubscriber: function cancelDeleteSubscriber() {
                this.set('subscriberToDelete', null);
            },

            reset: function reset() {
                this.get('table').setRows([]);
                this.send('loadFirstPage');
            },

            exportData: function exportData() {
                var exportUrl = (0, _ghostAdminUtilsGhostPaths['default'])().url.api('subscribers/csv');
                var accessToken = this.get('session.data.authenticated.access_token');
                var downloadURL = exportUrl + '?access_token=' + accessToken;
                var iframe = (0, _jquery['default'])('#iframeDownload');

                if (iframe.length === 0) {
                    iframe = (0, _jquery['default'])('<iframe>', { id: 'iframeDownload' }).hide().appendTo('body');
                }

                iframe.attr('src', downloadURL);
            }
        }
    });
});