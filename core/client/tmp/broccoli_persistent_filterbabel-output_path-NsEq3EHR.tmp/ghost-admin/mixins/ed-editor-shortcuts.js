define('ghost-admin/mixins/ed-editor-shortcuts', ['exports', 'ember-metal/mixin', 'ghost-admin/utils/titleize'], function (exports, _emberMetalMixin, _ghostAdminUtilsTitleize) {

    // Used for simple, noncomputational replace-and-go! shortcuts.
    // See default case in shortcut function below.
    var simpleShortcutSyntax = {
        bold: {
            regex: '**|**',
            cursor: '|'
        },
        italic: {
            regex: '*|*',
            cursor: '|'

        },
        strike: {
            regex: '~~|~~',
            cursor: '|'
        },
        code: {
            regex: '`|`',
            cursor: '|'
        },
        blockquote: {
            regex: '> |',
            cursor: '|',
            newline: true
        },
        list: {
            regex: '* |',
            cursor: '|',
            newline: true
        },
        link: {
            regex: '[|](http://)',
            cursor: 'http://'
        },
        image: {
            regex: '![|](http://)',
            cursor: 'http://',
            newline: true
        }
    };

    var shortcuts = {
        simple: function simple(type, replacement, selection, line) {
            var startIndex = 0;
            var shortcut = undefined;

            if (simpleShortcutSyntax.hasOwnProperty(type)) {
                shortcut = simpleShortcutSyntax[type];
                // insert the markdown
                replacement.text = shortcut.regex.replace('|', selection.text);

                // add a newline if needed
                if (shortcut.newline && line.text !== '') {
                    startIndex = 1;
                    replacement.text = '\n' + replacement.text;
                }

                // handle cursor position
                if (selection.text === '' && shortcut.cursor === '|') {
                    // the cursor should go where | was
                    replacement.position = startIndex + replacement.start + shortcut.regex.indexOf(shortcut.cursor);
                } else if (shortcut.cursor !== '|') {
                    // the cursor should select the string which matches shortcut.cursor
                    replacement.position = {
                        start: replacement.start + replacement.text.indexOf(shortcut.cursor)
                    };
                    replacement.position.end = replacement.position.start + shortcut.cursor.length;
                }
            }

            return replacement;
        },

        cycleHeaderLevel: function cycleHeaderLevel(replacement, line) {
            var match = line.text.match(/^#+/);
            var currentHeaderLevel = undefined,
                hashPrefix = undefined;

            if (!match) {
                currentHeaderLevel = 1;
            } else {
                currentHeaderLevel = match[0].length;
            }

            if (currentHeaderLevel > 2) {
                currentHeaderLevel = 1;
            }

            hashPrefix = new Array(currentHeaderLevel + 2).join('#');

            replacement.text = hashPrefix + ' ' + line.text.replace(/^#* /, '');

            replacement.start = line.start;
            replacement.end = line.end;

            return replacement;
        },

        copyHTML: function copyHTML(editor, selection) {
            var converter = new Showdown.converter();
            var generatedHTML = undefined;

            if (selection.text) {
                generatedHTML = converter.makeHtml(selection.text);
            } else {
                generatedHTML = converter.makeHtml(editor.getValue());
            }

            // Talk to the editor
            editor.send('toggleCopyHTMLModal', generatedHTML);
        },

        currentDate: function currentDate(replacement) {
            replacement.text = moment(new Date()).format('D MMMM YYYY');
            return replacement;
        },

        uppercase: function uppercase(replacement, selection) {
            replacement.text = selection.text.toLocaleUpperCase();
            return replacement;
        },

        lowercase: function lowercase(replacement, selection) {
            replacement.text = selection.text.toLocaleLowerCase();
            return replacement;
        },

        titlecase: function titlecase(replacement, selection) {
            replacement.text = (0, _ghostAdminUtilsTitleize['default'])(selection.text);
            return replacement;
        }
    };

    exports['default'] = _emberMetalMixin['default'].create({
        shortcut: function shortcut(type) {
            var selection = this.getSelection();
            var replacement = {
                start: selection.start,
                end: selection.end,
                position: 'collapseToEnd'
            };

            switch (type) {
                // This shortcut is special as it needs to send an action
                case 'copyHTML':
                    shortcuts.copyHTML(this, selection);
                    break;
                case 'cycleHeaderLevel':
                    replacement = shortcuts.cycleHeaderLevel(replacement, this.getLine());
                    break;
                // These shortcuts all process the basic information
                case 'currentDate':
                case 'uppercase':
                case 'lowercase':
                case 'titlecase':
                    replacement = shortcuts[type](replacement, selection, this.getLineToCursor());
                    break;
                // All the of basic formatting shortcuts work with a regex
                default:
                    replacement = shortcuts.simple(type, replacement, selection, this.getLineToCursor());
            }

            if (replacement.text) {
                this.replaceSelection(replacement.text, replacement.start, replacement.end, replacement.position);
            }
        }
    });
});
/* global moment, Showdown */