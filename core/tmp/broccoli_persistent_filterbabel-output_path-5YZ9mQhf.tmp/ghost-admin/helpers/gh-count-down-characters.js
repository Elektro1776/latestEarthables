define('ghost-admin/helpers/gh-count-down-characters', ['exports', 'ember-helper', 'ember-string'], function (exports, _emberHelper, _emberString) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports['default'] = (0, _emberHelper.helper)(function (params) {
        if (!params || params.length < 2) {
            return;
        }

        var el = document.createElement('span');

        var _params = _slicedToArray(params, 2);

        var content = _params[0];
        var maxCharacters = _params[1];

        var length = undefined;

        content = content || '';
        length = content.length;

        el.className = 'word-count';

        if (length > maxCharacters) {
            el.style.color = '#E25440';
        } else {
            el.style.color = '#9FBB58';
        }

        el.innerHTML = length;

        return (0, _emberString.htmlSafe)(el.outerHTML);
    });
});