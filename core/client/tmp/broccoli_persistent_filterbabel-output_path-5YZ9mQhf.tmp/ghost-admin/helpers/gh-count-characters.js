define('ghost-admin/helpers/gh-count-characters', ['exports', 'ember-helper', 'ember-string'], function (exports, _emberHelper, _emberString) {
    exports['default'] = (0, _emberHelper.helper)(function (params) {
        if (!params || !params.length) {
            return;
        }

        var el = document.createElement('span');
        var content = params[0] || '';
        var length = content.length;

        el.className = 'word-count';

        if (length > 180) {
            el.style.color = '#E25440';
        } else {
            el.style.color = '#9E9D95';
        }

        el.innerHTML = 200 - length;

        return (0, _emberString.htmlSafe)(el.outerHTML);
    });
});