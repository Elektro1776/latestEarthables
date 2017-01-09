define('ghost-admin/mirage/factories/setting', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
    exports['default'] = _emberCliMirage['default'].Factory.extend({
        uuid: function uuid(i) {
            return 'setting-' + i;
        },
        key: function key(i) {
            return 'setting-' + i;
        },
        value: function value() {
            return null;
        },
        type: function type() {
            return 'blog';
        },
        created_at: function created_at() {
            return '2015-01-12T18:29:01.000Z';
        },
        created_by: function created_by() {
            return 1;
        },
        updated_at: function updated_at() {
            return '2015-10-27T17:39:58.288Z';
        },
        updated_by: function updated_by() {
            return 1;
        }
    });
});
/* jscs:disable */