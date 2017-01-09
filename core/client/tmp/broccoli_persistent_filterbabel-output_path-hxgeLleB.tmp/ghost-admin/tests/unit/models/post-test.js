define('ghost-admin/tests/unit/models/post-test', ['exports', 'ember-runloop', 'ember-object', 'ember-mocha'], function (exports, _emberRunloop, _emberObject, _emberMocha) {

    (0, _emberMocha.describeModel)('post', 'Unit: Model: post', {
        needs: ['model:user', 'model:tag', 'model:role']
    }, function () {
        (0, _emberMocha.it)('has a validation type of "post"', function () {
            var model = this.subject();

            expect(model.validationType).to.equal('post');
        });

        (0, _emberMocha.it)('isPublished, isDraft and isScheduled are correct', function () {
            var model = this.subject({
                status: 'published'
            });

            expect(model.get('isPublished')).to.be.ok;
            expect(model.get('isDraft')).to.not.be.ok;
            expect(model.get('isScheduled')).to.not.be.ok;

            (0, _emberRunloop['default'])(function () {
                model.set('status', 'draft');

                expect(model.get('isPublished')).to.not.be.ok;
                expect(model.get('isDraft')).to.be.ok;
                expect(model.get('isScheduled')).to.not.be.ok;
            });

            (0, _emberRunloop['default'])(function () {
                model.set('status', 'scheduled');

                expect(model.get('isScheduled')).to.be.ok;
                expect(model.get('isPublished')).to.not.be.ok;
                expect(model.get('isDraft')).to.not.be.ok;
            });
        });

        (0, _emberMocha.it)('isAuthoredByUser is correct', function () {
            /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
            var model = this.subject({
                authorId: 15
            });
            /* jscs:enable requireCamelCaseOrUpperCaseIdentifiers */
            var user = _emberObject['default'].create({ id: '15' });

            expect(model.isAuthoredByUser(user)).to.be.ok;

            (0, _emberRunloop['default'])(function () {
                model.set('authorId', 1);

                expect(model.isAuthoredByUser(user)).to.not.be.ok;
            });
        });

        (0, _emberMocha.it)('updateTags removes and deletes old tags', function () {
            var model = this.subject();

            (0, _emberRunloop['default'])(this, function () {
                var modelTags = model.get('tags');
                var tag1 = this.store().createRecord('tag', { id: '1' });
                var tag2 = this.store().createRecord('tag', { id: '2' });
                var tag3 = this.store().createRecord('tag');

                // During testing a record created without an explicit id will get
                // an id of 'fixture-n' instead of null
                tag3.set('id', null);

                modelTags.pushObject(tag1);
                modelTags.pushObject(tag2);
                modelTags.pushObject(tag3);

                expect(model.get('tags.length')).to.equal(3);

                model.updateTags();

                expect(model.get('tags.length')).to.equal(2);
                expect(model.get('tags.firstObject.id')).to.equal('1');
                expect(model.get('tags').objectAt(1).get('id')).to.equal('2');
                expect(tag1.get('isDeleted')).to.not.be.ok;
                expect(tag2.get('isDeleted')).to.not.be.ok;
                expect(tag3.get('isDeleted')).to.be.ok;
            });
        });
    });
});