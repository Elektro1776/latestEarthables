define('ghost-admin/mirage/factories/notification', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
    exports['default'] = _emberCliMirage['default'].Factory.extend({
        dismissible: true,
        message: 'This is an alert',
        status: 'alert',
        type: 'error'
    });
});
/* jscs:disable */