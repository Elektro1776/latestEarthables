define('ghost-admin/tests/unit/controllers/post-settings-menu-test', ['exports', 'ember-runloop', 'rsvp', 'ember-object', 'ember-mocha', 'sinon'], function (exports, _emberRunloop, _rsvp, _emberObject, _emberMocha, _sinon) {

    function K() {
        return this;
    }

    (0, _emberMocha.describeModule)('controller:post-settings-menu', 'Unit: Controller: post-settings-menu', {
        needs: ['controller:application', 'service:notifications', 'service:slug-generator', 'service:timeZone']
    }, function () {
        (0, _emberMocha.it)('slugValue is one-way bound to model.slug', function () {
            var controller = this.subject({
                model: _emberObject['default'].create({
                    slug: 'a-slug'
                })
            });

            expect(controller.get('model.slug')).to.equal('a-slug');
            expect(controller.get('slugValue')).to.equal('a-slug');

            (0, _emberRunloop['default'])(function () {
                controller.set('model.slug', 'changed-slug');

                expect(controller.get('slugValue')).to.equal('changed-slug');
            });

            (0, _emberRunloop['default'])(function () {
                controller.set('slugValue', 'changed-directly');

                expect(controller.get('model.slug')).to.equal('changed-slug');
                expect(controller.get('slugValue')).to.equal('changed-directly');
            });

            (0, _emberRunloop['default'])(function () {
                // test that the one-way binding is still in place
                controller.set('model.slug', 'should-update');

                expect(controller.get('slugValue')).to.equal('should-update');
            });
        });

        (0, _emberMocha.it)('metaTitleScratch is one-way bound to model.metaTitle', function () {
            var controller = this.subject({
                model: _emberObject['default'].create({
                    metaTitle: 'a title'
                })
            });

            expect(controller.get('model.metaTitle')).to.equal('a title');
            expect(controller.get('metaTitleScratch')).to.equal('a title');

            (0, _emberRunloop['default'])(function () {
                controller.set('model.metaTitle', 'a different title');

                expect(controller.get('metaTitleScratch')).to.equal('a different title');
            });

            (0, _emberRunloop['default'])(function () {
                controller.set('metaTitleScratch', 'changed directly');

                expect(controller.get('model.metaTitle')).to.equal('a different title');
                expect(controller.get('metaTitleScratch')).to.equal('changed directly');
            });

            (0, _emberRunloop['default'])(function () {
                // test that the one-way binding is still in place
                controller.set('model.metaTitle', 'should update');

                expect(controller.get('metaTitleScratch')).to.equal('should update');
            });
        });

        (0, _emberMocha.it)('metaDescriptionScratch is one-way bound to model.metaDescription', function () {
            var controller = this.subject({
                model: _emberObject['default'].create({
                    metaDescription: 'a description'
                })
            });

            expect(controller.get('model.metaDescription')).to.equal('a description');
            expect(controller.get('metaDescriptionScratch')).to.equal('a description');

            (0, _emberRunloop['default'])(function () {
                controller.set('model.metaDescription', 'a different description');

                expect(controller.get('metaDescriptionScratch')).to.equal('a different description');
            });

            (0, _emberRunloop['default'])(function () {
                controller.set('metaDescriptionScratch', 'changed directly');

                expect(controller.get('model.metaDescription')).to.equal('a different description');
                expect(controller.get('metaDescriptionScratch')).to.equal('changed directly');
            });

            (0, _emberRunloop['default'])(function () {
                // test that the one-way binding is still in place
                controller.set('model.metaDescription', 'should update');

                expect(controller.get('metaDescriptionScratch')).to.equal('should update');
            });
        });

        describe('seoTitle', function () {
            (0, _emberMocha.it)('should be the metaTitle if one exists', function () {
                var controller = this.subject({
                    model: _emberObject['default'].create({
                        metaTitle: 'a meta-title',
                        titleScratch: 'should not be used'
                    })
                });

                expect(controller.get('seoTitle')).to.equal('a meta-title');
            });

            (0, _emberMocha.it)('should default to the title if an explicit meta-title does not exist', function () {
                var controller = this.subject({
                    model: _emberObject['default'].create({
                        titleScratch: 'should be the meta-title'
                    })
                });

                expect(controller.get('seoTitle')).to.equal('should be the meta-title');
            });

            (0, _emberMocha.it)('should be the metaTitle if both title and metaTitle exist', function () {
                var controller = this.subject({
                    model: _emberObject['default'].create({
                        metaTitle: 'a meta-title',
                        titleScratch: 'a title'
                    })
                });

                expect(controller.get('seoTitle')).to.equal('a meta-title');
            });

            (0, _emberMocha.it)('should revert to the title if explicit metaTitle is removed', function () {
                var controller = this.subject({
                    model: _emberObject['default'].create({
                        metaTitle: 'a meta-title',
                        titleScratch: 'a title'
                    })
                });

                expect(controller.get('seoTitle')).to.equal('a meta-title');

                (0, _emberRunloop['default'])(function () {
                    controller.set('model.metaTitle', '');

                    expect(controller.get('seoTitle')).to.equal('a title');
                });
            });

            (0, _emberMocha.it)('should truncate to 70 characters with an appended ellipsis', function () {
                var longTitle = new Array(100).join('a');
                var controller = this.subject({
                    model: _emberObject['default'].create()
                });

                expect(longTitle.length).to.equal(99);

                (0, _emberRunloop['default'])(function () {
                    var expected = longTitle.substr(0, 70) + '&hellip;';

                    controller.set('metaTitleScratch', longTitle);

                    expect(controller.get('seoTitle').toString().length).to.equal(78);
                    expect(controller.get('seoTitle').toString()).to.equal(expected);
                });
            });
        });

        describe('seoDescription', function () {
            (0, _emberMocha.it)('should be the metaDescription if one exists', function () {
                var controller = this.subject({
                    model: _emberObject['default'].create({
                        metaDescription: 'a description'
                    })
                });

                expect(controller.get('seoDescription')).to.equal('a description');
            });

            _emberMocha.it.skip('should be generated from the rendered markdown if not explicitly set', function () {
                // can't test right now because the rendered markdown is being pulled
                // from the DOM via jquery
            });

            (0, _emberMocha.it)('should truncate to 156 characters with an appended ellipsis', function () {
                var longDescription = new Array(200).join('a');
                var controller = this.subject({
                    model: _emberObject['default'].create()
                });

                expect(longDescription.length).to.equal(199);

                (0, _emberRunloop['default'])(function () {
                    var expected = longDescription.substr(0, 156) + '&hellip;';

                    controller.set('metaDescriptionScratch', longDescription);

                    expect(controller.get('seoDescription').toString().length).to.equal(164);
                    expect(controller.get('seoDescription').toString()).to.equal(expected);
                });
            });
        });

        describe('seoURL', function () {
            (0, _emberMocha.it)('should be the URL of the blog if no post slug exists', function () {
                var controller = this.subject({
                    config: _emberObject['default'].create({ blogUrl: 'http://my-ghost-blog.com' }),
                    model: _emberObject['default'].create()
                });

                expect(controller.get('seoURL')).to.equal('http://my-ghost-blog.com/');
            });

            (0, _emberMocha.it)('should be the URL of the blog plus the post slug', function () {
                var controller = this.subject({
                    config: _emberObject['default'].create({ blogUrl: 'http://my-ghost-blog.com' }),
                    model: _emberObject['default'].create({ slug: 'post-slug' })
                });

                expect(controller.get('seoURL')).to.equal('http://my-ghost-blog.com/post-slug/');
            });

            (0, _emberMocha.it)('should update when the post slug changes', function () {
                var controller = this.subject({
                    config: _emberObject['default'].create({ blogUrl: 'http://my-ghost-blog.com' }),
                    model: _emberObject['default'].create({ slug: 'post-slug' })
                });

                expect(controller.get('seoURL')).to.equal('http://my-ghost-blog.com/post-slug/');

                (0, _emberRunloop['default'])(function () {
                    controller.set('model.slug', 'changed-slug');

                    expect(controller.get('seoURL')).to.equal('http://my-ghost-blog.com/changed-slug/');
                });
            });

            (0, _emberMocha.it)('should truncate a long URL to 70 characters with an appended ellipsis', function () {
                var blogURL = 'http://my-ghost-blog.com';
                var longSlug = new Array(75).join('a');
                var controller = this.subject({
                    config: _emberObject['default'].create({ blogUrl: blogURL }),
                    model: _emberObject['default'].create({ slug: longSlug })
                });
                var expected = undefined;

                expect(longSlug.length).to.equal(74);

                expected = blogURL + '/' + longSlug + '/';
                expected = expected.substr(0, 70) + '&hellip;';

                expect(controller.get('seoURL').toString().length).to.equal(78);
                expect(controller.get('seoURL').toString()).to.equal(expected);
            });
        });

        describe('togglePage', function () {
            (0, _emberMocha.it)('should toggle the page property', function () {
                var controller = this.subject({
                    model: _emberObject['default'].create({
                        page: false,
                        isNew: true
                    })
                });

                expect(controller.get('model.page')).to.not.be.ok;

                (0, _emberRunloop['default'])(function () {
                    controller.send('togglePage');

                    expect(controller.get('model.page')).to.be.ok;
                });
            });

            (0, _emberMocha.it)('should not save the post if it is still new', function () {
                var controller = this.subject({
                    model: _emberObject['default'].create({
                        page: false,
                        isNew: true,
                        save: function save() {
                            this.incrementProperty('saved');
                            return _rsvp['default'].resolve();
                        }
                    })
                });

                (0, _emberRunloop['default'])(function () {
                    controller.send('togglePage');

                    expect(controller.get('model.page')).to.be.ok;
                    expect(controller.get('model.saved')).to.not.be.ok;
                });
            });

            (0, _emberMocha.it)('should save the post if it is not new', function () {
                var controller = this.subject({
                    model: _emberObject['default'].create({
                        page: false,
                        isNew: false,
                        save: function save() {
                            this.incrementProperty('saved');
                            return _rsvp['default'].resolve();
                        }
                    })
                });

                (0, _emberRunloop['default'])(function () {
                    controller.send('togglePage');

                    expect(controller.get('model.page')).to.be.ok;
                    expect(controller.get('model.saved')).to.equal(1);
                });
            });
        });

        describe('toggleFeatured', function () {
            (0, _emberMocha.it)('should toggle the featured property', function () {
                var controller = this.subject({
                    model: _emberObject['default'].create({
                        featured: false,
                        isNew: true
                    })
                });

                (0, _emberRunloop['default'])(function () {
                    controller.send('toggleFeatured');

                    expect(controller.get('model.featured')).to.be.ok;
                });
            });

            (0, _emberMocha.it)('should not save the post if it is still new', function () {
                var controller = this.subject({
                    model: _emberObject['default'].create({
                        featured: false,
                        isNew: true,
                        save: function save() {
                            this.incrementProperty('saved');
                            return _rsvp['default'].resolve();
                        }
                    })
                });

                (0, _emberRunloop['default'])(function () {
                    controller.send('toggleFeatured');

                    expect(controller.get('model.featured')).to.be.ok;
                    expect(controller.get('model.saved')).to.not.be.ok;
                });
            });

            (0, _emberMocha.it)('should save the post if it is not new', function () {
                var controller = this.subject({
                    model: _emberObject['default'].create({
                        featured: false,
                        isNew: false,
                        save: function save() {
                            this.incrementProperty('saved');
                            return _rsvp['default'].resolve();
                        }
                    })
                });

                (0, _emberRunloop['default'])(function () {
                    controller.send('toggleFeatured');

                    expect(controller.get('model.featured')).to.be.ok;
                    expect(controller.get('model.saved')).to.equal(1);
                });
            });
        });

        describe('updateSlug', function () {
            (0, _emberMocha.it)('should reset slugValue to the previous slug when the new slug is blank or unchanged', function () {
                var controller = this.subject({
                    model: _emberObject['default'].create({
                        slug: 'slug'
                    })
                });

                (0, _emberRunloop['default'])(function () {
                    // unchanged
                    controller.set('slugValue', 'slug');
                    controller.send('updateSlug', controller.get('slugValue'));

                    expect(controller.get('model.slug')).to.equal('slug');
                    expect(controller.get('slugValue')).to.equal('slug');
                });

                (0, _emberRunloop['default'])(function () {
                    // unchanged after trim
                    controller.set('slugValue', 'slug  ');
                    controller.send('updateSlug', controller.get('slugValue'));

                    expect(controller.get('model.slug')).to.equal('slug');
                    expect(controller.get('slugValue')).to.equal('slug');
                });

                (0, _emberRunloop['default'])(function () {
                    // blank
                    controller.set('slugValue', '');
                    controller.send('updateSlug', controller.get('slugValue'));

                    expect(controller.get('model.slug')).to.equal('slug');
                    expect(controller.get('slugValue')).to.equal('slug');
                });
            });

            (0, _emberMocha.it)('should not set a new slug if the server-generated slug matches existing slug', function (done) {
                var controller = this.subject({
                    slugGenerator: _emberObject['default'].create({
                        generateSlug: function generateSlug(slugType, str) {
                            var promise = _rsvp['default'].resolve(str.split('#')[0]);
                            this.set('lastPromise', promise);
                            return promise;
                        }
                    }),
                    model: _emberObject['default'].create({
                        slug: 'whatever'
                    })
                });

                (0, _emberRunloop['default'])(function () {
                    controller.set('slugValue', 'whatever#slug');
                    controller.send('updateSlug', controller.get('slugValue'));

                    _rsvp['default'].resolve(controller.get('lastPromise')).then(function () {
                        expect(controller.get('model.slug')).to.equal('whatever');

                        done();
                    })['catch'](done);
                });
            });

            (0, _emberMocha.it)('should not set a new slug if the only change is to the appended increment value', function (done) {
                var controller = this.subject({
                    slugGenerator: _emberObject['default'].create({
                        generateSlug: function generateSlug(slugType, str) {
                            var sanitizedStr = str.replace(/[^a-zA-Z]/g, '');
                            var promise = _rsvp['default'].resolve(sanitizedStr + '-2');
                            this.set('lastPromise', promise);
                            return promise;
                        }
                    }),
                    model: _emberObject['default'].create({
                        slug: 'whatever'
                    })
                });

                (0, _emberRunloop['default'])(function () {
                    controller.set('slugValue', 'whatever!');
                    controller.send('updateSlug', controller.get('slugValue'));

                    _rsvp['default'].resolve(controller.get('lastPromise')).then(function () {
                        expect(controller.get('model.slug')).to.equal('whatever');

                        done();
                    })['catch'](done);
                });
            });

            (0, _emberMocha.it)('should set the slug if the new slug is different', function (done) {
                var controller = this.subject({
                    slugGenerator: _emberObject['default'].create({
                        generateSlug: function generateSlug(slugType, str) {
                            var promise = _rsvp['default'].resolve(str);
                            this.set('lastPromise', promise);
                            return promise;
                        }
                    }),
                    model: _emberObject['default'].create({
                        slug: 'whatever',
                        save: K
                    })
                });

                (0, _emberRunloop['default'])(function () {
                    controller.set('slugValue', 'changed');
                    controller.send('updateSlug', controller.get('slugValue'));

                    _rsvp['default'].resolve(controller.get('lastPromise')).then(function () {
                        expect(controller.get('model.slug')).to.equal('changed');

                        done();
                    })['catch'](done);
                });
            });

            (0, _emberMocha.it)('should save the post when the slug changes and the post is not new', function (done) {
                var controller = this.subject({
                    slugGenerator: _emberObject['default'].create({
                        generateSlug: function generateSlug(slugType, str) {
                            var promise = _rsvp['default'].resolve(str);
                            this.set('lastPromise', promise);
                            return promise;
                        }
                    }),
                    model: _emberObject['default'].create({
                        slug: 'whatever',
                        saved: 0,
                        isNew: false,
                        save: function save() {
                            this.incrementProperty('saved');
                        }
                    })
                });

                (0, _emberRunloop['default'])(function () {
                    controller.set('slugValue', 'changed');
                    controller.send('updateSlug', controller.get('slugValue'));

                    _rsvp['default'].resolve(controller.get('lastPromise')).then(function () {
                        expect(controller.get('model.slug')).to.equal('changed');
                        expect(controller.get('model.saved')).to.equal(1);

                        done();
                    })['catch'](done);
                });
            });

            (0, _emberMocha.it)('should not save the post when the slug changes and the post is new', function (done) {
                var controller = this.subject({
                    slugGenerator: _emberObject['default'].create({
                        generateSlug: function generateSlug(slugType, str) {
                            var promise = _rsvp['default'].resolve(str);
                            this.set('lastPromise', promise);
                            return promise;
                        }
                    }),
                    model: _emberObject['default'].create({
                        slug: 'whatever',
                        saved: 0,
                        isNew: true,
                        save: function save() {
                            this.incrementProperty('saved');
                        }
                    })
                });

                (0, _emberRunloop['default'])(function () {
                    controller.set('slugValue', 'changed');
                    controller.send('updateSlug', controller.get('slugValue'));

                    _rsvp['default'].resolve(controller.get('lastPromise')).then(function () {
                        expect(controller.get('model.slug')).to.equal('changed');
                        expect(controller.get('model.saved')).to.equal(0);

                        done();
                    })['catch'](done);
                });
            });
        });
    });
});
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */