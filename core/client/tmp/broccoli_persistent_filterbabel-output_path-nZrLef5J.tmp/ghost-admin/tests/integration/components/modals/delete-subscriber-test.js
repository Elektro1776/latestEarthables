define('ghost-admin/tests/integration/components/modals/delete-subscriber-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

    (0, _emberMocha.describeComponent)('modals/delete-subscriber', 'Integration: Component: modals/delete-subscriber', {
        integration: true
    }, function () {
        (0, _emberMocha.it)('renders', function () {
            // Set any properties with this.set('myProperty', 'value');
            // Handle any actions with this.on('myAction', function(val) { ... });
            // Template block usage:
            // this.render(hbs`
            //   {{#modals/delete-subscriber}}
            //     template content
            //   {{/modals/delete-subscriber}}
            // `);

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
                                'column': 28
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
                    statements: [['content', 'modals/delete-subscriber', ['loc', [null, [1, 0], [1, 28]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$()).to.have.length(1);
        });
    });
});
/* jshint expr:true */