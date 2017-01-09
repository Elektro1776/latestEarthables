define('ghost-admin/tests/integration/components/gh-alerts-test', ['exports', 'chai', 'ember-mocha', 'ember-runloop', 'ember-service', 'ember-array/utils'], function (exports, _chai, _emberMocha, _emberRunloop, _emberService, _emberArrayUtils) {

    var notificationsStub = _emberService['default'].extend({
        alerts: (0, _emberArrayUtils.A)()
    });

    (0, _emberMocha.describeComponent)('gh-alerts', 'Integration: Component: gh-alerts', {
        integration: true
    }, function () {
        beforeEach(function () {
            this.register('service:notifications', notificationsStub);
            this.inject.service('notifications', { as: 'notifications' });

            this.set('notifications.alerts', [{ message: 'First', type: 'error' }, { message: 'Second', type: 'warn' }]);
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
                                'line': 1,
                                'column': 13
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
                    statements: [['content', 'gh-alerts', ['loc', [null, [1, 0], [1, 13]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$('.gh-alerts').length).to.equal(1);
            (0, _chai.expect)(this.$('.gh-alerts').children().length).to.equal(2);

            this.set('notifications.alerts', (0, _emberArrayUtils.A)());
            (0, _chai.expect)(this.$('.gh-alerts').children().length).to.equal(0);
        });

        (0, _emberMocha.it)('triggers "notify" action when message count changes', function () {
            var expectedCount = 0;

            // test double for notify action
            this.set('notify', function (count) {
                return (0, _chai.expect)(count).to.equal(expectedCount);
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
                                'column': 36
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
                    statements: [['inline', 'gh-alerts', [], ['notify', ['subexpr', 'action', [['get', 'notify', ['loc', [null, [1, 27], [1, 33]]]]], [], ['loc', [null, [1, 19], [1, 34]]]]], ['loc', [null, [1, 0], [1, 36]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            expectedCount = 3;
            this.get('notifications.alerts').pushObject({ message: 'Third', type: 'success' });

            expectedCount = 0;
            this.set('notifications.alerts', (0, _emberArrayUtils.A)());
        });
    });
});
/* jshint expr:true */