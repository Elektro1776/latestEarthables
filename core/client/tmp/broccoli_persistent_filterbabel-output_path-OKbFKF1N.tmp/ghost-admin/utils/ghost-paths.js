define('ghost-admin/utils/ghost-paths', ['exports'], function (exports) {
    var _slice = Array.prototype.slice;
    var makeRoute = function makeRoute(root, args) {
        var slashAtStart = /^\//;
        var slashAtEnd = /\/$/;
        var parts = Array.prototype.slice.call(args, 0);
        var route = root.replace(slashAtEnd, '');

        parts.forEach(function (part) {
            if (part) {
                route = [route, part.replace(slashAtStart, '').replace(slashAtEnd, '')].join('/');
            }
        });

        return route += '/';
    };

    exports['default'] = function () {
        var path = window.location.pathname;
        var subdir = path.substr(0, path.search('/ghost/'));
        var adminRoot = subdir + '/ghost/';
        var apiRoot = subdir + '/ghost/api/v0.1';

        function assetUrl(src) {
            return subdir + src;
        }

        return {
            adminRoot: adminRoot,
            apiRoot: apiRoot,
            subdir: subdir,
            blogRoot: subdir + '/',
            count: 'https://count.ghost.org/',

            url: {
                admin: function admin() {
                    return makeRoute(adminRoot, arguments);
                },

                api: function api() {
                    return makeRoute(apiRoot, arguments);
                },

                join: function join() {
                    if (arguments.length > 1) {
                        return makeRoute(arguments[0], Array.prototype.slice.call(arguments, 1));
                    } else if (arguments.length === 1) {
                        var _arguments = _slice.call(arguments);

                        var arg = _arguments[0];

                        return arg.slice(-1) === '/' ? arg : arg + '/';
                    }
                    return '/';
                },

                asset: assetUrl
            }
        };
    };
});