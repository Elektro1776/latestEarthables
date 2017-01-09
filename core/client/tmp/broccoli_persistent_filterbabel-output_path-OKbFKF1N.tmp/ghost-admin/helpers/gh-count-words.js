define('ghost-admin/helpers/gh-count-words', ['exports', 'ember-helper', 'ghost-admin/utils/word-count'], function (exports, _emberHelper, _ghostAdminUtilsWordCount) {
    exports['default'] = (0, _emberHelper.helper)(function (params) {
        if (!params || !params.length) {
            return;
        }

        var markdown = params[0] || '';

        if (/^\s*$/.test(markdown)) {
            return '0 words';
        }

        var count = (0, _ghostAdminUtilsWordCount['default'])(markdown);

        return count + (count === 1 ? ' word' : ' words');
    });
});