define('ghost-admin/utils/validator-extensions', ['exports', 'ember-utils'], function (exports, _emberUtils) {

    function init() {
        // Provide a few custom validators
        //
        validator.extend('empty', function (str) {
            return (0, _emberUtils.isBlank)(str);
        });

        validator.extend('notContains', function (str, badString) {
            return str.indexOf(badString) === -1;
        });
    }

    exports['default'] = {
        init: init
    };
});