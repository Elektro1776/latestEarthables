define('ghost-admin/tests/integration/components/transfer-owner-test', ['exports', 'chai', 'ember-mocha', 'ember-runloop', 'rsvp', 'sinon'], function (exports, _chai, _emberMocha, _emberRunloop, _rsvp, _sinon) {

    (0, _emberMocha.describeComponent)('transfer-owner', 'Integration: Component: modals/transfer-owner', {
        integration: true
    }, function () {
        (0, _emberMocha.it)('triggers confirm action', function () {
            var _this = this;

            var confirm = _sinon['default'].stub();
            var closeModal = _sinon['default'].spy();

            confirm.returns(_rsvp['default'].resolve({}));

            this.on('confirm', confirm);
            this.on('closeModal', closeModal);

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
                                'column': 85
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
                    statements: [['inline', 'modals/transfer-owner', [], ['confirm', ['subexpr', 'action', ['confirm'], [], ['loc', [null, [1, 32], [1, 50]]]], 'closeModal', ['subexpr', 'action', ['closeModal'], [], ['loc', [null, [1, 62], [1, 83]]]]], ['loc', [null, [1, 0], [1, 85]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _emberRunloop['default'])(function () {
                _this.$('.btn.btn-red').click();
            });

            (0, _chai.expect)(confirm.calledOnce, 'confirm called').to.be['true'];
            (0, _chai.expect)(closeModal.calledOnce, 'closeModal called').to.be['true'];
        });
    });
});
/* jshint expr:true */