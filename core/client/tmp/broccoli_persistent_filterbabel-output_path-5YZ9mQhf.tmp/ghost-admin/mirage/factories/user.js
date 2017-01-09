define('ghost-admin/mirage/factories/user', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
    exports['default'] = _emberCliMirage['default'].Factory.extend({
        accessibility: function accessibility() {
            return null;
        },
        bio: function bio() {
            return null;
        },
        cover: function cover() {
            return null;
        },
        created_at: function created_at() {
            return '2015-09-02T13:41:50.000Z';
        },
        created_by: function created_by() {
            return null;
        },
        email: function email(i) {
            return 'user-' + i + '@example.com';
        },
        image: function image() {
            return '//www.gravatar.com/avatar/3ae045bc198a157401827c8455cd7c99?s=250&d=mm&r=x';
        },
        language: function language() {
            return 'en_US';
        },
        last_login: function last_login() {
            return '2015-11-02T16:12:05.000Z';
        },
        location: function location() {
            return null;
        },
        meta_description: function meta_description() {
            return null;
        },
        meta_title: function meta_title() {
            return null;
        },
        name: function name(i) {
            return 'User ' + i;
        },
        slug: function slug(i) {
            return 'user-' + i;
        },
        status: function status() {
            return 'active';
        },
        tour: function tour() {
            return null;
        },
        updated_at: function updated_at() {
            return '2015-11-02T16:12:05.000Z';
        },
        updated_by: function updated_by() {
            return '2015-09-02T13:41:50.000Z';
        },
        uuid: function uuid(i) {
            return 'user-' + i;
        },
        website: function website() {
            return 'http://example.com';
        },

        roles: function roles() {
            return [];
        }
    });
});
/* jscs:disable */