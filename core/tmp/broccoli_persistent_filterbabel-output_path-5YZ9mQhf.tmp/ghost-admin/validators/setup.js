define('ghost-admin/validators/setup', ['exports', 'ghost-admin/validators/new-user'], function (exports, _ghostAdminValidatorsNewUser) {
    exports['default'] = _ghostAdminValidatorsNewUser['default'].create({
        properties: ['name', 'email', 'password', 'blogTitle'],

        blogTitle: function blogTitle(model) {
            var blogTitle = model.get('blogTitle');

            if (!validator.isLength(blogTitle, 1)) {
                model.get('errors').add('blogTitle', 'Please enter a blog title.');
                this.invalidate();
            }
        }
    });
});