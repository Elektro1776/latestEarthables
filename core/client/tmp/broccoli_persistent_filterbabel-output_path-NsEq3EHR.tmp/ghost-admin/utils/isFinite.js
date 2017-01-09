define("ghost-admin/utils/isFinite", ["exports"], function (exports) {
    /* globals window */

    // isFinite function from lodash

    exports["default"] = function (value) {
        return window.isFinite(value) && !window.isNaN(parseFloat(value));
    };
});