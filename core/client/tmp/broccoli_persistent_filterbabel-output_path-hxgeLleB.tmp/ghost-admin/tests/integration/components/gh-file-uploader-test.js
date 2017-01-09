define('ghost-admin/tests/integration/components/gh-file-uploader-test', ['exports', 'chai', 'ember-mocha', 'jquery', 'ember-runloop', 'pretender', 'ember-test-helpers/wait', 'sinon', 'ghost-admin/tests/helpers/file-upload', 'ember-service', 'ghost-admin/services/ajax'], function (exports, _chai, _emberMocha, _jquery, _emberRunloop, _pretender, _emberTestHelpersWait, _sinon, _ghostAdminTestsHelpersFileUpload, _emberService, _ghostAdminServicesAjax) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    var notificationsStub = _emberService['default'].extend({
        showAPIError: function showAPIError(error, options) {
            // noop - to be stubbed
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

    (0, _emberMocha.describeComponent)('gh-file-uploader', 'Integration: Component: gh-file-uploader', {
        integration: true
    }, function () {
        var server = undefined;

        beforeEach(function () {
            server = new _pretender['default']();
            this.set('uploadUrl', '/ghost/api/v0.1/uploads/');

            this.register('service:notifications', notificationsStub);
            this.inject.service('notifications', { as: 'notifications' });
        });

        afterEach(function () {
            server.shutdown();
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
                    statements: [['content', 'gh-file-uploader', ['loc', [null, [1, 0], [1, 20]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _chai.expect)(this.$('label').text().trim(), 'default label').to.equal('Select or drag-and-drop a file');
        });

        (0, _emberMocha.it)('allows file input "accept" attribute to be changed', function () {
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
                    statements: [['content', 'gh-file-uploader', ['loc', [null, [1, 0], [1, 20]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$('input[type="file"]').attr('accept'), 'default "accept" attribute').to.equal('text/csv');

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
                                'column': 45
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
                    statements: [['inline', 'gh-file-uploader', [], ['accept', 'application/zip'], ['loc', [null, [1, 0], [1, 45]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _chai.expect)(this.$('input[type="file"]').attr('accept'), 'specified "accept" attribute').to.equal('application/zip');
        });

        (0, _emberMocha.it)('renders form with supplied label text', function () {
            this.set('labelText', 'My label');
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
                    statements: [['inline', 'gh-file-uploader', [], ['labelText', ['subexpr', '@mut', [['get', 'labelText', ['loc', [null, [1, 29], [1, 38]]]]], [], []]], ['loc', [null, [1, 0], [1, 40]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _chai.expect)(this.$('label').text().trim(), 'label').to.equal('My label');
        });

        (0, _emberMocha.it)('generates request to supplied endpoint', function (done) {
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
                                'column': 34
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [1, 23], [1, 32]]]]], [], []]], ['loc', [null, [1, 0], [1, 34]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

            (0, _emberTestHelpersWait['default'])().then(function () {
                (0, _chai.expect)(server.handledRequests.length).to.equal(1);
                (0, _chai.expect)(server.handledRequests[0].url).to.equal('/ghost/api/v0.1/uploads/');
                done();
            });
        });

        (0, _emberMocha.it)('fires uploadSuccess action on successful upload', function (done) {
            var uploadSuccess = _sinon['default'].spy();
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
                                'column': 71
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [1, 23], [1, 32]]]]], [], []], 'uploadSuccess', ['subexpr', 'action', [['get', 'uploadSuccess', ['loc', [null, [1, 55], [1, 68]]]]], [], ['loc', [null, [1, 47], [1, 69]]]]], ['loc', [null, [1, 0], [1, 71]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

            (0, _emberTestHelpersWait['default'])().then(function () {
                (0, _chai.expect)(uploadSuccess.calledOnce).to.be['true'];
                (0, _chai.expect)(uploadSuccess.firstCall.args[0]).to.equal('/content/images/test.png');
                done();
            });
        });

        (0, _emberMocha.it)('doesn\'t fire uploadSuccess action on failed upload', function (done) {
            var uploadSuccess = _sinon['default'].spy();
            this.set('uploadSuccess', uploadSuccess);

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
                                'column': 71
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [1, 23], [1, 32]]]]], [], []], 'uploadSuccess', ['subexpr', 'action', [['get', 'uploadSuccess', ['loc', [null, [1, 55], [1, 68]]]]], [], ['loc', [null, [1, 47], [1, 69]]]]], ['loc', [null, [1, 0], [1, 71]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

            (0, _emberTestHelpersWait['default'])().then(function () {
                (0, _chai.expect)(uploadSuccess.calledOnce).to.be['false'];
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
                                'column': 69
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [1, 23], [1, 32]]]]], [], []], 'fileSelected', ['subexpr', 'action', [['get', 'fileSelected', ['loc', [null, [1, 54], [1, 66]]]]], [], ['loc', [null, [1, 46], [1, 67]]]]], ['loc', [null, [1, 0], [1, 69]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

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
                                'column': 71
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [1, 23], [1, 32]]]]], [], []], 'uploadStarted', ['subexpr', 'action', [['get', 'uploadStarted', ['loc', [null, [1, 55], [1, 68]]]]], [], ['loc', [null, [1, 47], [1, 69]]]]], ['loc', [null, [1, 0], [1, 71]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

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
                                'column': 73
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [1, 23], [1, 32]]]]], [], []], 'uploadFinished', ['subexpr', 'action', [['get', 'uploadFinished', ['loc', [null, [1, 56], [1, 70]]]]], [], ['loc', [null, [1, 48], [1, 71]]]]], ['loc', [null, [1, 0], [1, 73]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

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
                                'column': 73
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [1, 23], [1, 32]]]]], [], []], 'uploadFinished', ['subexpr', 'action', [['get', 'uploadFinished', ['loc', [null, [1, 56], [1, 70]]]]], [], ['loc', [null, [1, 48], [1, 71]]]]], ['loc', [null, [1, 0], [1, 73]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

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
                                'column': 34
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [1, 23], [1, 32]]]]], [], []]], ['loc', [null, [1, 0], [1, 34]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

            (0, _emberTestHelpersWait['default'])().then(function () {
                (0, _chai.expect)(_this.$('.failed').length, 'error message is displayed').to.equal(1);
                (0, _chai.expect)(_this.$('.failed').text()).to.match(/The file type you uploaded is not supported/);
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
                                'column': 34
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [1, 23], [1, 32]]]]], [], []]], ['loc', [null, [1, 0], [1, 34]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

            (0, _emberTestHelpersWait['default'])().then(function () {
                (0, _chai.expect)(_this2.$('.failed').length, 'error message is displayed').to.equal(1);
                (0, _chai.expect)(_this2.$('.failed').text()).to.match(/The file you uploaded was larger/);
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
                                'column': 34
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [1, 23], [1, 32]]]]], [], []]], ['loc', [null, [1, 0], [1, 34]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

            (0, _emberTestHelpersWait['default'])().then(function () {
                (0, _chai.expect)(_this3.$('.failed').length, 'error message is displayed').to.equal(1);
                (0, _chai.expect)(_this3.$('.failed').text()).to.match(/The file you uploaded was larger/);
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
                                'column': 34
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [1, 23], [1, 32]]]]], [], []]], ['loc', [null, [1, 0], [1, 34]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

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
                                'column': 34
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [1, 23], [1, 32]]]]], [], []]], ['loc', [null, [1, 0], [1, 34]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

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
                                'column': 34
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [1, 23], [1, 32]]]]], [], []]], ['loc', [null, [1, 0], [1, 34]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

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
                                'column': 34
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [1, 23], [1, 32]]]]], [], []]], ['loc', [null, [1, 0], [1, 34]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

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
                                'column': 34
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [1, 23], [1, 32]]]]], [], []]], ['loc', [null, [1, 0], [1, 34]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

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
                                'column': 63
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [1, 23], [1, 32]]]]], [], []], 'uploadFinished', ['subexpr', 'action', [['get', 'done', ['loc', [null, [1, 56], [1, 60]]]]], [], ['loc', [null, [1, 48], [1, 61]]]]], ['loc', [null, [1, 0], [1, 63]]]]],
                    locals: [],
                    templates: []
                };
            })()));
            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

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
                    statements: [['content', 'gh-file-uploader', ['loc', [null, [1, 0], [1, 20]]]]],
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
                    files: [(0, _ghostAdminTestsHelpersFileUpload.createFile)(['test'], { name: 'test.csv' })]
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
                                'column': 71
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [1, 23], [1, 32]]]]], [], []], 'uploadSuccess', ['subexpr', 'action', [['get', 'uploadSuccess', ['loc', [null, [1, 55], [1, 68]]]]], [], ['loc', [null, [1, 47], [1, 69]]]]], ['loc', [null, [1, 0], [1, 71]]]]],
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
                                'line': 4,
                                'column': 52
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [2, 20], [2, 29]]]]], [], []], 'uploadSuccess', ['subexpr', 'action', [['get', 'uploadSuccess', ['loc', [null, [3, 38], [3, 51]]]]], [], ['loc', [null, [3, 30], [3, 52]]]], 'uploadFailed', ['subexpr', 'action', [['get', 'uploadFailed', ['loc', [null, [4, 37], [4, 49]]]]], [], ['loc', [null, [4, 29], [4, 50]]]]], ['loc', [null, [1, 0], [4, 52]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.txt' });

            (0, _emberTestHelpersWait['default'])().then(function () {
                (0, _chai.expect)(uploadSuccess.called).to.be['false'];
                (0, _chai.expect)(uploadFailed.calledOnce).to.be['true'];
                (0, _chai.expect)(_this9.$('.failed').length, 'error message is displayed').to.equal(1);
                (0, _chai.expect)(_this9.$('.failed').text()).to.match(/The file type you uploaded is not supported/);
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
                                'line': 4,
                                'column': 44
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [2, 20], [2, 29]]]]], [], []], 'uploadSuccess', ['subexpr', 'action', [['get', 'uploadSuccess', ['loc', [null, [3, 38], [3, 51]]]]], [], ['loc', [null, [3, 30], [3, 52]]]], 'validate', ['subexpr', 'action', [['get', 'validate', ['loc', [null, [4, 33], [4, 41]]]]], [], ['loc', [null, [4, 25], [4, 42]]]]], ['loc', [null, [1, 0], [4, 44]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

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
                                'line': 5,
                                'column': 44
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
                    statements: [['inline', 'gh-file-uploader', [], ['url', ['subexpr', '@mut', [['get', 'uploadUrl', ['loc', [null, [2, 20], [2, 29]]]]], [], []], 'uploadSuccess', ['subexpr', 'action', [['get', 'uploadSuccess', ['loc', [null, [3, 38], [3, 51]]]]], [], ['loc', [null, [3, 30], [3, 52]]]], 'uploadFailed', ['subexpr', 'action', [['get', 'uploadFailed', ['loc', [null, [4, 37], [4, 49]]]]], [], ['loc', [null, [4, 29], [4, 50]]]], 'validate', ['subexpr', 'action', [['get', 'validate', ['loc', [null, [5, 33], [5, 41]]]]], [], ['loc', [null, [5, 25], [5, 42]]]]], ['loc', [null, [1, 0], [5, 44]]]]],
                    locals: [],
                    templates: []
                };
            })()));

            (0, _ghostAdminTestsHelpersFileUpload.fileUpload)(this.$('input[type="file"]'), ['test'], { name: 'test.csv' });

            (0, _emberTestHelpersWait['default'])().then(function () {
                (0, _chai.expect)(validate.calledOnce).to.be['true'];
                (0, _chai.expect)(uploadSuccess.called).to.be['false'];
                (0, _chai.expect)(uploadFailed.calledOnce).to.be['true'];
                (0, _chai.expect)(_this10.$('.failed').length, 'error message is displayed').to.equal(1);
                (0, _chai.expect)(_this10.$('.failed').text()).to.match(/The file type you uploaded is not supported/);
                done();
            });
        });
    });
});
/* jshint expr:true */