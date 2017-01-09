define('ghost-admin/mirage/factories/subscriber', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {

    var randomDate = function randomDate() {
        var start = arguments.length <= 0 || arguments[0] === undefined ? moment().subtract(30, 'days').toDate() : arguments[0];
        var end = arguments.length <= 1 || arguments[1] === undefined ? new Date() : arguments[1];

        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    };

    var statuses = ['pending', 'subscribed'];

    // jscs:disable requireBlocksOnNewline
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    exports['default'] = _emberCliMirage['default'].Factory.extend({
        uuid: function uuid(i) {
            return 'subscriber-' + i;
        },
        name: function name() {
            return _emberCliMirage.faker.name.firstName() + ' ' + _emberCliMirage.faker.name.lastName();
        },
        email: function email() {
            return _emberCliMirage.faker.internet.email();
        },
        status: function status() {
            return statuses[Math.floor(Math.random() * statuses.length)];
        },
        created_at: function created_at() {
            return randomDate();
        },
        updated_at: null,
        created_by: 0,
        updated_by: null,
        unsubscribed_at: null
    });
});