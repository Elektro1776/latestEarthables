define('ghost-admin/tests/integration/components/gh-trim-focus-input-test', ['exports', 'chai', 'ember-mocha', 'ember-runloop'], function (exports, _chai, _emberMocha, _emberRunloop) {

    (0, _emberMocha.describeComponent)('gh-trim-focus-input', 'Integration: Component: gh-trim-focus-input', {
        integration: true
    }, function () {
        (0, _emberMocha.it)('trims value on focusOut', function () {
            var _this = this;

            this.set('text', 'some random stuff    ');
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
                                'column': 55
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
                    statements: [['inline', 'gh-trim-focus-input', [['get', 'text', ['loc', [null, [1, 22], [1, 26]]]]], ['update', ['subexpr', 'action', [['subexpr', 'mut', [['get', 'text', ['loc', [null, [1, 47], [1, 51]]]]], [], ['loc', [null, [1, 42], [1, 52]]]]], [], ['loc', [null, [1, 34], [1, 53]]]]], ['loc', [null, [1, 0], [1, 55]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _emberRunloop['default'])(function () {
                _this.$('.gh-input').trigger('focusout');
            });

            (0, _chai.expect)(this.get('text')).to.equal('some random stuff');
        });

        (0, _emberMocha.it)('does not have the autofocus attribute if not set to focus', function () {
            this.set('text', 'some text');
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
                    statements: [['inline', 'gh-trim-focus-input', [['get', 'text', ['loc', [null, [1, 22], [1, 26]]]]], ['shouldFocus', false], ['loc', [null, [1, 0], [1, 46]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$('.gh-input').attr('autofocus')).to.not.be.ok;
        });

        (0, _emberMocha.it)('has the autofocus attribute if set to focus', function () {
            this.set('text', 'some text');
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
                                'column': 45
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
                    statements: [['inline', 'gh-trim-focus-input', [['get', 'text', ['loc', [null, [1, 22], [1, 26]]]]], ['shouldFocus', true], ['loc', [null, [1, 0], [1, 45]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$('.gh-input').attr('autofocus')).to.be.ok;
        });

        (0, _emberMocha.it)('handles undefined values', function () {
            this.set('text', undefined);
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
                                'column': 45
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
                    statements: [['inline', 'gh-trim-focus-input', [['get', 'text', ['loc', [null, [1, 22], [1, 26]]]]], ['shouldFocus', true], ['loc', [null, [1, 0], [1, 45]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$('.gh-input').attr('autofocus')).to.be.ok;
        });

        (0, _emberMocha.it)('handles non-string values', function () {
            this.set('text', 10);
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
                                'column': 45
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
                    statements: [['inline', 'gh-trim-focus-input', [['get', 'text', ['loc', [null, [1, 22], [1, 26]]]]], ['shouldFocus', true], ['loc', [null, [1, 0], [1, 45]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$('.gh-input').val()).to.equal('10');
        });
    });
});