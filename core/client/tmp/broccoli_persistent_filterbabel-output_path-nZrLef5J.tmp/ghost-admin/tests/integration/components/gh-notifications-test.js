define('ghost-admin/tests/integration/components/gh-notifications-test', ['exports', 'chai', 'ember-mocha', 'ember-runloop', 'ember-service', 'ember-array/utils'], function (exports, _chai, _emberMocha, _emberRunloop, _emberService, _emberArrayUtils) {

    var notificationsStub = _emberService['default'].extend({
        notifications: (0, _emberArrayUtils.A)()
    });

    (0, _emberMocha.describeComponent)('gh-notifications', 'Integration: Component: gh-notifications', {
        integration: true
    }, function () {
        beforeEach(function () {
            this.register('service:notifications', notificationsStub);
            this.inject.service('notifications', { as: 'notifications' });

            this.set('notifications.notifications', [{ message: 'First', type: 'error' }, { message: 'Second', type: 'warn' }]);
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
                                'column': 20
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
                    statements: [['content', 'gh-notifications', ['loc', [null, [1, 0], [1, 20]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$('.gh-notifications').length).to.equal(1);

            (0, _chai.expect)(this.$('.gh-notifications').children().length).to.equal(2);

            this.set('notifications.notifications', (0, _emberArrayUtils.A)());
            (0, _chai.expect)(this.$('.gh-notifications').children().length).to.equal(0);
        });
    });
});
/* jshint expr:true */