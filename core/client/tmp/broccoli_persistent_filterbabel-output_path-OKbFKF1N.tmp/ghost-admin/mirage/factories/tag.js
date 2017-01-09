define('ghost-admin/mirage/factories/tag', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
    exports['default'] = _emberCliMirage['default'].Factory.extend({
        created_at: function created_at() {
            return '2015-09-11T09:44:29.871Z';
        },
        created_by: function created_by() {
            return 1;
        },
        description: function description(i) {
            return 'Description for tag ' + i + '.';
        },
        visibility: function visibility() {
            return 'public';
        },
        image: function image(i) {
            return '/content/images/2015/10/tag-' + i + '.jpg';
        },
        meta_description: function meta_description(i) {
            return 'Meta description for tag ' + i + '.';
        },
        meta_title: function meta_title(i) {
            return 'Meta Title for tag ' + i;
        },
        name: function name(i) {
            return 'Tag ' + i;
        },
        parent: function parent() {
            return null;
        },
        slug: function slug(i) {
            return 'tag-' + i;
        },
        updated_at: function updated_at() {
            return '2015-10-19T16:25:07.756Z';
        },
        updated_by: function updated_by() {
            return 1;
        },
        uuid: function uuid(i) {
            return 'tag-' + i;
        },
        count: function count() {
            return {
                posts: 1
            };
        }
    });
});
/* jscs:disable */