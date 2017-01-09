define('ghost-admin/tests/integration/components/gh-navitem-test', ['exports', 'chai', 'ember-mocha', 'ember-runloop', 'ghost-admin/models/navigation-item'], function (exports, _chai, _emberMocha, _emberRunloop, _ghostAdminModelsNavigationItem) {

    (0, _emberMocha.describeComponent)('gh-navitem', 'Integration: Component: gh-navitem', {
        integration: true
    }, function () {
        beforeEach(function () {
            this.set('baseUrl', 'http://localhost:2368');
        });

        (0, _emberMocha.it)('renders', function () {
            this.set('navItem', _ghostAdminModelsNavigationItem['default'].create({ label: 'Test', url: '/url' }));

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
                                'column': 46
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
                    statements: [['inline', 'gh-navitem', [], ['navItem', ['subexpr', '@mut', [['get', 'navItem', ['loc', [null, [1, 21], [1, 28]]]]], [], []], 'baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [1, 37], [1, 44]]]]], [], []]], ['loc', [null, [1, 0], [1, 46]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $item = this.$('.gh-blognav-item');

            (0, _chai.expect)($item.find('.gh-blognav-grab').length).to.equal(1);
            (0, _chai.expect)($item.find('.gh-blognav-label').length).to.equal(1);
            (0, _chai.expect)($item.find('.gh-blognav-url').length).to.equal(1);
            (0, _chai.expect)($item.find('.gh-blognav-delete').length).to.equal(1);

            // doesn't show any errors
            (0, _chai.expect)($item.hasClass('gh-blognav-item--error')).to.be['false'];
            (0, _chai.expect)($item.find('.error').length).to.equal(0);
            (0, _chai.expect)($item.find('.response:visible').length).to.equal(0);
        });

        (0, _emberMocha.it)('doesn\'t show drag handle for new items', function () {
            this.set('navItem', _ghostAdminModelsNavigationItem['default'].create({ label: 'Test', url: '/url', isNew: true }));

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
                                'column': 46
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
                    statements: [['inline', 'gh-navitem', [], ['navItem', ['subexpr', '@mut', [['get', 'navItem', ['loc', [null, [1, 21], [1, 28]]]]], [], []], 'baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [1, 37], [1, 44]]]]], [], []]], ['loc', [null, [1, 0], [1, 46]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $item = this.$('.gh-blognav-item');

            (0, _chai.expect)($item.find('.gh-blognav-grab').length).to.equal(0);
        });

        (0, _emberMocha.it)('shows add button for new items', function () {
            this.set('navItem', _ghostAdminModelsNavigationItem['default'].create({ label: 'Test', url: '/url', isNew: true }));

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
                                'column': 46
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
                    statements: [['inline', 'gh-navitem', [], ['navItem', ['subexpr', '@mut', [['get', 'navItem', ['loc', [null, [1, 21], [1, 28]]]]], [], []], 'baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [1, 37], [1, 44]]]]], [], []]], ['loc', [null, [1, 0], [1, 46]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $item = this.$('.gh-blognav-item');

            (0, _chai.expect)($item.find('.gh-blognav-add').length).to.equal(1);
            (0, _chai.expect)($item.find('.gh-blognav-delete').length).to.equal(0);
        });

        (0, _emberMocha.it)('triggers delete action', function () {
            var _this = this;

            this.set('navItem', _ghostAdminModelsNavigationItem['default'].create({ label: 'Test', url: '/url' }));

            var deleteActionCallCount = 0;
            this.on('deleteItem', function (navItem) {
                (0, _chai.expect)(navItem).to.equal(_this.get('navItem'));
                deleteActionCallCount++;
            });

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
                                'column': 70
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
                    statements: [['inline', 'gh-navitem', [], ['navItem', ['subexpr', '@mut', [['get', 'navItem', ['loc', [null, [1, 21], [1, 28]]]]], [], []], 'baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [1, 37], [1, 44]]]]], [], []], 'deleteItem', 'deleteItem'], ['loc', [null, [1, 0], [1, 70]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            this.$('.gh-blognav-delete').trigger('click');

            (0, _chai.expect)(deleteActionCallCount).to.equal(1);
        });

        (0, _emberMocha.it)('triggers add action', function () {
            this.set('navItem', _ghostAdminModelsNavigationItem['default'].create({ label: 'Test', url: '/url', isNew: true }));

            var addActionCallCount = 0;
            this.on('add', function () {
                addActionCallCount++;
            });

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
                                'column': 60
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
                    statements: [['inline', 'gh-navitem', [], ['navItem', ['subexpr', '@mut', [['get', 'navItem', ['loc', [null, [1, 21], [1, 28]]]]], [], []], 'baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [1, 37], [1, 44]]]]], [], []], 'addItem', 'add'], ['loc', [null, [1, 0], [1, 60]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            this.$('.gh-blognav-add').trigger('click');

            (0, _chai.expect)(addActionCallCount).to.equal(1);
        });

        (0, _emberMocha.it)('triggers update action', function () {
            this.set('navItem', _ghostAdminModelsNavigationItem['default'].create({ label: 'Test', url: '/url' }));

            var updateActionCallCount = 0;
            this.on('update', function () {
                updateActionCallCount++;
            });

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
                    statements: [['inline', 'gh-navitem', [], ['navItem', ['subexpr', '@mut', [['get', 'navItem', ['loc', [null, [1, 21], [1, 28]]]]], [], []], 'baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [1, 37], [1, 44]]]]], [], []], 'updateUrl', 'update'], ['loc', [null, [1, 0], [1, 65]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            this.$('.gh-blognav-url input').trigger('blur');

            (0, _chai.expect)(updateActionCallCount).to.equal(1);
        });

        (0, _emberMocha.it)('displays inline errors', function () {
            this.set('navItem', _ghostAdminModelsNavigationItem['default'].create({ label: '', url: '' }));
            this.get('navItem').validate();

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
                                'column': 46
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
                    statements: [['inline', 'gh-navitem', [], ['navItem', ['subexpr', '@mut', [['get', 'navItem', ['loc', [null, [1, 21], [1, 28]]]]], [], []], 'baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [1, 37], [1, 44]]]]], [], []]], ['loc', [null, [1, 0], [1, 46]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $item = this.$('.gh-blognav-item');

            (0, _chai.expect)($item.hasClass('gh-blognav-item--error')).to.be['true'];
            (0, _chai.expect)($item.find('.gh-blognav-label').hasClass('error')).to.be['true'];
            (0, _chai.expect)($item.find('.gh-blognav-label .response').text().trim()).to.equal('You must specify a label');
            (0, _chai.expect)($item.find('.gh-blognav-url').hasClass('error')).to.be['true'];
            (0, _chai.expect)($item.find('.gh-blognav-url .response').text().trim()).to.equal('You must specify a URL or relative path');
        });
    });
});
/* jshint expr:true */