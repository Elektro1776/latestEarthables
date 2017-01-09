define('ghost-admin/transforms/twitter-url-user', ['exports', 'ember-data/transform'], function (exports, _emberDataTransform) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports['default'] = _emberDataTransform['default'].extend({
        deserialize: function deserialize(serialized) {
            if (serialized) {
                var _serialized$match = serialized.match(/@?([^\/]*)/);

                var _serialized$match2 = _slicedToArray(_serialized$match, 2);

                var user = _serialized$match2[1];

                return 'https://twitter.com/' + user;
            }
            return serialized;
        },

        serialize: function serialize(deserialized) {
            if (deserialized) {
                var _deserialized$match = deserialized.match(/(?:https:\/\/)(?:twitter\.com)\/(?:#!\/)?@?([^\/]*)/);

                var _deserialized$match2 = _slicedToArray(_deserialized$match, 2);

                var user = _deserialized$match2[1];

                return '@' + user;
            }
            return deserialized;
        }
    });
});