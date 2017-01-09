define('ghost-admin/tests/integration/components/gh-task-button-test', ['exports', 'chai', 'ember-mocha', 'ember-concurrency', 'ember-object', 'ember-test-helpers/wait'], function (exports, _chai, _emberMocha, _emberConcurrency, _emberObject, _emberTestHelpersWait) {

    (0, _emberMocha.describeComponent)('gh-task-button', 'Integration: Component: gh-task-button', {
        integration: true
    }, function () {
        (0, _emberMocha.it)('renders', function () {
            this.render(Ember.HTMLBars.template((function () {
                var child0 = (function () {
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
                                    'column': 23
                                }
                            }
                        },
                        isEmpty: false,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: false,
                        buildFragment: function buildFragment(dom) {
                            var el0 = dom.createDocumentFragment();
                            var el1 = dom.createTextNode('Test');
                            dom.appendChild(el0, el1);
                            return el0;
                        },
                        buildRenderNodes: function buildRenderNodes() {
                            return [];
                        },
                        statements: [],
                        locals: [],
                        templates: []
                    };
                })();

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
                                'column': 42
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
                    statements: [['block', 'gh-task-button', [], [], 0, null, ['loc', [null, [1, 0], [1, 42]]]]],
                    locals: [],
                    templates: [child0]
                };
            })()));
            (0, _chai.expect)(this.$()).to.have.length(1);
            (0, _chai.expect)(this.$().text().trim()).to.equal('Test');
        });

        // TODO: figure out how to test concurrency behavior
    });
});
/* jshint expr:true */