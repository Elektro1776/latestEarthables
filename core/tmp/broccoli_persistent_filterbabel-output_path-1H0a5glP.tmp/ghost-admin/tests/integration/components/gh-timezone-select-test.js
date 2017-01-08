define('ghost-admin/tests/integration/components/gh-timezone-select-test', ['exports', 'chai', 'ember-mocha', 'ember-runloop', 'ember-test-helpers/wait', 'sinon'], function (exports, _chai, _emberMocha, _emberRunloop, _emberTestHelpersWait, _sinon) {

    (0, _emberMocha.describeComponent)('gh-timezone-select', 'Integration: Component: gh-timezone-select', {
        integration: true
    }, function () {
        beforeEach(function () {
            this.set('availableTimezones', [{ name: 'Pacific/Pago_Pago', label: '(GMT -11:00) Midway Island, Samoa' }, { name: 'Etc/UTC', label: '(GMT) UTC' }, { name: 'Pacific/Kwajalein', label: '(GMT +12:00) International Date Line West' }]);
            this.set('activeTimezone', 'Etc/UTC');
        });

        (0, _emberMocha.it)('renders', function () {
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
                                'column': 47
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
                    statements: [['inline', 'gh-timezone-select', [], ['availableTimezones', ['subexpr', '@mut', [['get', 'availableTimezones', ['loc', [null, [2, 35], [2, 53]]]]], [], []], 'activeTimezone', ['subexpr', '@mut', [['get', 'activeTimezone', ['loc', [null, [3, 31], [3, 45]]]]], [], []]], ['loc', [null, [1, 0], [3, 47]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _chai.expect)(this.$(), 'top-level elements').to.have.length(1);
            (0, _chai.expect)(this.$('option'), 'number of options').to.have.length(3);
            (0, _chai.expect)(this.$('select').val(), 'selected option value').to.equal('Etc/UTC');
        });

        (0, _emberMocha.it)('handles an unknown timezone', function () {
            this.set('activeTimezone', 'Europe/London');

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
                                'column': 47
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
                    statements: [['inline', 'gh-timezone-select', [], ['availableTimezones', ['subexpr', '@mut', [['get', 'availableTimezones', ['loc', [null, [2, 35], [2, 53]]]]], [], []], 'activeTimezone', ['subexpr', '@mut', [['get', 'activeTimezone', ['loc', [null, [3, 31], [3, 45]]]]], [], []]], ['loc', [null, [1, 0], [3, 47]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            // we have an additional blank option at the top
            (0, _chai.expect)(this.$('option'), 'number of options').to.have.length(4);
            // blank option is selected
            (0, _chai.expect)(this.$('select').val(), 'selected option value').to.equal('');
            // we indicate the manual override
            (0, _chai.expect)(this.$('p').text()).to.match(/Your timezone has been automatically set to Europe\/London/);
        });

        (0, _emberMocha.it)('triggers update action on change', function (done) {
            var _this = this;

            var update = _sinon['default'].spy();
            this.set('update', update);

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
                                'line': 4,
                                'column': 40
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
                    statements: [['inline', 'gh-timezone-select', [], ['availableTimezones', ['subexpr', '@mut', [['get', 'availableTimezones', ['loc', [null, [2, 35], [2, 53]]]]], [], []], 'activeTimezone', ['subexpr', '@mut', [['get', 'activeTimezone', ['loc', [null, [3, 31], [3, 45]]]]], [], []], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [4, 31], [4, 37]]]]], [], ['loc', [null, [4, 23], [4, 38]]]]], ['loc', [null, [1, 0], [4, 40]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _emberRunloop['default'])(function () {
                _this.$('select').val('Pacific/Pago_Pago').change();
            });

            (0, _emberTestHelpersWait['default'])().then(function () {
                (0, _chai.expect)(update.calledOnce, 'update was called once').to.be['true'];
                (0, _chai.expect)(update.firstCall.args[0].name, 'update was passed new timezone').to.equal('Pacific/Pago_Pago');
                done();
            });
        });

        // TODO: mock clock service, fake the time, test we have the correct
        // local time and it changes alongside selection changes
        (0, _emberMocha.it)('renders local time');
    });
});
/* jshint expr:true */