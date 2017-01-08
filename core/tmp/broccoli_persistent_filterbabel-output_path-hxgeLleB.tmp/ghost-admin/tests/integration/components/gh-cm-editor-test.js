define('ghost-admin/tests/integration/components/gh-cm-editor-test', ['exports', 'chai', 'ember-mocha', 'ember-runloop'], function (exports, _chai, _emberMocha, _emberRunloop) {

    (0, _emberMocha.describeComponent)('gh-cm-editor', 'Integration: Component: gh-cm-editor', {
        integration: true
    }, function () {
        (0, _emberMocha.it)('handles editor events', function () {
            this.set('text', '');

            this.render(Ember.HTMLBars.template((function () {
                return {
                    meta: {
                        'fragmentReason': {
                            'name': 'missing-wrapper',
                            'problems': ['wrong-type']
                        },
                        'revision': 'Ember@2.6.1',
                        'loc': {
                            'source': null,
                            'start': {
                                'line': 1,
                                'column': 0
                            },
                            'end': {
                                'line': 1,
                                'column': 65
                            }
                        }
                    },
                    isEmpty: false,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                        var el0 = dom.createDocumentFragment();
                        var el1 = dom.createComment('');
                        dom.appendChild(el0, el1);
                        return el0;
                    },
                    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                        var morphs = new Array(1);
                        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                        dom.insertBoundary(fragment, 0);
                        dom.insertBoundary(fragment, null);
                        return morphs;
                    },
                    statements: [['inline', 'gh-cm-editor', [['get', 'text', ['loc', [null, [1, 15], [1, 19]]]]], ['class', 'gh-input', 'update', ['subexpr', 'action', [['subexpr', 'mut', [['get', 'text', ['loc', [null, [1, 57], [1, 61]]]]], [], ['loc', [null, [1, 52], [1, 62]]]]], [], ['loc', [null, [1, 44], [1, 63]]]]], ['loc', [null, [1, 0], [1, 65]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var input = this.$('.gh-input');

            (0, _chai.expect)(input.hasClass('focused'), 'has focused class on first render').to.be['false'];

            (0, _emberRunloop['default'])(function () {
                input.find('textarea').trigger('focus');
            });

            (0, _chai.expect)(input.hasClass('focused'), 'has focused class after focus').to.be['true'];

            (0, _emberRunloop['default'])(function () {
                input.find('textarea').trigger('blur');
            });

            (0, _chai.expect)(input.hasClass('focused'), 'loses focused class on blur').to.be['false'];

            (0, _emberRunloop['default'])(function () {
                // access CodeMirror directly as it doesn't pick up changes
                // to the textarea
                var cm = input.find('.CodeMirror').get(0).CodeMirror;
                cm.setValue('Testing');
            });

            (0, _chai.expect)(this.get('text'), 'text value after CM editor change').to.equal('Testing');
        });
    });
});
/* jshint expr:true */