define('ghost-admin/tests/integration/components/gh-search-input-test', ['exports', 'chai', 'ember-mocha', 'ember-runloop', 'pretender', 'ember-test-helpers/wait', 'sinon'], function (exports, _chai, _emberMocha, _emberRunloop, _pretender, _emberTestHelpersWait, _sinon) {

    var versionMismatchResponse = function versionMismatchResponse() {
        return [400, { 'Content-Type': 'application/json' }, JSON.stringify({
            errors: [{
                errorType: 'VersionMismatchError',
                statusCode: 400
            }]
        })];
    };

    (0, _emberMocha.describeComponent)('gh-search-input', 'Integration: Component: gh-search-input', {
        integration: true
    }, function () {
        var server = undefined;

        beforeEach(function () {
            server = new _pretender['default']();
        });

        afterEach(function () {
            server.shutdown();
        });

        (0, _emberMocha.it)('renders', function () {
            // renders the component on the page
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
                                'column': 19
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
                    statements: [['content', 'gh-search-input', ['loc', [null, [1, 0], [1, 19]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _chai.expect)(this.$('.ember-power-select-search input')).to.have.length(1);
        });

        (0, _emberMocha.it)('opens the dropdown on text entry', function (done) {
            var _this = this;

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
                                'column': 19
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
                    statements: [['content', 'gh-search-input', ['loc', [null, [1, 0], [1, 19]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            // enter text to trigger search
            (0, _emberRunloop['default'])(function () {
                _this.$('input[type="search"]').val('test').trigger('input');
            });

            (0, _emberTestHelpersWait['default'])().then(function () {
                (0, _chai.expect)(_this.$('.ember-basic-dropdown-content').length).to.equal(1);
                done();
            });
        });
    });
});
/* jshint expr:true */