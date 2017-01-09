define('ghost-admin/routes/error404', ['exports', 'ember'], function (exports, _ember) {
    var Route = _ember['default'].Route;
    exports['default'] = Route.extend({
        controllerName: 'error',
        templateName: 'error',
        titleToken: 'Error',

        model: function model() {
            return {
                status: 404
            };
        }
    });
});