define('ghost-admin/tests/integration/components/gh-profile-image-test', ['exports', 'chai', 'ember-mocha', 'ember-service', 'ember-runloop', 'pretender', 'ember-test-helpers/wait'], function (exports, _chai, _emberMocha, _emberService, _emberRunloop, _pretender, _emberTestHelpersWait) {

    var pathsStub = _emberService['default'].extend({
        url: {
            api: function api() {
                return '';
            },
            asset: function asset(src) {
                return src;
            }
        }
    });

    var stubKnownGravatar = function stubKnownGravatar(server) {
        server.get('http://www.gravatar.com/avatar/:md5', function () {
            return [200, { 'Content-Type': 'image/png' }, ''];
        });
    };

    var stubUnknownGravatar = function stubUnknownGravatar(server) {
        server.get('http://www.gravatar.com/avatar/:md5', function () {
            return [404, {}, ''];
        });
    };

    (0, _emberMocha.describeComponent)('gh-profile-image', 'Integration: Component: gh-profile-image', {
        integration: true
    }, function () {
        var server = undefined;

        beforeEach(function () {
            this.register('service:ghost-paths', pathsStub);
            this.inject.service('ghost-paths', { as: 'ghost-paths' });

            server = new _pretender['default']();
            stubKnownGravatar(server);
        });

        afterEach(function () {
            server.shutdown();
        });

        (0, _emberMocha.it)('renders', function () {
            this.set('email', '');

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
                    statements: [['inline', 'gh-profile-image', [], ['email', ['subexpr', '@mut', [['get', 'email', ['loc', [null, [2, 41], [2, 46]]]]], [], []]], ['loc', [null, [2, 16], [2, 48]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _chai.expect)(this.$()).to.have.length(1);
        });

        (0, _emberMocha.it)('renders and tears down ok with fileStorage:false', function () {
            this.set('fileStorage', false);

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
                    statements: [['inline', 'gh-profile-image', [], ['fileStorage', ['subexpr', '@mut', [['get', 'fileStorage', ['loc', [null, [2, 47], [2, 58]]]]], [], []]], ['loc', [null, [2, 16], [2, 60]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _chai.expect)(this.$()).to.have.length(1);
            (0, _chai.expect)(this.$('input')).to.have.length(0);
        }), (0, _emberMocha.it)('renders default image if no email supplied', function () {
            this.set('email', null);

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
                    statements: [['inline', 'gh-profile-image', [], ['email', ['subexpr', '@mut', [['get', 'email', ['loc', [null, [2, 41], [2, 46]]]]], [], []], 'size', 100, 'debounce', 50], ['loc', [null, [2, 16], [2, 69]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _chai.expect)(this.$('.gravatar-img').attr('style'), 'gravatar image style').to.be.blank;
        });

        (0, _emberMocha.it)('renders the gravatar if valid email supplied', function (done) {
            var _this = this;

            var email = 'test@example.com';
            var expectedUrl = '//www.gravatar.com/avatar/' + md5(email) + '?s=100&d=404';

            this.set('email', email);

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
                    statements: [['inline', 'gh-profile-image', [], ['email', ['subexpr', '@mut', [['get', 'email', ['loc', [null, [2, 41], [2, 46]]]]], [], []], 'size', 100, 'debounce', 50], ['loc', [null, [2, 16], [2, 69]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            // wait for the ajax request to complete
            (0, _emberTestHelpersWait['default'])().then(function () {
                (0, _chai.expect)(_this.$('.gravatar-img').attr('style'), 'gravatar image style').to.equal('background-image: url(' + expectedUrl + ')');
                done();
            });
        });

        (0, _emberMocha.it)('doesn\'t add background url if gravatar image doesn\'t exist', function (done) {
            var _this2 = this;

            stubUnknownGravatar(server);

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
                    statements: [['inline', 'gh-profile-image', [], ['email', 'test@example.com', 'size', 100, 'debounce', 50], ['loc', [null, [2, 16], [2, 82]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _emberTestHelpersWait['default'])().then(function () {
                (0, _chai.expect)(_this2.$('.gravatar-img').attr('style'), 'gravatar image style').to.be.blank;
                done();
            });
        });

        (0, _emberMocha.it)('throttles gravatar loading as email is changed', function (done) {
            var _this3 = this;

            var email = 'test@example.com';
            var expectedUrl = '//www.gravatar.com/avatar/' + md5(email) + '?s=100&d=404';

            this.set('email', 'test');

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
                    statements: [['inline', 'gh-profile-image', [], ['email', ['subexpr', '@mut', [['get', 'email', ['loc', [null, [2, 41], [2, 46]]]]], [], []], 'size', 100, 'debounce', 300], ['loc', [null, [2, 16], [2, 70]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _emberRunloop['default'])(function () {
                _this3.set('email', email);
            });

            (0, _chai.expect)(this.$('.gravatar-img').attr('style'), '.gravatar-img background not immediately changed on email change').to.be.blank;

            _emberRunloop['default'].later(this, function () {
                (0, _chai.expect)(this.$('.gravatar-img').attr('style'), '.gravatar-img background still not changed before debounce timeout').to.be.blank;
            }, 250);

            _emberRunloop['default'].later(this, function () {
                (0, _chai.expect)(this.$('.gravatar-img').attr('style'), '.gravatar-img background changed after debounce timeout').to.equal('background-image: url(' + expectedUrl + ')');
                done();
            }, 400);
        });
    });
});
/* jshint expr:true */
/* global md5 */