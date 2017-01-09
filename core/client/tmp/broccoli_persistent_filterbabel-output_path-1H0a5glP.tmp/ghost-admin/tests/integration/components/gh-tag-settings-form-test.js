define('ghost-admin/tests/integration/components/gh-tag-settings-form-test', ['exports', 'chai', 'ember-mocha', 'ember-service', 'ember-object', 'ember-runloop', 'ember-data'], function (exports, _chai, _emberMocha, _emberService, _emberObject, _emberRunloop, _emberData) {
    var Errors = _emberData['default'].Errors;

    var configStub = _emberService['default'].extend({
        blogUrl: 'http://localhost:2368'
    });

    var mediaQueriesStub = _emberService['default'].extend({
        maxWidth600: false
    });

    (0, _emberMocha.describeComponent)('gh-tag-settings-form', 'Integration: Component: gh-tag-settings-form', {
        integration: true
    }, function () {
        beforeEach(function () {
            /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
            var tag = _emberObject['default'].create({
                id: 1,
                name: 'Test',
                slug: 'test',
                description: 'Description.',
                metaTitle: 'Meta Title',
                metaDescription: 'Meta description',
                errors: Errors.create(),
                hasValidated: []
            });
            /* jscs:enable requireCamelCaseOrUpperCaseIdentifiers */

            this.set('tag', tag);
            this.set('actions.setProperty', function (property, value) {
                // this should be overridden if a call is expected
                console.error('setProperty called \'' + property + ': ' + value + '\'');
            });

            this.register('service:config', configStub);
            this.inject.service('config', { as: 'config' });

            this.register('service:media-queries', mediaQueriesStub);
            this.inject.service('media-queries', { as: 'mediaQueries' });
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
                    statements: [['inline', 'gh-tag-settings-form', [], ['tag', ['subexpr', '@mut', [['get', 'tag', ['loc', [null, [2, 43], [2, 46]]]]], [], []], 'setProperty', ['subexpr', 'action', ['setProperty'], [], ['loc', [null, [2, 59], [2, 81]]]]], ['loc', [null, [2, 16], [2, 83]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$()).to.have.length(1);
        });

        (0, _emberMocha.it)('has the correct title', function () {
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
                    statements: [['inline', 'gh-tag-settings-form', [], ['tag', ['subexpr', '@mut', [['get', 'tag', ['loc', [null, [2, 43], [2, 46]]]]], [], []], 'setProperty', ['subexpr', 'action', ['setProperty'], [], ['loc', [null, [2, 59], [2, 81]]]]], ['loc', [null, [2, 16], [2, 83]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$('.tag-settings-pane h4').text(), 'existing tag title').to.equal('Tag Settings');

            this.set('tag.isNew', true);
            (0, _chai.expect)(this.$('.tag-settings-pane h4').text(), 'new tag title').to.equal('New Tag');
        });

        (0, _emberMocha.it)('renders main settings', function () {
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
                    statements: [['inline', 'gh-tag-settings-form', [], ['tag', ['subexpr', '@mut', [['get', 'tag', ['loc', [null, [2, 43], [2, 46]]]]], [], []], 'setProperty', ['subexpr', 'action', ['setProperty'], [], ['loc', [null, [2, 59], [2, 81]]]]], ['loc', [null, [2, 16], [2, 83]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _chai.expect)(this.$('.gh-image-uploader').length, 'displays image uploader').to.equal(1);
            (0, _chai.expect)(this.$('input[name="name"]').val(), 'name field value').to.equal('Test');
            (0, _chai.expect)(this.$('input[name="slug"]').val(), 'slug field value').to.equal('test');
            (0, _chai.expect)(this.$('textarea[name="description"]').val(), 'description field value').to.equal('Description.');
            (0, _chai.expect)(this.$('input[name="metaTitle"]').val(), 'metaTitle field value').to.equal('Meta Title');
            (0, _chai.expect)(this.$('textarea[name="metaDescription"]').val(), 'metaDescription field value').to.equal('Meta description');
        });

        (0, _emberMocha.it)('can switch between main/meta settings', function () {
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
                    statements: [['inline', 'gh-tag-settings-form', [], ['tag', ['subexpr', '@mut', [['get', 'tag', ['loc', [null, [2, 43], [2, 46]]]]], [], []], 'setProperty', ['subexpr', 'action', ['setProperty'], [], ['loc', [null, [2, 59], [2, 81]]]]], ['loc', [null, [2, 16], [2, 83]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _chai.expect)(this.$('.tag-settings-pane').hasClass('settings-menu-pane-in'), 'main settings are displayed by default').to.be['true'];
            (0, _chai.expect)(this.$('.tag-meta-settings-pane').hasClass('settings-menu-pane-out-right'), 'meta settings are hidden by default').to.be['true'];

            (0, _emberRunloop['default'])(function () {
                _this.$('.meta-data-button').click();
            });

            (0, _chai.expect)(this.$('.tag-settings-pane').hasClass('settings-menu-pane-out-left'), 'main settings are hidden after clicking Meta Data button').to.be['true'];
            (0, _chai.expect)(this.$('.tag-meta-settings-pane').hasClass('settings-menu-pane-in'), 'meta settings are displayed after clicking Meta Data button').to.be['true'];

            (0, _emberRunloop['default'])(function () {
                _this.$('.back').click();
            });

            (0, _chai.expect)(this.$('.tag-settings-pane').hasClass('settings-menu-pane-in'), 'main settings are displayed after clicking "back"').to.be['true'];
            (0, _chai.expect)(this.$('.tag-meta-settings-pane').hasClass('settings-menu-pane-out-right'), 'meta settings are hidden after clicking "back"').to.be['true'];
        });

        (0, _emberMocha.it)('has one-way binding for properties', function () {
            var _this2 = this;

            this.set('actions.setProperty', function () {
                // noop
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
                    statements: [['inline', 'gh-tag-settings-form', [], ['tag', ['subexpr', '@mut', [['get', 'tag', ['loc', [null, [2, 43], [2, 46]]]]], [], []], 'setProperty', ['subexpr', 'action', ['setProperty'], [], ['loc', [null, [2, 59], [2, 81]]]]], ['loc', [null, [2, 16], [2, 83]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _emberRunloop['default'])(function () {
                _this2.$('input[name="name"]').val('New name');
                _this2.$('input[name="slug"]').val('new-slug');
                _this2.$('textarea[name="description"]').val('New description');
                _this2.$('input[name="metaTitle"]').val('New metaTitle');
                _this2.$('textarea[name="metaDescription"]').val('New metaDescription');
            });

            (0, _chai.expect)(this.get('tag.name'), 'tag name').to.equal('Test');
            (0, _chai.expect)(this.get('tag.slug'), 'tag slug').to.equal('test');
            (0, _chai.expect)(this.get('tag.description'), 'tag description').to.equal('Description.');
            (0, _chai.expect)(this.get('tag.metaTitle'), 'tag metaTitle').to.equal('Meta Title');
            (0, _chai.expect)(this.get('tag.metaDescription'), 'tag metaDescription').to.equal('Meta description');
        });

        (0, _emberMocha.it)('triggers setProperty action on blur of all fields', function () {
            var _this3 = this;

            var expectedProperty = '';
            var expectedValue = '';

            this.set('actions.setProperty', function (property, value) {
                (0, _chai.expect)(property, 'property').to.equal(expectedProperty);
                (0, _chai.expect)(value, 'value').to.equal(expectedValue);
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
                    statements: [['inline', 'gh-tag-settings-form', [], ['tag', ['subexpr', '@mut', [['get', 'tag', ['loc', [null, [2, 43], [2, 46]]]]], [], []], 'setProperty', ['subexpr', 'action', ['setProperty'], [], ['loc', [null, [2, 59], [2, 81]]]]], ['loc', [null, [2, 16], [2, 83]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            expectedProperty = 'name';
            expectedValue = 'new-slug';
            (0, _emberRunloop['default'])(function () {
                _this3.$('input[name="name"]').val('New name');
            });

            expectedProperty = 'url';
            expectedValue = 'new-slug';
            (0, _emberRunloop['default'])(function () {
                _this3.$('input[name="slug"]').val('new-slug');
            });

            expectedProperty = 'description';
            expectedValue = 'New description';
            (0, _emberRunloop['default'])(function () {
                _this3.$('textarea[name="description"]').val('New description');
            });

            expectedProperty = 'metaTitle';
            expectedValue = 'New metaTitle';
            (0, _emberRunloop['default'])(function () {
                _this3.$('input[name="metaTitle"]').val('New metaTitle');
            });

            expectedProperty = 'metaDescription';
            expectedValue = 'New metaDescription';
            (0, _emberRunloop['default'])(function () {
                _this3.$('textarea[name="metaDescription"]').val('New metaDescription');
            });
        });

        (0, _emberMocha.it)('displays error messages for validated fields', function () {
            var errors = this.get('tag.errors');
            var hasValidated = this.get('tag.hasValidated');

            errors.add('name', 'must be present');
            hasValidated.push('name');

            errors.add('slug', 'must be present');
            hasValidated.push('slug');

            errors.add('description', 'is too long');
            hasValidated.push('description');

            errors.add('metaTitle', 'is too long');
            hasValidated.push('metaTitle');

            errors.add('metaDescription', 'is too long');
            hasValidated.push('metaDescription');

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
                    statements: [['inline', 'gh-tag-settings-form', [], ['tag', ['subexpr', '@mut', [['get', 'tag', ['loc', [null, [2, 43], [2, 46]]]]], [], []], 'setProperty', ['subexpr', 'action', ['setProperty'], [], ['loc', [null, [2, 59], [2, 81]]]]], ['loc', [null, [2, 16], [2, 83]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            var nameFormGroup = this.$('input[name="name"]').closest('.form-group');
            (0, _chai.expect)(nameFormGroup.hasClass('error'), 'name form group has error state').to.be['true'];
            (0, _chai.expect)(nameFormGroup.find('.response').length, 'name form group has error message').to.equal(1);

            var slugFormGroup = this.$('input[name="slug"]').closest('.form-group');
            (0, _chai.expect)(slugFormGroup.hasClass('error'), 'slug form group has error state').to.be['true'];
            (0, _chai.expect)(slugFormGroup.find('.response').length, 'slug form group has error message').to.equal(1);

            var descriptionFormGroup = this.$('textarea[name="description"]').closest('.form-group');
            (0, _chai.expect)(descriptionFormGroup.hasClass('error'), 'description form group has error state').to.be['true'];

            var metaTitleFormGroup = this.$('input[name="metaTitle"]').closest('.form-group');
            (0, _chai.expect)(metaTitleFormGroup.hasClass('error'), 'metaTitle form group has error state').to.be['true'];
            (0, _chai.expect)(metaTitleFormGroup.find('.response').length, 'metaTitle form group has error message').to.equal(1);

            var metaDescriptionFormGroup = this.$('textarea[name="metaDescription"]').closest('.form-group');
            (0, _chai.expect)(metaDescriptionFormGroup.hasClass('error'), 'metaDescription form group has error state').to.be['true'];
            (0, _chai.expect)(metaDescriptionFormGroup.find('.response').length, 'metaDescription form group has error message').to.equal(1);
        });

        (0, _emberMocha.it)('displays char count for text fields', function () {
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
                    statements: [['inline', 'gh-tag-settings-form', [], ['tag', ['subexpr', '@mut', [['get', 'tag', ['loc', [null, [2, 43], [2, 46]]]]], [], []], 'setProperty', ['subexpr', 'action', ['setProperty'], [], ['loc', [null, [2, 59], [2, 81]]]]], ['loc', [null, [2, 16], [2, 83]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            var descriptionFormGroup = this.$('textarea[name="description"]').closest('.form-group');
            (0, _chai.expect)(descriptionFormGroup.find('.word-count').text(), 'description char count').to.equal('12');

            var metaDescriptionFormGroup = this.$('textarea[name="metaDescription"]').closest('.form-group');
            (0, _chai.expect)(metaDescriptionFormGroup.find('.word-count').text(), 'description char count').to.equal('16');
        });

        (0, _emberMocha.it)('renders SEO title preview', function () {
            var _this4 = this;

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
                    statements: [['inline', 'gh-tag-settings-form', [], ['tag', ['subexpr', '@mut', [['get', 'tag', ['loc', [null, [2, 43], [2, 46]]]]], [], []], 'setProperty', ['subexpr', 'action', ['setProperty'], [], ['loc', [null, [2, 59], [2, 81]]]]], ['loc', [null, [2, 16], [2, 83]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$('.seo-preview-title').text(), 'displays meta title if present').to.equal('Meta Title');

            (0, _emberRunloop['default'])(function () {
                _this4.set('tag.metaTitle', '');
            });
            (0, _chai.expect)(this.$('.seo-preview-title').text(), 'falls back to tag name without metaTitle').to.equal('Test');

            (0, _emberRunloop['default'])(function () {
                _this4.set('tag.name', new Array(151).join('x'));
            });
            var expectedLength = 70 + '…'.length;
            (0, _chai.expect)(this.$('.seo-preview-title').text().length, 'cuts title to max 70 chars').to.equal(expectedLength);
        });

        (0, _emberMocha.it)('renders SEO URL preview', function () {
            var _this5 = this;

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
                    statements: [['inline', 'gh-tag-settings-form', [], ['tag', ['subexpr', '@mut', [['get', 'tag', ['loc', [null, [2, 43], [2, 46]]]]], [], []], 'setProperty', ['subexpr', 'action', ['setProperty'], [], ['loc', [null, [2, 59], [2, 81]]]]], ['loc', [null, [2, 16], [2, 83]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$('.seo-preview-link').text(), 'adds url and tag prefix').to.equal('http://localhost:2368/tag/test/');

            (0, _emberRunloop['default'])(function () {
                _this5.set('tag.slug', new Array(151).join('x'));
            });
            var expectedLength = 70 + '…'.length;
            (0, _chai.expect)(this.$('.seo-preview-link').text().length, 'cuts slug to max 70 chars').to.equal(expectedLength);
        });

        (0, _emberMocha.it)('renders SEO description preview', function () {
            var _this6 = this;

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
                    statements: [['inline', 'gh-tag-settings-form', [], ['tag', ['subexpr', '@mut', [['get', 'tag', ['loc', [null, [2, 43], [2, 46]]]]], [], []], 'setProperty', ['subexpr', 'action', ['setProperty'], [], ['loc', [null, [2, 59], [2, 81]]]]], ['loc', [null, [2, 16], [2, 83]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$('.seo-preview-description').text(), 'displays meta description if present').to.equal('Meta description');

            (0, _emberRunloop['default'])(function () {
                _this6.set('tag.metaDescription', '');
            });
            (0, _chai.expect)(this.$('.seo-preview-description').text(), 'falls back to tag description without metaDescription').to.equal('Description.');

            (0, _emberRunloop['default'])(function () {
                _this6.set('tag.description', new Array(200).join('x'));
            });
            var expectedLength = 156 + '…'.length;
            (0, _chai.expect)(this.$('.seo-preview-description').text().length, 'cuts description to max 156 chars').to.equal(expectedLength);
        });

        (0, _emberMocha.it)('resets if a new tag is received', function () {
            var _this7 = this;

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
                    statements: [['inline', 'gh-tag-settings-form', [], ['tag', ['subexpr', '@mut', [['get', 'tag', ['loc', [null, [2, 43], [2, 46]]]]], [], []], 'setProperty', ['subexpr', 'action', ['setProperty'], [], ['loc', [null, [2, 59], [2, 81]]]]], ['loc', [null, [2, 16], [2, 83]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _emberRunloop['default'])(function () {
                _this7.$('.meta-data-button').click();
            });
            (0, _chai.expect)(this.$('.tag-meta-settings-pane').hasClass('settings-menu-pane-in'), 'meta data pane is shown').to.be['true'];

            (0, _emberRunloop['default'])(function () {
                _this7.set('tag', _emberObject['default'].create({ id: '2' }));
            });
            (0, _chai.expect)(this.$('.tag-settings-pane').hasClass('settings-menu-pane-in'), 'resets to main settings').to.be['true'];
        });

        (0, _emberMocha.it)('triggers delete tag modal on delete click', function (done) {
            var _this8 = this;

            // TODO: will time out if this isn't hit, there's probably a better
            // way of testing this
            this.set('actions.openModal', function () {
                done();
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
                    statements: [['inline', 'gh-tag-settings-form', [], ['tag', ['subexpr', '@mut', [['get', 'tag', ['loc', [null, [2, 43], [2, 46]]]]], [], []], 'setProperty', ['subexpr', 'action', ['setProperty'], [], ['loc', [null, [2, 59], [2, 81]]]], 'showDeleteTagModal', ['subexpr', 'action', ['openModal'], [], ['loc', [null, [2, 101], [2, 121]]]]], ['loc', [null, [2, 16], [2, 123]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _emberRunloop['default'])(function () {
                _this8.$('.tag-delete-button').click();
            });
        });

        (0, _emberMocha.it)('shows settings.tags arrow link on mobile', function () {
            this.set('mediaQueries.maxWidth600', true);

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
                    statements: [['inline', 'gh-tag-settings-form', [], ['tag', ['subexpr', '@mut', [['get', 'tag', ['loc', [null, [2, 43], [2, 46]]]]], [], []], 'setProperty', ['subexpr', 'action', ['setProperty'], [], ['loc', [null, [2, 59], [2, 81]]]]], ['loc', [null, [2, 16], [2, 83]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _chai.expect)(this.$('.tag-settings-pane .settings-menu-header .settings-menu-header-action').length, 'settings.tags link is shown').to.equal(1);
        });
    });
});
/* jshint expr:true */
/* jscs:disable requireTemplateStringsForConcatenation */