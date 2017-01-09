define('ghost-admin/mirage/config/roles', ['exports'], function (exports) {
    exports['default'] = mockRoles;

    function mockRoles(server) {
        server.get('/roles/', function (db, request) {
            if (request.queryParams.permissions === 'assign') {
                var roles = db.roles.find([1, 2, 3]);
                return { roles: roles };
            }

            return {
                roles: db.roles
            };
        });
    }
});