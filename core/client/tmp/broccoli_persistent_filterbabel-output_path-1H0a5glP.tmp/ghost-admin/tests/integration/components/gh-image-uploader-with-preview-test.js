define('ghost-admin/tests/integration/components/gh-image-uploader-with-preview-test', ['exports', 'chai', 'ember-mocha', 'ember-runloop', 'sinon'], function (exports, _chai, _emberMocha, _emberRunloop, _sinon) {

    (0, _emberMocha.describeComponent)('gh-image-uploader-with-preview', 'Integration: Component: gh-image-uploader-with-preview', {
        integration: true
    }, function () {
        (0, _emberMocha.it)('renders image if provided', function () {
            this.set('image', 'http://example.com/test.png');

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
                    statements: [['inline', 'gh-image-uploader-with-preview', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 39], [1, 44]]]]], [], []]], ['loc', [null, [1, 0], [1, 46]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _chai.expect)(this.$('.gh-image-uploader.-with-image').length).to.equal(1);
            (0, _chai.expect)(this.$('img').attr('src')).to.equal('http://example.com/test.png');
        });

        (0, _emberMocha.it)('renders upload form when no image provided', function () {
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
                    statements: [['inline', 'gh-image-uploader-with-preview', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 39], [1, 44]]]]], [], []]], ['loc', [null, [1, 0], [1, 46]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _chai.expect)(this.$('input[type="file"]').length).to.equal(1);
        });

        (0, _emberMocha.it)('triggers remove action when delete icon is clicked', function () {
            var _this = this;

            var remove = _sinon['default'].spy();
            this.set('remove', remove);
            this.set('image', 'http://example.com/test.png');

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
                    statements: [['inline', 'gh-image-uploader-with-preview', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 39], [1, 44]]]]], [], []], 'remove', ['subexpr', '@mut', [['get', 'remove', ['loc', [null, [1, 52], [1, 58]]]]], [], []]], ['loc', [null, [1, 0], [1, 60]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _emberRunloop['default'])(function () {
                _this.$('.icon-trash').click();
            });

            (0, _chai.expect)(remove.calledOnce).to.be['true'];
        });
    });
});
/* jshint expr:true */