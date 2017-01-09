define('ghost-admin/tests/unit/mixins/editor-base-controller-test', ['exports', 'chai', 'mocha', 'ember-object', 'rsvp', 'ember-runloop', 'ember-concurrency', 'ghost-admin/mixins/editor-base-controller'], function (exports, _chai, _mocha, _emberObject, _rsvp, _emberRunloop, _emberConcurrency, _ghostAdminMixinsEditorBaseController) {
    var resolve = _rsvp['default'].resolve;

    (0, _mocha.describe)('Unit: Mixin: editor-base-controller', function () {
        (0, _mocha.describe)('generateSlug', function () {
            (0, _mocha.it)('should generate a slug and set it on the model', function (done) {
                var object = _emberObject['default'].extend(_ghostAdminMixinsEditorBaseController['default'], {
                    slugGenerator: _emberObject['default'].create({
                        generateSlug: function generateSlug(slugType, str) {
                            return _rsvp['default'].resolve(str + '-slug');
                        }
                    }),
                    model: _emberObject['default'].create({ slug: '' })
                }).create();

                object.set('model.titleScratch', 'title');

                (0, _emberRunloop['default'])(function () {
                    var promise = object.get('generateSlug').perform();

                    (0, _chai.expect)(object.get('model.slug')).to.equal('');

                    promise.then(function () {
                        (0, _chai.expect)(object.get('model.slug')).to.equal('title-slug');

                        done();
                    })['catch'](done);
                });
            });

            (0, _mocha.it)('should not set the destination if the title is "(Untitled)" and the post already has a slug', function (done) {
                var object = _emberObject['default'].extend(_ghostAdminMixinsEditorBaseController['default'], {
                    slugGenerator: _emberObject['default'].create({
                        generateSlug: function generateSlug(slugType, str) {
                            return _rsvp['default'].resolve(str + '-slug');
                        }
                    }),
                    model: _emberObject['default'].create({
                        slug: 'whatever'
                    })
                }).create();

                (0, _chai.expect)(object.get('model.slug')).to.equal('whatever');

                object.set('model.titleScratch', '(Untitled)');

                (0, _emberRunloop['default'])(function () {
                    object.get('generateSlug').perform().then(function () {
                        (0, _chai.expect)(object.get('model.slug')).to.equal('whatever');

                        done();
                    })['catch'](done);
                });
            });
        });

        (0, _mocha.describe)('updateTitle', function () {
            (0, _mocha.it)('should invoke generateSlug if the post is new and a title has not been set', function (done) {
                var object = _emberObject['default'].extend(_ghostAdminMixinsEditorBaseController['default'], {
                    model: _emberObject['default'].create({ isNew: true }),
                    generateSlug: (0, _emberConcurrency.task)(regeneratorRuntime.mark(function callee$3$0() {
                        return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
                            while (1) switch (context$4$0.prev = context$4$0.next) {
                                case 0:
                                    this.set('model.slug', 'test-slug');
                                    context$4$0.next = 3;
                                    return resolve();

                                case 3:
                                case 'end':
                                    return context$4$0.stop();
                            }
                        }, callee$3$0, this);
                    }))
                }).create();

                (0, _chai.expect)(object.get('model.isNew')).to.be['true'];
                (0, _chai.expect)(object.get('model.titleScratch')).to.not.be.ok;

                (0, _emberRunloop['default'])(function () {
                    object.get('updateTitle').perform('test');

                    (0, _emberRunloop.later)(function () {
                        (0, _chai.expect)(object.get('model.titleScratch')).to.equal('test');
                        (0, _chai.expect)(object.get('model.slug')).to.equal('test-slug');

                        done();
                    }, 800);
                });
            });

            (0, _mocha.it)('should invoke generateSlug if the post is not new and a title is "(Untitled)"', function (done) {
                var object = _emberObject['default'].extend(_ghostAdminMixinsEditorBaseController['default'], {
                    model: _emberObject['default'].create({ isNew: false }),
                    generateSlug: (0, _emberConcurrency.task)(regeneratorRuntime.mark(function callee$3$0() {
                        return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
                            while (1) switch (context$4$0.prev = context$4$0.next) {
                                case 0:
                                    this.set('model.slug', 'test-slug');
                                    context$4$0.next = 3;
                                    return resolve();

                                case 3:
                                case 'end':
                                    return context$4$0.stop();
                            }
                        }, callee$3$0, this);
                    }))
                }).create();

                (0, _chai.expect)(object.get('model.isNew')).to.be['false'];
                (0, _chai.expect)(object.get('model.titleScratch')).to.not.be.ok;

                (0, _emberRunloop['default'])(function () {
                    object.get('updateTitle').perform('(Untitled)');

                    (0, _emberRunloop.later)(function () {
                        (0, _chai.expect)(object.get('model.titleScratch')).to.equal('(Untitled)');
                        (0, _chai.expect)(object.get('model.slug')).to.equal('test-slug');

                        done();
                    }, 800);
                });
            });

            (0, _mocha.it)('should not invoke generateSlug if the post is new but has a title', function (done) {
                var object = _emberObject['default'].extend(_ghostAdminMixinsEditorBaseController['default'], {
                    model: _emberObject['default'].create({
                        isNew: true,
                        title: 'a title'
                    }),
                    generateSlug: (0, _emberConcurrency.task)(regeneratorRuntime.mark(function callee$3$0() {
                        return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
                            while (1) switch (context$4$0.prev = context$4$0.next) {
                                case 0:
                                    (0, _chai.expect)(false, 'generateSlug should not be called').to.equal(true);

                                    context$4$0.next = 3;
                                    return resolve();

                                case 3:
                                case 'end':
                                    return context$4$0.stop();
                            }
                        }, callee$3$0, this);
                    }))
                }).create();

                (0, _chai.expect)(object.get('model.isNew')).to.be['true'];
                (0, _chai.expect)(object.get('model.title')).to.equal('a title');
                (0, _chai.expect)(object.get('model.titleScratch')).to.not.be.ok;

                (0, _emberRunloop['default'])(function () {
                    object.get('updateTitle').perform('test');

                    (0, _emberRunloop.later)(function () {
                        (0, _chai.expect)(object.get('model.titleScratch')).to.equal('test');
                        (0, _chai.expect)(object.get('model.slug')).to.not.be.ok;

                        done();
                    }, 800);
                });
            });

            (0, _mocha.it)('should not invoke generateSlug if the post is not new and the title is not "(Untitled)"', function (done) {
                var object = _emberObject['default'].extend(_ghostAdminMixinsEditorBaseController['default'], {
                    model: _emberObject['default'].create({ isNew: false }),
                    generateSlug: (0, _emberConcurrency.task)(regeneratorRuntime.mark(function callee$3$0() {
                        return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
                            while (1) switch (context$4$0.prev = context$4$0.next) {
                                case 0:
                                    (0, _chai.expect)(false, 'generateSlug should not be called').to.equal(true);

                                    context$4$0.next = 3;
                                    return resolve();

                                case 3:
                                case 'end':
                                    return context$4$0.stop();
                            }
                        }, callee$3$0, this);
                    }))
                }).create();

                (0, _chai.expect)(object.get('model.isNew')).to.be['false'];
                (0, _chai.expect)(object.get('model.title')).to.not.be.ok;

                (0, _emberRunloop['default'])(function () {
                    object.get('updateTitle').perform('title');

                    (0, _emberRunloop.later)(function () {
                        (0, _chai.expect)(object.get('model.titleScratch')).to.equal('title');
                        (0, _chai.expect)(object.get('model.slug')).to.not.be.ok;

                        done();
                    }, 800);
                });
            });
        });
    });
});
/* jshint expr:true */