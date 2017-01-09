define('ghost-admin/utils/titleize', ['exports', 'ember-string'], function (exports, _emberString) {
    var lowerWords = ['of', 'a', 'the', 'and', 'an', 'or', 'nor', 'but', 'is', 'if', 'then', 'else', 'when', 'at', 'from', 'by', 'on', 'off', 'for', 'in', 'out', 'over', 'to', 'into', 'with'];

    exports['default'] = function (input) {
        var words = input.split(' ').map(function (word, index) {
            if (index === 0 || lowerWords.indexOf(word) === -1) {
                word = (0, _emberString.capitalize)(word);
            }

            return word;
        });

        return words.join(' ');
    };
});