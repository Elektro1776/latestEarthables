define('ghost-admin/mirage/utils', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
    exports.paginatedResponse = paginatedResponse;
    exports.maintenanceResponse = maintenanceResponse;
    exports.versionMismatchResponse = versionMismatchResponse;

    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    function paginatedResponse(modelName, allModels, request) {
        var page = +request.queryParams.page || 1;
        var limit = request.queryParams.limit || 15;
        var pages = undefined,
            models = undefined,
            next = undefined,
            prev = undefined;

        allModels = allModels || [];

        if (limit === 'all') {
            models = allModels;
            pages = 1;
        } else {
            limit = +limit;

            var start = (page - 1) * limit;
            var end = start + limit;

            models = allModels.slice(start, end);
            pages = Math.ceil(allModels.length / limit);

            if (start > 0) {
                prev = page - 1;
            }

            if (end < allModels.length) {
                next = page + 1;
            }
        }

        return _defineProperty({
            meta: {
                pagination: {
                    page: page,
                    limit: limit,
                    pages: pages,
                    total: allModels.length,
                    next: next || null,
                    prev: prev || null
                }
            }
        }, modelName, models);
    }

    function maintenanceResponse() {
        return new _emberCliMirage['default'].Response(503, {}, {
            errors: [{
                errorType: 'Maintenance'
            }]
        });
    }

    function versionMismatchResponse() {
        return new _emberCliMirage['default'].Response(400, {}, {
            errors: [{
                errorType: 'VersionMismatchError'
            }]
        });
    }
});