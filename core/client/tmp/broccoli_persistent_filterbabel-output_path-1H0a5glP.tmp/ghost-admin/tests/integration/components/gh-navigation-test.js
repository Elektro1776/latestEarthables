define('ghost-admin/tests/integration/components/gh-navigation-test', ['exports', 'chai', 'ember-mocha', 'jquery', 'ember-runloop', 'ghost-admin/models/navigation-item'], function (exports, _chai, _emberMocha, _jquery, _emberRunloop, _ghostAdminModelsNavigationItem) {

    (0, _emberMocha.describeComponent)('gh-navigation', 'Integration: Component: gh-navigation', {
        integration: true
    }, function () {
        (0, _emberMocha.it)('renders', function () {
            this.render(Ember.HTMLBars.template((function () {
                var child0 = (function () {
                    return {
                        meta: {
                            'fragmentReason': {
                                'name': 'triple-curlies'
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
                                    'column': 86
                                }
                            }
                        },
                        isEmpty: false,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: false,
                        buildFragment: function buildFragment(dom) {
                            var el0 = dom.createDocumentFragment();
                            var el1 = dom.createElement('div');
                            dom.setAttribute(el1, 'class', 'js-gh-blognav');
                            var el2 = dom.createElement('div');
                            dom.setAttribute(el2, 'class', 'gh-blognav-item');
                            dom.appendChild(el1, el2);
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
                                'column': 104
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
                    statements: [['block', 'gh-navigation', [], [], 0, null, ['loc', [null, [1, 0], [1, 104]]]]],
                    locals: [],
                    templates: [child0]
                };
            })()));
            (0, _chai.expect)(this.$('section.gh-view')).to.have.length(1);
            (0, _chai.expect)(this.$('.ui-sortable')).to.have.length(1);
        });

        (0, _emberMocha.it)('triggers reorder action', function () {
            var _this = this;

            var navItems = [];
            var expectedOldIndex = -1;
            var expectedNewIndex = -1;

            navItems.pushObject(_ghostAdminModelsNavigationItem['default'].create({ label: 'First', url: '/first' }));
            navItems.pushObject(_ghostAdminModelsNavigationItem['default'].create({ label: 'Second', url: '/second' }));
            navItems.pushObject(_ghostAdminModelsNavigationItem['default'].create({ label: 'Third', url: '/third' }));
            navItems.pushObject(_ghostAdminModelsNavigationItem['default'].create({ label: '', url: '', last: true }));
            this.set('navigationItems', navItems);
            this.set('blogUrl', 'http://localhost:2368');

            this.on('moveItem', function (oldIndex, newIndex) {
                (0, _chai.expect)(oldIndex).to.equal(expectedOldIndex);
                (0, _chai.expect)(newIndex).to.equal(expectedNewIndex);
            });

            (0, _emberRunloop['default'])(function () {
                _this.render(Ember.HTMLBars.template((function () {
                    var child0 = (function () {
                        var child0 = (function () {
                            return {
                                meta: {
                                    'fragmentReason': false,
                                    'revision': 'Ember@2.6.1',
                                    'loc': {
                                        'source': null,
                                        'start': {
                                            'line': 4,
                                            'column': 24
                                        },
                                        'end': {
                                            'line': 6,
                                            'column': 24
                                        }
                                    }
                                },
                                isEmpty: false,
                                arity: 1,
                                cachedFragment: null,
                                hasRendered: false,
                                buildFragment: function buildFragment(dom) {
                                    var el0 = dom.createDocumentFragment();
                                    var el1 = dom.createTextNode('                            ');
                                    dom.appendChild(el0, el1);
                                    var el1 = dom.createComment('');
                                    dom.appendChild(el0, el1);
                                    var el1 = dom.createTextNode('\n');
                                    dom.appendChild(el0, el1);
                                    return el0;
                                },
                                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                                    var morphs = new Array(1);
                                    morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                                    return morphs;
                                },
                                statements: [['inline', 'gh-navitem', [], ['navItem', ['subexpr', '@mut', [['get', 'navItem', ['loc', [null, [5, 49], [5, 56]]]]], [], []], 'baseUrl', ['subexpr', '@mut', [['get', 'blogUrl', ['loc', [null, [5, 65], [5, 72]]]]], [], []], 'addItem', 'addItem', 'deleteItem', 'deleteItem', 'updateUrl', 'updateUrl'], ['loc', [null, [5, 28], [5, 138]]]]],
                                locals: ['navItem'],
                                templates: []
                            };
                        })();

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
                                        'line': 8,
                                        'column': 16
                                    }
                                }
                            },
                            isEmpty: false,
                            arity: 0,
                            cachedFragment: null,
                            hasRendered: false,
                            buildFragment: function buildFragment(dom) {
                                var el0 = dom.createDocumentFragment();
                                var el1 = dom.createTextNode('                    ');
                                dom.appendChild(el0, el1);
                                var el1 = dom.createElement('form');
                                dom.setAttribute(el1, 'id', 'settings-navigation');
                                dom.setAttribute(el1, 'class', 'gh-blognav js-gh-blognav');
                                dom.setAttribute(el1, 'novalidate', 'novalidate');
                                var el2 = dom.createTextNode('\n');
                                dom.appendChild(el1, el2);
                                var el2 = dom.createComment('');
                                dom.appendChild(el1, el2);
                                var el2 = dom.createTextNode('                    ');
                                dom.appendChild(el1, el2);
                                dom.appendChild(el0, el1);
                                var el1 = dom.createTextNode('\n');
                                dom.appendChild(el0, el1);
                                return el0;
                            },
                            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                                var morphs = new Array(1);
                                morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
                                return morphs;
                            },
                            statements: [['block', 'each', [['get', 'navigationItems', ['loc', [null, [4, 32], [4, 47]]]]], [], 0, null, ['loc', [null, [4, 24], [6, 33]]]]],
                            locals: [],
                            templates: [child0]
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
                                    'line': 8,
                                    'column': 34
                                }
                            }
                        },
                        isEmpty: false,
                        arity: 0,
                        cachedFragment: null,
                        hasRendered: false,
                        buildFragment: function buildFragment(dom) {
                            var el0 = dom.createDocumentFragment();
                            var el1 = dom.createTextNode('\n');
                            dom.appendChild(el0, el1);
                            var el1 = dom.createComment('');
                            dom.appendChild(el0, el1);
                            return el0;
                        },
                        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                            var morphs = new Array(1);
                            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                            dom.insertBoundary(fragment, null);
                            return morphs;
                        },
                        statements: [['block', 'gh-navigation', [], ['moveItem', 'moveItem'], 0, null, ['loc', [null, [2, 16], [8, 34]]]]],
                        locals: [],
                        templates: [child0]
                    };
                })()));
            });

            // check it renders the nav item rows
            (0, _chai.expect)(this.$('.gh-blognav-item')).to.have.length(4);

            // move second item up one
            expectedOldIndex = 1;
            expectedNewIndex = 0;
            (0, _emberRunloop['default'])(function () {
                (0, _jquery['default'])(_this.$('.gh-blognav-item')[1]).simulateDragSortable({
                    move: -1,
                    handle: '.gh-blognav-grab'
                });
            });

            // move second item down one
            expectedOldIndex = 1;
            expectedNewIndex = 2;
            (0, _emberRunloop['default'])(function () {
                (0, _jquery['default'])(_this.$('.gh-blognav-item')[1]).simulateDragSortable({
                    move: 1,
                    handle: '.gh-blognav-grab'
                });
            });
        });
    });
});
/* jshint expr:true */