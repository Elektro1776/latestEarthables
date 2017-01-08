define("ghost-admin/utils/random-password", ["exports"], function (exports) {
    /* global generatePassword */

    exports["default"] = function () {
        var word = generatePassword(6);
        var randomN = Math.floor(Math.random() * 1000);

        return word + randomN;
    };
});