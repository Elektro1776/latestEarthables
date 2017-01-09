define('ghost-admin/mirage/factories/role', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
    exports['default'] = _emberCliMirage['default'].Factory.extend({
        created_at: function created_at() {
            return '2013-11-25T14:48:11.000Z';
        },
        created_by: function created_by() {
            return 1;
        },
        description: function description(i) {
            return 'Role ' + i;
        },
        name: function name() {
            return '';
        },
        updated_at: function updated_at() {
            return '2013-11-25T14:48:11.000Z';
        },
        updated_by: function updated_by() {
            return 1;
        },
        uuid: function uuid(i) {
            return 'role-' + i;
        }
    });
});
/* jscs:disable */