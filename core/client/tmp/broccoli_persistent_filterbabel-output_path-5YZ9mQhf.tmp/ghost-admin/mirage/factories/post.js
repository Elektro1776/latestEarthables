define('ghost-admin/mirage/factories/post', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
    exports['default'] = _emberCliMirage['default'].Factory.extend({
        uuid: function uuid(i) {
            return 'post-' + i;
        },
        title: function title(i) {
            return 'Post ' + i;
        },
        description: function description(i) {
            return 'Title for post ' + i + '.';
        },
        slug: function slug(i) {
            return 'post-' + i;
        },
        markdown: function markdown(i) {
            return 'Markdown for post ' + i + '.';
        },
        html: function html(i) {
            return 'HTML for post ' + i + '.';
        },
        image: function image(i) {
            return '/content/images/2015/10/post-' + i + '.jpg';
        },
        featured: function featured() {
            return false;
        },
        page: function page() {
            return false;
        },
        status: function status(i) {
            return _emberCliMirage.faker.list.cycle('draft', 'published', 'scheduled')(i);
        },
        meta_description: function meta_description(i) {
            return 'Meta description for post ' + i + '.';
        },
        meta_title: function meta_title(i) {
            return 'Meta Title for post ' + i;
        },
        author_id: function author_id() {
            return 1;
        },
        updated_at: function updated_at() {
            return '2015-10-19T16:25:07.756Z';
        },
        updated_by: function updated_by() {
            return 1;
        },
        published_at: function published_at() {
            return '2015-12-19T16:25:07.000Z';
        },
        published_by: function published_by() {
            return 1;
        },
        created_at: function created_at() {
            return '2015-09-11T09:44:29.871Z';
        },
        created_by: function created_by() {
            return 1;
        },
        tags: function tags() {
            return [];
        }
    });
});
/* jscs:disable */