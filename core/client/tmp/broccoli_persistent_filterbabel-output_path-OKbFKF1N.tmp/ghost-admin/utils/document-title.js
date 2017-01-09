define('ghost-admin/utils/document-title', ['exports', 'ember-route', 'ember-router', 'ember-array/utils', 'ember-evented/on'], function (exports, _emberRoute, _emberRouter, _emberArrayUtils, _emberEventedOn) {
    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

    exports['default'] = function () {
        _emberRoute['default'].reopen({
            // `titleToken` can either be a static string or a function
            // that accepts a model object and returns a string (or array
            // of strings if there are multiple tokens).
            titleToken: null,

            // `title` can either be a static string or a function
            // that accepts an array of tokens and returns a string
            // that will be the document title. The `collectTitleTokens` action
            // stops bubbling once a route is encountered that has a `title`
            // defined.
            title: null,

            actions: {
                collectTitleTokens: function collectTitleTokens(tokens) {
                    var titleToken = this.titleToken;

                    var finalTitle = undefined;

                    if (typeof this.titleToken === 'function') {
                        titleToken = this.titleToken(this.currentModel);
                    }

                    if ((0, _emberArrayUtils.isEmberArray)(titleToken)) {
                        tokens.unshift.apply(tokens, _toConsumableArray(titleToken));
                    } else if (titleToken) {
                        tokens.unshift(titleToken);
                    }

                    if (this.title) {
                        if (typeof this.title === 'function') {
                            finalTitle = this.title(tokens);
                        } else {
                            finalTitle = this.title;
                        }

                        this.router.setTitle(finalTitle);
                    } else {
                        return true;
                    }
                }
            }
        });

        _emberRouter['default'].reopen({
            updateTitle: (0, _emberEventedOn['default'])('didTransition', function () {
                this.send('collectTitleTokens', []);
            }),

            setTitle: function setTitle(title) {
                window.document.title = title;
            }
        });
    };
});