define('ghost-admin/helpers/gh-path', ['exports', 'ember-helper', 'ember-string', 'ghost-admin/utils/ghost-paths'], function (exports, _emberHelper, _emberString, _ghostAdminUtilsGhostPaths) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    // Handlebars Helper {{gh-path}}
    // Usage: Assume 'http://www.myghostblog.org/myblog/'
    // {{gh-path}} or {{gh-path 'blog'}} for Ghost's root (/myblog/)
    // {{gh-path 'admin'}} for Ghost's admin root (/myblog/ghost/)
    // {{gh-path 'api'}} for Ghost's api root (/myblog/ghost/api/v0.1/)
    // {{gh-path 'admin' '/assets/hi.png'}} for resolved url (/myblog/ghost/assets/hi.png)

    exports['default'] = (0, _emberHelper.helper)(function (params) {
        var paths = (0, _ghostAdminUtilsGhostPaths['default'])();

        var _params = _slicedToArray(params, 2);

        var path = _params[0];
        var url = _params[1];

        var base = undefined;

        if (!path) {
            path = 'blog';
        }

        if (!/^(blog|admin|api)$/.test(path)) {
            url = path;
            path = 'blog';
        }

        switch (path.toString()) {
            case 'blog':
                base = paths.blogRoot;
                break;
            case 'admin':
                base = paths.adminRoot;
                break;
            case 'api':
                base = paths.apiRoot;
                break;
            default:
                base = paths.blogRoot;
                break;
        }

        // handle leading and trailing slashes

        base = base[base.length - 1] !== '/' ? base + '/' : base;

        if (url && url.length > 0) {
            if (url[0] === '/') {
                url = url.substr(1);
            }

            base = base + url;
        }

        return (0, _emberString.htmlSafe)(base);
    });
});