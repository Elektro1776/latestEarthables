define("ghost-admin/utils/window-proxy", ["exports"], function (exports) {
    exports["default"] = {
        changeLocation: function changeLocation(url) {
            window.location = url;
        },

        replaceLocation: function replaceLocation(url) {
            window.location.replace(url);
        }
    };
});