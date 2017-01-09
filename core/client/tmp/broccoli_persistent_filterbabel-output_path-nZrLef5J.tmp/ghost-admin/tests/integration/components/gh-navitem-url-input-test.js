define('ghost-admin/tests/integration/components/gh-navitem-url-input-test', ['exports', 'chai', 'ember-mocha', 'ember'], function (exports, _chai, _emberMocha, _ember) {
    var $ = _ember['default'].$;
    var run = _ember['default'].run;

    // we want baseUrl to match the running domain so relative URLs are
    // handled as expected (browser auto-sets the domain when using a.href)
    var currentUrl = window.location.protocol + '//' + window.location.host + '/';

    (0, _emberMocha.describeComponent)('gh-navitem-url-input', 'Integration: Component: gh-navitem-url-input', {
        integration: true
    }, function () {
        beforeEach(function () {
            // set defaults
            this.set('baseUrl', currentUrl);
            this.set('url', '');
            this.set('isNew', false);
            this.on('clearErrors', function () {
                return null;
            });
        });

        (0, _emberMocha.it)('renders correctly with blank url', function () {
            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            (0, _chai.expect)($input).to.have.length(1);
            (0, _chai.expect)($input.hasClass('gh-input')).to.be['true'];
            (0, _chai.expect)($input.val()).to.equal(currentUrl);
        });

        (0, _emberMocha.it)('renders correctly with relative urls', function () {
            this.set('url', '/about');
            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            (0, _chai.expect)($input.val()).to.equal(currentUrl + 'about');

            this.set('url', '/about#contact');
            (0, _chai.expect)($input.val()).to.equal(currentUrl + 'about#contact');
        });

        (0, _emberMocha.it)('renders correctly with absolute urls', function () {
            this.set('url', 'https://example.com:2368/#test');
            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            (0, _chai.expect)($input.val()).to.equal('https://example.com:2368/#test');

            this.set('url', 'mailto:test@example.com');
            (0, _chai.expect)($input.val()).to.equal('mailto:test@example.com');

            this.set('url', 'tel:01234-5678-90');
            (0, _chai.expect)($input.val()).to.equal('tel:01234-5678-90');

            this.set('url', '//protocol-less-url.com');
            (0, _chai.expect)($input.val()).to.equal('//protocol-less-url.com');

            this.set('url', '#anchor');
            (0, _chai.expect)($input.val()).to.equal('#anchor');
        });

        (0, _emberMocha.it)('deletes base URL on backspace', function () {
            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            (0, _chai.expect)($input.val()).to.equal(currentUrl);
            run(function () {
                // TODO: why is ember's keyEvent helper not available here?
                var e = $.Event('keydown');
                e.keyCode = 8;
                $input.trigger(e);
            });
            (0, _chai.expect)($input.val()).to.equal('');
        });

        (0, _emberMocha.it)('deletes base URL on delete', function () {
            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            (0, _chai.expect)($input.val()).to.equal(currentUrl);
            run(function () {
                // TODO: why is ember's keyEvent helper not available here?
                var e = $.Event('keydown');
                e.keyCode = 46;
                $input.trigger(e);
            });
            (0, _chai.expect)($input.val()).to.equal('');
        });

        (0, _emberMocha.it)('adds base url to relative urls on blur', function () {
            this.on('updateUrl', function () {
                return null;
            });
            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            run(function () {
                $input.val('/about').trigger('input');
            });
            run(function () {
                $input.trigger('blur');
            });

            (0, _chai.expect)($input.val()).to.equal(currentUrl + 'about');
        });

        (0, _emberMocha.it)('adds "mailto:" to email addresses on blur', function () {
            this.on('updateUrl', function () {
                return null;
            });
            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            run(function () {
                $input.val('test@example.com').trigger('input');
            });
            run(function () {
                $input.trigger('blur');
            });

            (0, _chai.expect)($input.val()).to.equal('mailto:test@example.com');

            // ensure we don't double-up on the mailto:
            run(function () {
                $input.trigger('blur');
            });
            (0, _chai.expect)($input.val()).to.equal('mailto:test@example.com');
        });

        (0, _emberMocha.it)('doesn\'t add base url to invalid urls on blur', function () {
            this.on('updateUrl', function () {
                return null;
            });
            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            var changeValue = function changeValue(value) {
                run(function () {
                    $input.val(value).trigger('input').trigger('blur');
                });
            };

            changeValue('with spaces');
            (0, _chai.expect)($input.val()).to.equal('with spaces');

            changeValue('/with spaces');
            (0, _chai.expect)($input.val()).to.equal('/with spaces');
        });

        (0, _emberMocha.it)('doesn\'t mangle invalid urls on blur', function () {
            this.on('updateUrl', function () {
                return null;
            });
            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            run(function () {
                $input.val(currentUrl + ' /test').trigger('input').trigger('blur');
            });

            (0, _chai.expect)($input.val()).to.equal(currentUrl + ' /test');
        });

        (0, _emberMocha.it)('triggers "change" action on blur', function () {
            var changeActionCallCount = 0;
            this.on('updateUrl', function () {
                changeActionCallCount++;
            });

            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            $input.trigger('blur');

            (0, _chai.expect)(changeActionCallCount).to.equal(1);
        });

        (0, _emberMocha.it)('triggers "change" action on enter', function () {
            var changeActionCallCount = 0;
            this.on('updateUrl', function () {
                changeActionCallCount++;
            });

            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            run(function () {
                // TODO: why is ember's keyEvent helper not available here?
                var e = $.Event('keypress');
                e.keyCode = 13;
                $input.trigger(e);
            });

            (0, _chai.expect)(changeActionCallCount).to.equal(1);
        });

        (0, _emberMocha.it)('triggers "change" action on CMD-S', function () {
            var changeActionCallCount = 0;
            this.on('updateUrl', function () {
                changeActionCallCount++;
            });

            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            run(function () {
                // TODO: why is ember's keyEvent helper not available here?
                var e = $.Event('keydown');
                e.keyCode = 83;
                e.metaKey = true;
                $input.trigger(e);
            });

            (0, _chai.expect)(changeActionCallCount).to.equal(1);
        });

        (0, _emberMocha.it)('sends absolute urls straight through to change action', function () {
            var expectedUrl = '';

            this.on('updateUrl', function (url) {
                (0, _chai.expect)(url).to.equal(expectedUrl);
            });

            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            var testUrl = function testUrl(url) {
                expectedUrl = url;
                run(function () {
                    $input.val(url).trigger('input');
                });
                run(function () {
                    $input.trigger('blur');
                });
            };

            testUrl('http://example.com');
            testUrl('http://example.com/');
            testUrl('https://example.com');
            testUrl('//example.com');
            testUrl('//localhost:1234');
            testUrl('#anchor');
            testUrl('mailto:test@example.com');
            testUrl('tel:12345-567890');
            testUrl('javascript:alert("testing");');
        });

        (0, _emberMocha.it)('strips base url from relative urls before sending to change action', function () {
            var expectedUrl = '';

            this.on('updateUrl', function (url) {
                (0, _chai.expect)(url).to.equal(expectedUrl);
            });

            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            var testUrl = function testUrl(url) {
                expectedUrl = '/' + url;
                run(function () {
                    $input.val('' + currentUrl + url).trigger('input');
                });
                run(function () {
                    $input.trigger('blur');
                });
            };

            testUrl('about/');
            testUrl('about#contact');
            testUrl('test/nested/');
        });

        (0, _emberMocha.it)('handles links to subdomains of blog domain', function () {
            var expectedUrl = '';

            this.set('baseUrl', 'http://example.com/');

            this.on('updateUrl', function (url) {
                (0, _chai.expect)(url).to.equal(expectedUrl);
            });

            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            expectedUrl = 'http://test.example.com/';
            run(function () {
                $input.val(expectedUrl).trigger('input').trigger('blur');
            });
            (0, _chai.expect)($input.val()).to.equal(expectedUrl);
        });

        (0, _emberMocha.it)('adds trailing slash to relative URL', function () {
            var expectedUrl = '';

            this.on('updateUrl', function (url) {
                (0, _chai.expect)(url).to.equal(expectedUrl);
            });

            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            var testUrl = function testUrl(url) {
                expectedUrl = '/' + url + '/';
                run(function () {
                    $input.val('' + currentUrl + url).trigger('input');
                });
                run(function () {
                    $input.trigger('blur');
                });
            };

            testUrl('about');
            testUrl('test/nested');
        });

        (0, _emberMocha.it)('does not add trailing slash on relative URL with [.?#]', function () {
            var expectedUrl = '';

            this.on('updateUrl', function (url) {
                (0, _chai.expect)(url).to.equal(expectedUrl);
            });

            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            var testUrl = function testUrl(url) {
                expectedUrl = '/' + url;
                run(function () {
                    $input.val('' + currentUrl + url).trigger('input');
                });
                run(function () {
                    $input.trigger('blur');
                });
            };

            testUrl('about#contact');
            testUrl('test/nested.svg');
            testUrl('test?gho=sties');
            testUrl('test/nested?sli=mer');
        });

        (0, _emberMocha.it)('does not add trailing slash on non-relative URLs', function () {
            var expectedUrl = '';

            this.on('updateUrl', function (url) {
                (0, _chai.expect)(url).to.equal(expectedUrl);
            });

            this.render(_ember['default'].HTMLBars.template((function () {
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
                    statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 47], [2, 54]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 59], [2, 62]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 69], [2, 74]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 106], [2, 128]]]]], ['loc', [null, [2, 16], [2, 130]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $input = this.$('input');

            var testUrl = function testUrl(url) {
                expectedUrl = '/' + url;
                run(function () {
                    $input.val('' + currentUrl + url).trigger('input');
                });
                run(function () {
                    $input.trigger('blur');
                });
            };

            testUrl('http://woo.ff/test');
            testUrl('http://me.ow:2342/nested/test');
            testUrl('https://wro.om/car#race');
            testUrl('https://kabo.om/explosion?really=now');
        });

        describe('with sub-folder baseUrl', function () {
            beforeEach(function () {
                this.set('baseUrl', currentUrl + 'blog/');
            });

            (0, _emberMocha.it)('handles URLs relative to base url', function () {
                var expectedUrl = '';

                this.on('updateUrl', function (url) {
                    (0, _chai.expect)(url).to.equal(expectedUrl);
                });

                this.render(_ember['default'].HTMLBars.template((function () {
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
                            var el1 = dom.createTextNode('\n                    ');
                            dom.appendChild(el0, el1);
                            var el1 = dom.createComment('');
                            dom.appendChild(el0, el1);
                            var el1 = dom.createTextNode('\n                ');
                            dom.appendChild(el0, el1);
                            return el0;
                        },
                        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                            var morphs = new Array(1);
                            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                            return morphs;
                        },
                        statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 51], [2, 58]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 63], [2, 66]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 73], [2, 78]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 110], [2, 132]]]]], ['loc', [null, [2, 20], [2, 134]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                var $input = this.$('input');

                var testUrl = function testUrl(url) {
                    expectedUrl = url;
                    run(function () {
                        $input.val(currentUrl + 'blog' + url).trigger('input');
                    });
                    run(function () {
                        $input.trigger('blur');
                    });
                };

                testUrl('/about/');
                testUrl('/about#contact');
                testUrl('/test/nested/');
            });

            (0, _emberMocha.it)('handles URLs relative to base host', function () {
                var expectedUrl = '';

                this.on('updateUrl', function (url) {
                    (0, _chai.expect)(url).to.equal(expectedUrl);
                });

                this.render(_ember['default'].HTMLBars.template((function () {
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
                            var el1 = dom.createTextNode('\n                    ');
                            dom.appendChild(el0, el1);
                            var el1 = dom.createComment('');
                            dom.appendChild(el0, el1);
                            var el1 = dom.createTextNode('\n                ');
                            dom.appendChild(el0, el1);
                            return el0;
                        },
                        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                            var morphs = new Array(1);
                            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                            return morphs;
                        },
                        statements: [['inline', 'gh-navitem-url-input', [], ['baseUrl', ['subexpr', '@mut', [['get', 'baseUrl', ['loc', [null, [2, 51], [2, 58]]]]], [], []], 'url', ['subexpr', '@mut', [['get', 'url', ['loc', [null, [2, 63], [2, 66]]]]], [], []], 'isNew', ['subexpr', '@mut', [['get', 'isNew', ['loc', [null, [2, 73], [2, 78]]]]], [], []], 'change', 'updateUrl', 'clearErrors', ['subexpr', 'action', ['clearErrors'], [], ['loc', [null, [2, 110], [2, 132]]]]], ['loc', [null, [2, 20], [2, 134]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                var $input = this.$('input');

                var testUrl = function testUrl(url) {
                    expectedUrl = url;
                    run(function () {
                        $input.val(url).trigger('input');
                    });
                    run(function () {
                        $input.trigger('blur');
                    });
                };

                testUrl('http://' + window.location.host);
                testUrl('https://' + window.location.host);
                testUrl('http://' + window.location.host + '/');
                testUrl('https://' + window.location.host + '/');
                testUrl('http://' + window.location.host + '/test');
                testUrl('https://' + window.location.host + '/test');
                testUrl('http://' + window.location.host + '/#test');
                testUrl('https://' + window.location.host + '/#test');
                testUrl('http://' + window.location.host + '/another/folder');
                testUrl('https://' + window.location.host + '/another/folder');
            });
        });
    });
});
/* jshint scripturl:true */