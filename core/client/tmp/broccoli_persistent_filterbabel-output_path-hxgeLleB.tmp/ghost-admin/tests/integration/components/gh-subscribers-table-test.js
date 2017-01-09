define('ghost-admin/tests/integration/components/gh-subscribers-table-test', ['exports', 'chai', 'ember-mocha', 'ember-light-table'], function (exports, _chai, _emberMocha, _emberLightTable) {

    (0, _emberMocha.describeComponent)('gh-subscribers-table', 'Integration: Component: gh-subscribers-table', {
        integration: true
    }, function () {
        (0, _emberMocha.it)('renders', function () {
            this.set('table', new _emberLightTable['default']([], []));
            this.set('sortByColumn', function () {});
            this.set('delete', function () {});

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
                                'column': 94
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
                    statements: [['inline', 'gh-subscribers-table', [], ['table', ['subexpr', '@mut', [['get', 'table', ['loc', [null, [1, 29], [1, 34]]]]], [], []], 'sortByColumn', ['subexpr', 'action', [['get', 'sortByColumn', ['loc', [null, [1, 56], [1, 68]]]]], [], ['loc', [null, [1, 48], [1, 69]]]], 'delete', ['subexpr', 'action', [['get', 'delete', ['loc', [null, [1, 85], [1, 91]]]]], [], ['loc', [null, [1, 77], [1, 92]]]]], ['loc', [null, [1, 0], [1, 94]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$()).to.have.length(1);
        });
    });
});
/* jshint expr:true */