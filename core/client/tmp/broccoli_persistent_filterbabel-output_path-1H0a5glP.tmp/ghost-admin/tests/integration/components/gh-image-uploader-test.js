define('ghost-admin/tests/integration/components/gh-image-uploader-test', ['exports', 'sinon', 'chai', 'ember-mocha', 'pretender', 'ember-test-helpers/wait', 'ghost-admin/tests/helpers/file-upload', 'jquery', 'ember-runloop', 'ember-service', 'ghost-admin/services/ajax'], function (exports, _sinon, _chai, _emberMocha, _pretender, _emberTestHelpersWait, _ghostAdminTestsHelpersFileUpload, _jquery, _emberRunloop, _emberService, _ghostAdminServicesAjax) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    var keyCodes = {
        enter: 13
    };

    var configStub = _emberService['default'].extend({
        fileStorage: true
    });

    var notificationsStub = _emberService['default'].extend({
        showAPIError: function showAPIError(error, options) {
            // noop - to be stubbed
        }
    });

    var sessionStub = _emberService['default'].extend({
        isAuthenticated: false,
        authorize: function authorize(authorizer, block) {
            if (this.get('isAuthenticated')) {
                block('Authorization', 'Bearer token');
            }
        }
    });

    var stubSuccessfulUpload = function stubSuccessfulUpload(server) {
        var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        server.post('/ghost/api/v0.1/uploads/', function () {
            return [200, { 'Content-Type': 'application/json' }, '"/content/images/test.png"'];
        }, delay);
    };

    var stubFailedUpload = function stubFailedUpload(server, code, error) {
        var delay = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

        server.post('/ghost/api/v0.1/uploads/', function () {
            return [code, { 'Content-Type': 'application/json' }, JSON.stringify({
                errors: [{
                    errorType: error,
                    message: 'Error: ' + error
                }]
            })];
        }, delay);
    };

    (0, _emberMocha.describeComponent)('gh-image-upload', 'Integration: Component: gh-image-uploader', {
        integration: true
    }, function () {
        var server = undefined;

        beforeEach(function () {
            this.register('service:config', configStub);
            this.register('service:session', sessionStub);
            this.register('service:notifications', notificationsStub);
            this.inject.service('config', { as: 'configService' });
            this.inject.service('session', { as: 'sessionService' });
            this.inject.service('notifications', { as: 'notifications' });
            this.set('update', function () {});
            server = new _pretender['default']();
        });

        afterEach(function () {
            server.shutdown();
        });

        (0, _emberMocha.it)('renders', function () {
            this.set('image', 'http://example.com/test.png');
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
                                'column': 33
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
                    statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []]], ['loc', [null, [1, 0], [1, 33]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$()).to.have.length(1);
        });

        (0, _emberMocha.it)('defaults to upload form', function () {
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
                                'column': 33
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
                    statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []]], ['loc', [null, [1, 0], [1, 33]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$('input[type="file"]').length).to.equal(1);
        });

        (0, _emberMocha.it)('defaults to url form with no filestorage config', function () {
            this.set('configService.fileStorage', false);
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
                                'column': 33
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
                    statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []]], ['loc', [null, [1, 0], [1, 33]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$('input[type="file"]').length).to.equal(0);
            (0, _chai.expect)(this.$('input[type="text"].url').length).to.equal(1);
        });

        (0, _emberMocha.it)('can switch between form types', function () {
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
                                'column': 33
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
                    statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []]], ['loc', [null, [1, 0], [1, 33]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$('input[type="file"]').length).to.equal(1);
            (0, _chai.expect)(this.$('input[type="text"].url').length).to.equal(0);

            this.$('a.image-url').click();

            (0, _chai.expect)(this.$('input[type="file"]').length, 'upload form is visible after switch to url form').to.equal(0);
            (0, _chai.expect)(this.$('input[type="text"].url').length, 'url form is visible after switch to url form').to.equal(1);

            this.$('a.image-upload').click();

            (0, _chai.expect)(this.$('input[type="file"]').length, 'upload form is visible after switch to upload form').to.equal(1);
            (0, _chai.expect)(this.$('input[type="text"].url').length, 'url form is visible after switch to upload form').to.equal(0);
        });

        (0, _emberMocha.it)('triggers formChanged action when switching between forms', function () {
            var formChanged = _sinon['default'].spy();
            this.set('formChanged', formChanged);

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
                                'column': 66
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
                    statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'formChanged', ['subexpr', 'action', [['get', 'formChanged', ['loc', [null, [1, 52], [1, 63]]]]], [], ['loc', [null, [1, 44], [1, 64]]]]], ['loc', [null, [1, 0], [1, 66]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            this.$('a.image-url').click();
            this.$('a.image-upload').click();

            (0, _chai.expect)(formChanged.calledTwice).to.be['true'];
            (0, _chai.expect)(formChanged.firstCall.args[0]).to.equal('url-input');
            (0, _chai.expect)(formChanged.secondCall.args[0]).to.equal('upload');
        });

        describe('file upload form', function () {
            (0, _emberMocha.it)('renders form with supplied alt text', function () {
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
                                    'column': 53
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'altText', 'text test'], ['loc', [null, [1, 0], [1, 53]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _chai.expect)(this.$('.description').text().trim()).to.equal('Upload image of "text test"');
            });

            (0, _emberMocha.it)('renders form with supplied text', function () {
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
                                    'column': 50
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'text', 'text test'], ['loc', [null, [1, 0], [1, 50]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _chai.expect)(this.$('.description').text().trim()).to.equal('text test');
            });

            (0, _emberMocha.it)('generates request to correct endpoint', function (done) {
                stubSuccessfulUpload(server);

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
                                    'column': 56
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 47], [1, 53]]]]], [], ['loc', [null, [1, 39], [1, 54]]]]], ['loc', [null, [1, 0], [1, 56]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.png' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(server.handledRequests.length).to.equal(1);
                    (0, _chai.expect)(server.handledRequests[0].url).to.equal('/ghost/api/v0.1/uploads/');
                    (0, _chai.expect)(server.handledRequests[0].requestHeaders.Authorization).to.be.undefined;
                    done();
                });
            });

            (0, _emberMocha.it)('adds authentication headers to request', function (done) {
                stubSuccessfulUpload(server);

                this.get('sessionService').set('isAuthenticated', true);

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
                                    'column': 56
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 47], [1, 53]]]]], [], ['loc', [null, [1, 39], [1, 54]]]]], ['loc', [null, [1, 0], [1, 56]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.png' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    var _server$handledRequests = _slicedToArray(server.handledRequests, 1);

                    var request = _server$handledRequests[0];

                    (0, _chai.expect)(request.requestHeaders.Authorization).to.equal('Bearer token');
                    done();
                });
            });

            (0, _emberMocha.it)('fires update action on successful upload', function (done) {
                var update = _sinon['default'].spy();
                this.set('update', update);

                stubSuccessfulUpload(server);

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
                                    'column': 56
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 47], [1, 53]]]]], [], ['loc', [null, [1, 39], [1, 54]]]]], ['loc', [null, [1, 0], [1, 56]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.png' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(update.calledOnce).to.be['true'];
                    (0, _chai.expect)(update.firstCall.args[0]).to.equal('/content/images/test.png');
                    done();
                });
            });

            (0, _emberMocha.it)('doesn\'t fire update action on failed upload', function (done) {
                var update = _sinon['default'].spy();
                this.set('update', update);

                stubFailedUpload(server, 500);

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
                                    'column': 56
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 47], [1, 53]]]]], [], ['loc', [null, [1, 39], [1, 54]]]]], ['loc', [null, [1, 0], [1, 56]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.png' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(update.calledOnce).to.be['false'];
                    done();
                });
            });

            (0, _emberMocha.it)('fires fileSelected action on file selection', function (done) {
                var fileSelected = _sinon['default'].spy();
                this.set('fileSelected', fileSelected);

                stubSuccessfulUpload(server);

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
                                    'column': 89
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
                        statements: [['inline', 'gh-image-uploader', [], ['url', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 24], [1, 29]]]]], [], []], 'fileSelected', ['subexpr', 'action', [['get', 'fileSelected', ['loc', [null, [1, 51], [1, 63]]]]], [], ['loc', [null, [1, 43], [1, 64]]]], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 80], [1, 86]]]]], [], ['loc', [null, [1, 72], [1, 87]]]]], ['loc', [null, [1, 0], [1, 89]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.png' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(fileSelected.calledOnce).to.be['true'];
                    (0, _chai.expect)(fileSelected.args[0]).to.not.be.blank;
                    done();
                });
            });

            (0, _emberMocha.it)('fires uploadStarted action on upload start', function (done) {
                var uploadStarted = _sinon['default'].spy();
                this.set('uploadStarted', uploadStarted);

                stubSuccessfulUpload(server);

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
                                    'column': 93
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'uploadStarted', ['subexpr', 'action', [['get', 'uploadStarted', ['loc', [null, [1, 54], [1, 67]]]]], [], ['loc', [null, [1, 46], [1, 68]]]], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 84], [1, 90]]]]], [], ['loc', [null, [1, 76], [1, 91]]]]], ['loc', [null, [1, 0], [1, 93]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.png' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(uploadStarted.calledOnce).to.be['true'];
                    done();
                });
            });

            (0, _emberMocha.it)('fires uploadFinished action on successful upload', function (done) {
                var uploadFinished = _sinon['default'].spy();
                this.set('uploadFinished', uploadFinished);

                stubSuccessfulUpload(server);

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
                                    'column': 95
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'uploadFinished', ['subexpr', 'action', [['get', 'uploadFinished', ['loc', [null, [1, 55], [1, 69]]]]], [], ['loc', [null, [1, 47], [1, 70]]]], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 86], [1, 92]]]]], [], ['loc', [null, [1, 78], [1, 93]]]]], ['loc', [null, [1, 0], [1, 95]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.png' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(uploadFinished.calledOnce).to.be['true'];
                    done();
                });
            });

            (0, _emberMocha.it)('fires uploadFinished action on failed upload', function (done) {
                var uploadFinished = _sinon['default'].spy();
                this.set('uploadFinished', uploadFinished);

                stubFailedUpload(server);

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
                                    'column': 95
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'uploadFinished', ['subexpr', 'action', [['get', 'uploadFinished', ['loc', [null, [1, 55], [1, 69]]]]], [], ['loc', [null, [1, 47], [1, 70]]]], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 86], [1, 92]]]]], [], ['loc', [null, [1, 78], [1, 93]]]]], ['loc', [null, [1, 0], [1, 95]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.png' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(uploadFinished.calledOnce).to.be['true'];
                    done();
                });
            });

            (0, _emberMocha.it)('displays invalid file type error', function (done) {
                var _this = this;

                stubFailedUpload(server, 415, 'UnsupportedMediaTypeError');
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
                                    'column': 56
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 47], [1, 53]]]]], [], ['loc', [null, [1, 39], [1, 54]]]]], ['loc', [null, [1, 0], [1, 56]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.png' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(_this.$('.failed').length, 'error message is displayed').to.equal(1);
                    (0, _chai.expect)(_this.$('.failed').text()).to.match(/The image type you uploaded is not supported/);
                    (0, _chai.expect)(_this.$('.btn-green').length, 'reset button is displayed').to.equal(1);
                    (0, _chai.expect)(_this.$('.btn-green').text()).to.equal('Try Again');
                    done();
                });
            });

            (0, _emberMocha.it)('displays file too large for server error', function (done) {
                var _this2 = this;

                stubFailedUpload(server, 413, 'RequestEntityTooLargeError');
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
                                    'column': 56
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 47], [1, 53]]]]], [], ['loc', [null, [1, 39], [1, 54]]]]], ['loc', [null, [1, 0], [1, 56]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.png' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(_this2.$('.failed').length, 'error message is displayed').to.equal(1);
                    (0, _chai.expect)(_this2.$('.failed').text()).to.match(/The image you uploaded was larger/);
                    done();
                });
            });

            (0, _emberMocha.it)('handles file too large error directly from the web server', function (done) {
                var _this3 = this;

                server.post('/ghost/api/v0.1/uploads/', function () {
                    return [413, {}, ''];
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
                                    'column': 56
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 47], [1, 53]]]]], [], ['loc', [null, [1, 39], [1, 54]]]]], ['loc', [null, [1, 0], [1, 56]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.png' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(_this3.$('.failed').length, 'error message is displayed').to.equal(1);
                    (0, _chai.expect)(_this3.$('.failed').text()).to.match(/The image you uploaded was larger/);
                    done();
                });
            });

            (0, _emberMocha.it)('displays other server-side error with message', function (done) {
                var _this4 = this;

                stubFailedUpload(server, 400, 'UnknownError');
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
                                    'column': 56
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 47], [1, 53]]]]], [], ['loc', [null, [1, 39], [1, 54]]]]], ['loc', [null, [1, 0], [1, 56]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.png' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(_this4.$('.failed').length, 'error message is displayed').to.equal(1);
                    (0, _chai.expect)(_this4.$('.failed').text()).to.match(/Error: UnknownError/);
                    done();
                });
            });

            (0, _emberMocha.it)('handles unknown failure', function (done) {
                var _this5 = this;

                server.post('/ghost/api/v0.1/uploads/', function () {
                    return [500, { 'Content-Type': 'application/json' }, ''];
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
                                    'column': 56
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 47], [1, 53]]]]], [], ['loc', [null, [1, 39], [1, 54]]]]], ['loc', [null, [1, 0], [1, 56]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.png' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(_this5.$('.failed').length, 'error message is displayed').to.equal(1);
                    (0, _chai.expect)(_this5.$('.failed').text()).to.match(/Something went wrong/);
                    done();
                });
            });

            (0, _emberMocha.it)('triggers notifications.showAPIError for VersionMismatchError', function (done) {
                var showAPIError = _sinon['default'].spy();
                this.set('notifications.showAPIError', showAPIError);

                stubFailedUpload(server, 400, 'VersionMismatchError');

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
                                    'column': 56
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 47], [1, 53]]]]], [], ['loc', [null, [1, 39], [1, 54]]]]], ['loc', [null, [1, 0], [1, 56]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.png' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(showAPIError.calledOnce).to.be['true'];
                    done();
                });
            });

            (0, _emberMocha.it)('doesn\'t trigger notifications.showAPIError for other errors', function (done) {
                var showAPIError = _sinon['default'].spy();
                this.set('notifications.showAPIError', showAPIError);

                stubFailedUpload(server, 400, 'UnknownError');
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
                                    'column': 56
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 47], [1, 53]]]]], [], ['loc', [null, [1, 39], [1, 54]]]]], ['loc', [null, [1, 0], [1, 56]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.png' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(showAPIError.called).to.be['false'];
                    done();
                });
            });

            (0, _emberMocha.it)('can be reset after a failed upload', function (done) {
                var _this6 = this;

                stubFailedUpload(server, 400, 'UnknownError');
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
                                    'column': 56
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 47], [1, 53]]]]], [], ['loc', [null, [1, 39], [1, 54]]]]], ['loc', [null, [1, 0], [1, 56]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { type: 'test.png' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _emberRunloop['default'])(function () {
                        _this6.$('.btn-green').click();
                    });
                });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(_this6.$('input[type="file"]').length).to.equal(1);
                    done();
                });
            });

            (0, _emberMocha.it)('displays upload progress', function (done) {
                this.set('done', done);

                // pretender fires a progress event every 50ms
                stubSuccessfulUpload(server, 150);

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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'uploadFinished', ['subexpr', 'action', [['get', 'done', ['loc', [null, [1, 55], [1, 59]]]]], [], ['loc', [null, [1, 47], [1, 60]]]], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 76], [1, 82]]]]], [], ['loc', [null, [1, 68], [1, 83]]]]], ['loc', [null, [1, 0], [1, 85]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.png' });

                // after 75ms we should have had one progress event
                _emberRunloop['default'].later(this, function () {
                    (0, _chai.expect)(this.$('.progress .bar').length).to.equal(1);

                    var _$$attr$match = this.$('.progress .bar').attr('style').match(/width: (\d+)%?/);

                    var _$$attr$match2 = _slicedToArray(_$$attr$match, 2);

                    var _ = _$$attr$match2[0];
                    var percentageWidth = _$$attr$match2[1];

                    (0, _chai.expect)(percentageWidth).to.be.above(0);
                    (0, _chai.expect)(percentageWidth).to.be.below(100);
                }, 75);
            });

            (0, _emberMocha.it)('handles drag over/leave', function () {
                var _this7 = this;

                stubSuccessfulUpload(server);

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
                                    'column': 56
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 47], [1, 53]]]]], [], ['loc', [null, [1, 39], [1, 54]]]]], ['loc', [null, [1, 0], [1, 56]]]]],
                        locals: [],
                        templates: []
                    };
                })()));

                (0, _emberRunloop['default'])(function () {
                    var dragover = _jquery['default'].Event('dragover', {
                        dataTransfer: {
                            files: []
                        }
                    });
                    _this7.$('.gh-image-uploader').trigger(dragover);
                });

                (0, _chai.expect)(this.$('.gh-image-uploader').hasClass('-drag-over'), 'has drag-over class').to.be['true'];

                (0, _emberRunloop['default'])(function () {
                    _this7.$('.gh-image-uploader').trigger('dragleave');
                });

                (0, _chai.expect)(this.$('.gh-image-uploader').hasClass('-drag-over'), 'has drag-over class').to.be['false'];
            });

            (0, _emberMocha.it)('triggers file upload on file drop', function (done) {
                var _this8 = this;

                var uploadSuccess = _sinon['default'].spy();
                var drop = _jquery['default'].Event('drop', {
                    dataTransfer: {
                        files: [(0, _ghostAdminTestsHelpersFileUpload.createFile)(['test'], { name: 'test.png' })]
                    }
                });

                this.set('uploadSuccess', uploadSuccess);

                stubSuccessfulUpload(server);
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
                                    'column': 58
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
                        statements: [['inline', 'gh-image-uploader', [], ['uploadSuccess', ['subexpr', 'action', [['get', 'uploadSuccess', ['loc', [null, [1, 42], [1, 55]]]]], [], ['loc', [null, [1, 34], [1, 56]]]]], ['loc', [null, [1, 0], [1, 58]]]]],
                        locals: [],
                        templates: []
                    };
                })()));

                (0, _emberRunloop['default'])(function () {
                    _this8.$('.gh-image-uploader').trigger(drop);
                });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(uploadSuccess.calledOnce).to.be['true'];
                    (0, _chai.expect)(uploadSuccess.firstCall.args[0]).to.equal('/content/images/test.png');
                    done();
                });
            });

            (0, _emberMocha.it)('validates extension by default', function (done) {
                var _this9 = this;

                var uploadSuccess = _sinon['default'].spy();
                var uploadFailed = _sinon['default'].spy();

                this.set('uploadSuccess', uploadSuccess);
                this.set('uploadFailed', uploadFailed);

                stubSuccessfulUpload(server);

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
                                    'column': 56
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
                        statements: [['inline', 'gh-image-uploader', [], ['uploadSuccess', ['subexpr', 'action', [['get', 'uploadSuccess', ['loc', [null, [2, 42], [2, 55]]]]], [], ['loc', [null, [2, 34], [2, 56]]]], 'uploadFailed', ['subexpr', 'action', [['get', 'uploadFailed', ['loc', [null, [3, 41], [3, 53]]]]], [], ['loc', [null, [3, 33], [3, 54]]]]], ['loc', [null, [1, 0], [3, 56]]]]],
                        locals: [],
                        templates: []
                    };
                })()));

                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.json' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(uploadSuccess.called).to.be['false'];
                    (0, _chai.expect)(uploadFailed.calledOnce).to.be['true'];
                    (0, _chai.expect)(_this9.$('.failed').length, 'error message is displayed').to.equal(1);
                    (0, _chai.expect)(_this9.$('.failed').text()).to.match(/The image type you uploaded is not supported/);
                    done();
                });
            });

            (0, _emberMocha.it)('uploads if validate action supplied and returns true', function (done) {
                var validate = _sinon['default'].stub().returns(true);
                var uploadSuccess = _sinon['default'].spy();

                this.set('validate', validate);
                this.set('uploadSuccess', uploadSuccess);

                stubSuccessfulUpload(server);

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
                                    'column': 48
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
                        statements: [['inline', 'gh-image-uploader', [], ['uploadSuccess', ['subexpr', 'action', [['get', 'uploadSuccess', ['loc', [null, [2, 42], [2, 55]]]]], [], ['loc', [null, [2, 34], [2, 56]]]], 'validate', ['subexpr', 'action', [['get', 'validate', ['loc', [null, [3, 37], [3, 45]]]]], [], ['loc', [null, [3, 29], [3, 46]]]]], ['loc', [null, [1, 0], [3, 48]]]]],
                        locals: [],
                        templates: []
                    };
                })()));

                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.txt' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(validate.calledOnce).to.be['true'];
                    (0, _chai.expect)(uploadSuccess.calledOnce).to.be['true'];
                    done();
                });
            });

            (0, _emberMocha.it)('skips upload and displays error if validate action supplied and doesn\'t return true', function (done) {
                var _this10 = this;

                var validate = _sinon['default'].stub().returns(new _ghostAdminServicesAjax.UnsupportedMediaTypeError());
                var uploadSuccess = _sinon['default'].spy();
                var uploadFailed = _sinon['default'].spy();

                this.set('validate', validate);
                this.set('uploadSuccess', uploadSuccess);
                this.set('uploadFailed', uploadFailed);

                stubSuccessfulUpload(server);

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
                                    'column': 48
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
                        statements: [['inline', 'gh-image-uploader', [], ['uploadSuccess', ['subexpr', 'action', [['get', 'uploadSuccess', ['loc', [null, [2, 42], [2, 55]]]]], [], ['loc', [null, [2, 34], [2, 56]]]], 'uploadFailed', ['subexpr', 'action', [['get', 'uploadFailed', ['loc', [null, [3, 41], [3, 53]]]]], [], ['loc', [null, [3, 33], [3, 54]]]], 'validate', ['subexpr', 'action', [['get', 'validate', ['loc', [null, [4, 37], [4, 45]]]]], [], ['loc', [null, [4, 29], [4, 46]]]]], ['loc', [null, [1, 0], [4, 48]]]]],
                        locals: [],
                        templates: []
                    };
                })()));

                (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.png' });

                (0, _emberTestHelpersWait['default'])().then(function () {
                    (0, _chai.expect)(validate.calledOnce).to.be['true'];
                    (0, _chai.expect)(uploadSuccess.called).to.be['false'];
                    (0, _chai.expect)(uploadFailed.calledOnce).to.be['true'];
                    (0, _chai.expect)(_this10.$('.failed').length, 'error message is displayed').to.equal(1);
                    (0, _chai.expect)(_this10.$('.failed').text()).to.match(/The image type you uploaded is not supported/);
                    done();
                });
            });
        });

        describe('URL input form', function () {
            beforeEach(function () {
                this.set('configService.fileStorage', false);
            });

            (0, _emberMocha.it)('displays save button by default', function () {
                this.set('image', 'http://example.com/test.png');
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
                                    'column': 50
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'text', 'text test'], ['loc', [null, [1, 0], [1, 50]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _chai.expect)(this.$('button').length).to.equal(1);
                (0, _chai.expect)(this.$('input[type="text"]').val()).to.equal('http://example.com/test.png');
            });

            (0, _emberMocha.it)('can render without a save button', function () {
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
                                    'column': 67
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'saveButton', false, 'text', 'text test'], ['loc', [null, [1, 0], [1, 67]]]]],
                        locals: [],
                        templates: []
                    };
                })()));
                (0, _chai.expect)(this.$('button').length).to.equal(0);
                (0, _chai.expect)(this.$('.description').text().trim()).to.equal('text test');
            });

            (0, _emberMocha.it)('fires update action when save button clicked', function () {
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
                                    'line': 1,
                                    'column': 56
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 47], [1, 53]]]]], [], ['loc', [null, [1, 39], [1, 54]]]]], ['loc', [null, [1, 0], [1, 56]]]]],
                        locals: [],
                        templates: []
                    };
                })()));

                this.$('input[type="text"]').val('saved url');
                this.$('input[type="text"]').change();
                this.$('button.btn-blue').click();

                (0, _chai.expect)(update.calledOnce).to.be['true'];
                (0, _chai.expect)(update.firstCall.args[0]).to.equal('saved url');
            });

            (0, _emberMocha.it)('fires onInput action when typing URL', function () {
                var onInput = _sinon['default'].spy();
                this.set('onInput', onInput);

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
                                    'column': 58
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'onInput', ['subexpr', 'action', [['get', 'onInput', ['loc', [null, [1, 48], [1, 55]]]]], [], ['loc', [null, [1, 40], [1, 56]]]]], ['loc', [null, [1, 0], [1, 58]]]]],
                        locals: [],
                        templates: []
                    };
                })()));

                this.$('input[type="text"]').val('input url');
                this.$('input[type="text"]').change();

                (0, _chai.expect)(onInput.calledOnce).to.be['true'];
                (0, _chai.expect)(onInput.firstCall.args[0]).to.equal('input url');
            });

            (0, _emberMocha.it)('saves on enter key', function () {
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
                                    'line': 1,
                                    'column': 56
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
                        statements: [['inline', 'gh-image-uploader', [], ['image', ['subexpr', '@mut', [['get', 'image', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'update', ['subexpr', 'action', [['get', 'update', ['loc', [null, [1, 47], [1, 53]]]]], [], ['loc', [null, [1, 39], [1, 54]]]]], ['loc', [null, [1, 0], [1, 56]]]]],
                        locals: [],
                        templates: []
                    };
                })()));

                this.$('input[type="text"]').val('saved url');
                this.$('input[type="text"]').change();
                this.$('input[type="text"]').trigger(_jquery['default'].Event('keyup', { keyCode: keyCodes.enter, which: keyCodes.enter }));

                (0, _chai.expect)(update.calledOnce).to.be['true'];
                (0, _chai.expect)(update.firstCall.args[0]).to.equal('saved url');
            });
        });
    });
});
/* jshint expr:true */