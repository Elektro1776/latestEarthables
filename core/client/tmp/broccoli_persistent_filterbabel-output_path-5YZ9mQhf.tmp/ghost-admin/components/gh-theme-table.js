define('ghost-admin/components/gh-theme-table', ['exports', 'ember-component', 'ember-computed'], function (exports, _emberComponent, _emberComputed) {
    exports['default'] = _emberComponent['default'].extend({

        availableThemes: null,

        themes: (0, _emberComputed['default'])('availableThemes', function () {
            var themes = this.get('availableThemes').map(function (t) {
                var theme = {};

                theme.name = t.name;
                theme.label = t['package'] ? t['package'].name + ' - ' + t['package'].version : t.name;
                theme['package'] = t['package'];
                theme.active = !!t.active;
                theme.isDeletable = !theme.active;

                return theme;
            });
            var duplicateThemes = [];

            themes.forEach(function (theme) {
                var duplicateLabels = themes.filterBy('label', theme.label);

                if (duplicateLabels.length > 1) {
                    duplicateThemes.pushObject(theme);
                }
            });

            duplicateThemes.forEach(function (theme) {
                if (theme.name !== 'casper') {
                    theme.label = theme.label + ' (' + theme.name + ')';
                }
            });

            // "(default)" needs to be added to casper manually as it's always
            // displayed and would mess up the duplicate checking if added earlier
            var casper = themes.findBy('name', 'casper');
            if (casper) {
                casper.label = casper.label + ' (default)';
                casper.isDefault = true;
                casper.isDeletable = false;
            }

            // sorting manually because .sortBy('label') has a different sorting
            // algorithm to [...strings].sort()
            return themes.sort(function (themeA, themeB) {
                var a = themeA.label.toLowerCase();
                var b = themeB.label.toLowerCase();

                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }
                return 0;
            });
        }).readOnly()

    });
});