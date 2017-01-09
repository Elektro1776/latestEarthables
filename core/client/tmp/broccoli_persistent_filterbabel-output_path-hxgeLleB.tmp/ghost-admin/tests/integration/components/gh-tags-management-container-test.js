define('ghost-admin/tests/integration/components/gh-tags-management-container-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

    (0, _emberMocha.describeComponent)('gh-tags-management-container', 'Integration: Component: gh-tags-management-container', {
        integration: true
    }, function () {
        (0, _emberMocha.it)('renders', function () {
            this.set('tags', []);
            this.set('selectedTag', null);
            this.on('enteredMobile', function () {
                // noop
            });
            this.on('leftMobile', function () {
                // noop
            });

            this.render(Ember.HTMLBars.template((function () {
                var child0 = (function () {
                    return {
                        meta: {
                            'fragmentReason': false,
                            'revision': 'Ember@2.6.1',
                            'loc': {
                                'source': null,
                                'start': {
                                    'line': 2,
                                    'column': 16
                                },
                                'end': {
                                    'line': 2,
                                    'column': 137
                                }
                            }
                        },
                        isEmpty: true,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: false,
                        buildFragment: function buildFragment(dom) {
                            var el0 = dom.createDocumentFragment();
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
                                'line': 3,
                                'column': 12
                            }
                        }
                    },
                    isEmpty: false,
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                        var el0 = dom.createDocumentFragment();
                        var el1 = dom.createTextNode('\n                ');
                        dom.appendChild(el0, el1);
                        var el1 = dom.createComment('');
                        dom.appendChild(el0, el1);
                        var el1 = dom.createTextNode('\n            ');
                        dom.appendChild(el0, el1);
                        return el0;
                    },
                    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                        var morphs = new Array(1);
                        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                        return morphs;
                    },
                    statements: [['block', 'gh-tags-management-container', [], ['tags', ['subexpr', '@mut', [['get', 'tags', ['loc', [null, [2, 53], [2, 57]]]]], [], []], 'selectedTag', ['subexpr', '@mut', [['get', 'selectedTag', ['loc', [null, [2, 70], [2, 81]]]]], [], []], 'enteredMobile', 'enteredMobile', 'leftMobile', 'leftMobile'], 0, null, ['loc', [null, [2, 16], [2, 170]]]]],
                    locals: [],
                    templates: [child0]
                };
            })()));
            (0, _chai.expect)(this.$()).to.have.length(1);
        });
    });
});
/* jshint expr:true */