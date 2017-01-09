define('ghost-admin/tests/integration/components/gh-theme-table-test', ['exports', 'chai', 'ember-mocha', 'jquery', 'sinon', 'ember-runloop'], function (exports, _chai, _emberMocha, _jquery, _sinon, _emberRunloop) {

    (0, _emberMocha.describeComponent)('gh-theme-table', 'Integration: Component: gh-theme-table', {
        integration: true
    }, function () {
        (0, _emberMocha.it)('renders', function () {
            this.set('availableThemes', [{ name: 'Daring', 'package': { name: 'Daring', version: '0.1.4' }, active: true }, { name: 'casper', 'package': { name: 'Casper', version: '1.3.1' } }, { name: 'oscar-ghost-1.1.0', 'package': { name: 'Lanyon', version: '1.1.0' } }, { name: 'foo' }]);
            this.set('actionHandler', _sinon['default'].spy());

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
                                'line': 6,
                                'column': 14
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
                    statements: [['inline', 'gh-theme-table', [], ['availableThemes', ['subexpr', '@mut', [['get', 'availableThemes', ['loc', [null, [2, 32], [2, 47]]]]], [], []], 'activateTheme', ['subexpr', 'action', [['get', 'actionHandler', ['loc', [null, [3, 38], [3, 51]]]]], [], ['loc', [null, [3, 30], [3, 52]]]], 'downloadTheme', ['subexpr', 'action', [['get', 'actionHandler', ['loc', [null, [4, 38], [4, 51]]]]], [], ['loc', [null, [4, 30], [4, 52]]]], 'deleteTheme', ['subexpr', 'action', [['get', 'actionHandler', ['loc', [null, [5, 36], [5, 49]]]]], [], ['loc', [null, [5, 28], [5, 50]]]]], ['loc', [null, [1, 0], [6, 14]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _chai.expect)(this.$('.theme-list').length, '.theme-list is present').to.equal(1);
            (0, _chai.expect)(this.$('.theme-list-item').length, 'number of rows').to.equal(4);

            var packageNames = this.$('.theme-list-item-body .name').map(function (i, name) {
                return (0, _jquery['default'])(name).text().trim();
            }).toArray();

            (0, _chai.expect)(packageNames, 'themes are ordered by label, casper has "default", package versions are shown').to.deep.equal(['Casper - 1.3.1 (default)', 'Daring - 0.1.4', 'foo', 'Lanyon - 1.1.0']);

            (0, _chai.expect)(this.$('.theme-list-item:contains("Daring")').hasClass('theme-list-item--active'), 'active theme is highlighted').to.be['true'];

            (0, _chai.expect)(this.$('.theme-list-item:not(:contains("Daring"))').find('a:contains("Activate")').length === 3, 'non-active themes have an activate link').to.be['true'];

            (0, _chai.expect)(this.$('.theme-list-item:contains("Daring")').find('a:contains("Activate")').length === 0, 'active theme doesn\'t have an activate link').to.be['true'];

            (0, _chai.expect)(this.$('a:contains("Download")').length, 'all themes have a download link').to.equal(4);

            (0, _chai.expect)(this.$('.theme-list-item:contains("foo")').find('a:contains("Delete")').length === 1, 'non-active, non-casper theme has delete link').to.be['true'];

            (0, _chai.expect)(this.$('.theme-list-item:contains("Casper")').find('a:contains("Delete")').length === 0, 'casper doesn\'t have delete link').to.be['true'];

            (0, _chai.expect)(this.$('.theme-list-item--active').find('a:contains("Delete")').length === 0, 'active theme doesn\'t have delete link').to.be['true'];
        });

        (0, _emberMocha.it)('delete link triggers passed in action', function () {
            var _this = this;

            var deleteAction = _sinon['default'].spy();
            var actionHandler = _sinon['default'].spy();

            this.set('availableThemes', [{ name: 'Foo', active: true }, { name: 'Bar' }]);
            this.set('deleteAction', deleteAction);
            this.set('actionHandler', actionHandler);

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
                                'line': 6,
                                'column': 14
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
                    statements: [['inline', 'gh-theme-table', [], ['availableThemes', ['subexpr', '@mut', [['get', 'availableThemes', ['loc', [null, [2, 32], [2, 47]]]]], [], []], 'activateTheme', ['subexpr', 'action', [['get', 'actionHandler', ['loc', [null, [3, 38], [3, 51]]]]], [], ['loc', [null, [3, 30], [3, 52]]]], 'downloadTheme', ['subexpr', 'action', [['get', 'actionHandler', ['loc', [null, [4, 38], [4, 51]]]]], [], ['loc', [null, [4, 30], [4, 52]]]], 'deleteTheme', ['subexpr', 'action', [['get', 'deleteAction', ['loc', [null, [5, 36], [5, 48]]]]], [], ['loc', [null, [5, 28], [5, 49]]]]], ['loc', [null, [1, 0], [6, 14]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _emberRunloop['default'])(function () {
                _this.$('.theme-list-item:contains("Bar") a:contains("Delete")').click();
            });

            (0, _chai.expect)(deleteAction.calledOnce).to.be['true'];
            (0, _chai.expect)(deleteAction.firstCall.args[0].name).to.equal('Bar');
        });

        (0, _emberMocha.it)('download link triggers passed in action', function () {
            var _this2 = this;

            var downloadAction = _sinon['default'].spy();
            var actionHandler = _sinon['default'].spy();

            this.set('availableThemes', [{ name: 'Foo', active: true }, { name: 'Bar' }]);
            this.set('downloadAction', downloadAction);
            this.set('actionHandler', actionHandler);

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
                                'line': 6,
                                'column': 14
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
                    statements: [['inline', 'gh-theme-table', [], ['availableThemes', ['subexpr', '@mut', [['get', 'availableThemes', ['loc', [null, [2, 32], [2, 47]]]]], [], []], 'activateTheme', ['subexpr', 'action', [['get', 'actionHandler', ['loc', [null, [3, 38], [3, 51]]]]], [], ['loc', [null, [3, 30], [3, 52]]]], 'downloadTheme', ['subexpr', 'action', [['get', 'downloadAction', ['loc', [null, [4, 38], [4, 52]]]]], [], ['loc', [null, [4, 30], [4, 53]]]], 'deleteTheme', ['subexpr', 'action', [['get', 'actionHandler', ['loc', [null, [5, 36], [5, 49]]]]], [], ['loc', [null, [5, 28], [5, 50]]]]], ['loc', [null, [1, 0], [6, 14]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _emberRunloop['default'])(function () {
                _this2.$('.theme-list-item:contains("Foo") a:contains("Download")').click();
            });

            (0, _chai.expect)(downloadAction.calledOnce).to.be['true'];
            (0, _chai.expect)(downloadAction.firstCall.args[0].name).to.equal('Foo');
        });

        (0, _emberMocha.it)('activate link triggers passed in action', function () {
            var _this3 = this;

            var activateAction = _sinon['default'].spy();
            var actionHandler = _sinon['default'].spy();

            this.set('availableThemes', [{ name: 'Foo', active: true }, { name: 'Bar' }]);
            this.set('activateAction', activateAction);
            this.set('actionHandler', actionHandler);

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
                                'line': 6,
                                'column': 14
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
                    statements: [['inline', 'gh-theme-table', [], ['availableThemes', ['subexpr', '@mut', [['get', 'availableThemes', ['loc', [null, [2, 32], [2, 47]]]]], [], []], 'activateTheme', ['subexpr', 'action', [['get', 'activateAction', ['loc', [null, [3, 38], [3, 52]]]]], [], ['loc', [null, [3, 30], [3, 53]]]], 'downloadTheme', ['subexpr', 'action', [['get', 'actionHandler', ['loc', [null, [4, 38], [4, 51]]]]], [], ['loc', [null, [4, 30], [4, 52]]]], 'deleteTheme', ['subexpr', 'action', [['get', 'actionHandler', ['loc', [null, [5, 36], [5, 49]]]]], [], ['loc', [null, [5, 28], [5, 50]]]]], ['loc', [null, [1, 0], [6, 14]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _emberRunloop['default'])(function () {
                _this3.$('.theme-list-item:contains("Bar") a:contains("Activate")').click();
            });

            (0, _chai.expect)(activateAction.calledOnce).to.be['true'];
            (0, _chai.expect)(activateAction.firstCall.args[0].name).to.equal('Bar');
        });

        (0, _emberMocha.it)('displays folder names if there are duplicate package names', function () {
            this.set('availableThemes', [{ name: 'daring', 'package': { name: 'Daring', version: '0.1.4' }, active: true }, { name: 'daring-0.1.5', 'package': { name: 'Daring', version: '0.1.4' } }, { name: 'casper', 'package': { name: 'Casper', version: '1.3.1' } }, { name: 'another', 'package': { name: 'Casper', version: '1.3.1' } }, { name: 'mine', 'package': { name: 'Casper', version: '1.3.1' } }, { name: 'foo' }]);
            this.set('actionHandler', _sinon['default'].spy());

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
                                'line': 6,
                                'column': 14
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
                    statements: [['inline', 'gh-theme-table', [], ['availableThemes', ['subexpr', '@mut', [['get', 'availableThemes', ['loc', [null, [2, 32], [2, 47]]]]], [], []], 'activateTheme', ['subexpr', 'action', [['get', 'actionHandler', ['loc', [null, [3, 38], [3, 51]]]]], [], ['loc', [null, [3, 30], [3, 52]]]], 'downloadTheme', ['subexpr', 'action', [['get', 'actionHandler', ['loc', [null, [4, 38], [4, 51]]]]], [], ['loc', [null, [4, 30], [4, 52]]]], 'deleteTheme', ['subexpr', 'action', [['get', 'actionHandler', ['loc', [null, [5, 36], [5, 49]]]]], [], ['loc', [null, [5, 28], [5, 50]]]]], ['loc', [null, [1, 0], [6, 14]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            var packageNames = this.$('.theme-list-item-body .name').map(function (i, name) {
                return (0, _jquery['default'])(name).text().trim();
            }).toArray();

            console.log(packageNames);

            (0, _chai.expect)(packageNames, 'themes are ordered by label, folder names shown for duplicates').to.deep.equal(['Casper - 1.3.1 (another)', 'Casper - 1.3.1 (default)', 'Casper - 1.3.1 (mine)', 'Daring - 0.1.4 (daring)', 'Daring - 0.1.4 (daring-0.1.5)', 'foo']);
        });
    });
});
/* jshint expr:true */