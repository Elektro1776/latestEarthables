define('ghost-admin/tests/integration/components/gh-validation-status-container-test', ['exports', 'chai', 'ember-mocha', 'ember-object', 'ember-data'], function (exports, _chai, _emberMocha, _emberObject, _emberData) {
    var Errors = _emberData['default'].Errors;

    (0, _emberMocha.describeComponent)('gh-validation-status-container', 'Integration: Component: gh-validation-status-container', {
        integration: true
    }, function () {
        beforeEach(function () {
            var testObject = _emberObject['default'].create();
            testObject.set('name', 'Test');
            testObject.set('hasValidated', []);
            testObject.set('errors', Errors.create());

            this.set('testObject', testObject);
        });

        (0, _emberMocha.it)('has no success/error class by default', function () {
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
                                    'line': 3,
                                    'column': 16
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
                                'line': 4,
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
                        var el1 = dom.createTextNode('\n');
                        dom.appendChild(el0, el1);
                        var el1 = dom.createComment('');
                        dom.appendChild(el0, el1);
                        var el1 = dom.createTextNode('            ');
                        dom.appendChild(el0, el1);
                        return el0;
                    },
                    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                        var morphs = new Array(1);
                        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                        return morphs;
                    },
                    statements: [['block', 'gh-validation-status-container', [], ['class', 'gh-test', 'property', 'name', 'errors', ['subexpr', '@mut', [['get', 'testObject.errors', ['loc', [null, [2, 89], [2, 106]]]]], [], []], 'hasValidated', ['subexpr', '@mut', [['get', 'testObject.hasValidated', ['loc', [null, [2, 120], [2, 143]]]]], [], []]], 0, null, ['loc', [null, [2, 16], [3, 51]]]]],
                    locals: [],
                    templates: [child0]
                };
            })()));
            (0, _chai.expect)(this.$('.gh-test')).to.have.length(1);
            (0, _chai.expect)(this.$('.gh-test').hasClass('success')).to.be['false'];
            (0, _chai.expect)(this.$('.gh-test').hasClass('error')).to.be['false'];
        });

        (0, _emberMocha.it)('has success class when valid', function () {
            this.get('testObject.hasValidated').push('name');

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
                                    'line': 3,
                                    'column': 16
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
                                'line': 4,
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
                        var el1 = dom.createTextNode('\n');
                        dom.appendChild(el0, el1);
                        var el1 = dom.createComment('');
                        dom.appendChild(el0, el1);
                        var el1 = dom.createTextNode('            ');
                        dom.appendChild(el0, el1);
                        return el0;
                    },
                    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                        var morphs = new Array(1);
                        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                        return morphs;
                    },
                    statements: [['block', 'gh-validation-status-container', [], ['class', 'gh-test', 'property', 'name', 'errors', ['subexpr', '@mut', [['get', 'testObject.errors', ['loc', [null, [2, 89], [2, 106]]]]], [], []], 'hasValidated', ['subexpr', '@mut', [['get', 'testObject.hasValidated', ['loc', [null, [2, 120], [2, 143]]]]], [], []]], 0, null, ['loc', [null, [2, 16], [3, 51]]]]],
                    locals: [],
                    templates: [child0]
                };
            })()));
            (0, _chai.expect)(this.$('.gh-test')).to.have.length(1);
            (0, _chai.expect)(this.$('.gh-test').hasClass('success')).to.be['true'];
            (0, _chai.expect)(this.$('.gh-test').hasClass('error')).to.be['false'];
        });

        (0, _emberMocha.it)('has error class when invalid', function () {
            this.get('testObject.hasValidated').push('name');
            this.get('testObject.errors').add('name', 'has error');

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
                                    'line': 3,
                                    'column': 16
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
                                'line': 4,
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
                        var el1 = dom.createTextNode('\n');
                        dom.appendChild(el0, el1);
                        var el1 = dom.createComment('');
                        dom.appendChild(el0, el1);
                        var el1 = dom.createTextNode('            ');
                        dom.appendChild(el0, el1);
                        return el0;
                    },
                    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                        var morphs = new Array(1);
                        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                        return morphs;
                    },
                    statements: [['block', 'gh-validation-status-container', [], ['class', 'gh-test', 'property', 'name', 'errors', ['subexpr', '@mut', [['get', 'testObject.errors', ['loc', [null, [2, 89], [2, 106]]]]], [], []], 'hasValidated', ['subexpr', '@mut', [['get', 'testObject.hasValidated', ['loc', [null, [2, 120], [2, 143]]]]], [], []]], 0, null, ['loc', [null, [2, 16], [3, 51]]]]],
                    locals: [],
                    templates: [child0]
                };
            })()));
            (0, _chai.expect)(this.$('.gh-test')).to.have.length(1);
            (0, _chai.expect)(this.$('.gh-test').hasClass('success')).to.be['false'];
            (0, _chai.expect)(this.$('.gh-test').hasClass('error')).to.be['true'];
        });

        (0, _emberMocha.it)('still renders if hasValidated is undefined', function () {
            this.set('testObject.hasValidated', undefined);

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
                                    'line': 3,
                                    'column': 16
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
                                'line': 4,
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
                        var el1 = dom.createTextNode('\n');
                        dom.appendChild(el0, el1);
                        var el1 = dom.createComment('');
                        dom.appendChild(el0, el1);
                        var el1 = dom.createTextNode('            ');
                        dom.appendChild(el0, el1);
                        return el0;
                    },
                    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                        var morphs = new Array(1);
                        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                        return morphs;
                    },
                    statements: [['block', 'gh-validation-status-container', [], ['class', 'gh-test', 'property', 'name', 'errors', ['subexpr', '@mut', [['get', 'testObject.errors', ['loc', [null, [2, 89], [2, 106]]]]], [], []], 'hasValidated', ['subexpr', '@mut', [['get', 'testObject.hasValidated', ['loc', [null, [2, 120], [2, 143]]]]], [], []]], 0, null, ['loc', [null, [2, 16], [3, 51]]]]],
                    locals: [],
                    templates: [child0]
                };
            })()));
            (0, _chai.expect)(this.$('.gh-test')).to.have.length(1);
        });
    });
});
/* jshint expr:true */