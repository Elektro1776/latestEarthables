define('ghost-admin/tests/integration/components/gh-notification-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

    (0, _emberMocha.describeComponent)('gh-notification', 'Integration: Component: gh-notification', {
        integration: true
    }, function () {
        (0, _emberMocha.it)('renders', function () {
            this.set('message', { message: 'Test message', type: 'success' });

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
                                'column': 35
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
                    statements: [['inline', 'gh-notification', [], ['message', ['subexpr', '@mut', [['get', 'message', ['loc', [null, [1, 26], [1, 33]]]]], [], []]], ['loc', [null, [1, 0], [1, 35]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _chai.expect)(this.$('article.gh-notification')).to.have.length(1);
            var $notification = this.$('.gh-notification');

            (0, _chai.expect)($notification.hasClass('gh-notification-passive')).to.be['true'];
            (0, _chai.expect)($notification.text()).to.match(/Test message/);
        });

        (0, _emberMocha.it)('maps message types to CSS classes', function () {
            this.set('message', { message: 'Test message', type: 'success' });

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
                                'column': 35
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
                    statements: [['inline', 'gh-notification', [], ['message', ['subexpr', '@mut', [['get', 'message', ['loc', [null, [1, 26], [1, 33]]]]], [], []]], ['loc', [null, [1, 0], [1, 35]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            var $notification = this.$('.gh-notification');

            this.set('message.type', 'success');
            (0, _chai.expect)($notification.hasClass('gh-notification-green'), 'success class isn\'t green').to.be['true'];

            this.set('message.type', 'error');
            (0, _chai.expect)($notification.hasClass('gh-notification-red'), 'success class isn\'t red').to.be['true'];

            this.set('message.type', 'warn');
            (0, _chai.expect)($notification.hasClass('gh-notification-yellow'), 'success class isn\'t yellow').to.be['true'];
        });
    });
});
/* jshint expr:true */