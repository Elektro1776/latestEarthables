define('ghost-admin/mirage/scenarios/default', ['exports'], function (exports) {
    exports['default'] = function (server) {
        // Seed your development database using your factories. This
        // data will not be loaded in your tests.

        // server.createList('contact', 10);

        server.createList('subscriber', 125);
    };
});