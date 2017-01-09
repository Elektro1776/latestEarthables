define('ghost-admin/tests/helpers/destroy-app', ['exports', 'ember-runloop'], function (exports, _emberRunloop) {
    exports['default'] = destroyApp;

    function destroyApp(application) {
        (0, _emberRunloop['default'])(application, 'destroy');
    }
});