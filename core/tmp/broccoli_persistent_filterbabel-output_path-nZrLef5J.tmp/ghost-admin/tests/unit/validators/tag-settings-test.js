define('ghost-admin/tests/unit/validators/tag-settings-test', ['exports', 'chai', 'mocha', 'sinon', 'ember-runloop', 'ember-object', 'ghost-admin/mixins/validation-engine'], function (exports, _chai, _mocha, _sinon, _emberRunloop, _emberObject, _ghostAdminMixinsValidationEngine) {

    var Tag = _emberObject['default'].extend(_ghostAdminMixinsValidationEngine['default'], {
        validationType: 'tag',

        name: null,
        description: null,
        metaTitle: null,
        metaDescription: null
    });

    // TODO: These tests have way too much duplication, consider creating test
    // helpers for validations

    // TODO: Move testing of validation-engine behaviour into validation-engine-test
    // and replace these tests with specific validator tests

    (0, _mocha.describe)('Unit: Validator: tag-settings', function () {
        (0, _mocha.it)('validates all fields by default', function () {
            var tag = Tag.create({});
            var properties = tag.get('validators.tag.properties');

            // TODO: This is checking implementation details rather than expected
            // behaviour. Replace once we have consistent behaviour (see below)
            (0, _chai.expect)(properties, 'properties').to.include('name');
            (0, _chai.expect)(properties, 'properties').to.include('slug');
            (0, _chai.expect)(properties, 'properties').to.include('description');
            (0, _chai.expect)(properties, 'properties').to.include('metaTitle');
            (0, _chai.expect)(properties, 'properties').to.include('metaDescription');

            // TODO: .validate (and  by extension .save) doesn't currently affect
            // .hasValidated - it would be good to make this consistent.
            // The following tests currently fail:
            //
            // run(() => {
            //     tag.validate();
            // });
            //
            // expect(tag.get('hasValidated'), 'hasValidated').to.include('name');
            // expect(tag.get('hasValidated'), 'hasValidated').to.include('description');
            // expect(tag.get('hasValidated'), 'hasValidated').to.include('metaTitle');
            // expect(tag.get('hasValidated'), 'hasValidated').to.include('metaDescription');
        });

        (0, _mocha.it)('passes with valid name', function () {
            // longest valid name
            var tag = Tag.create({ name: new Array(151).join('x') });
            var passed = false;

            (0, _chai.expect)(tag.get('name').length, 'name length').to.equal(150);

            (0, _emberRunloop['default'])(function () {
                tag.validate({ property: 'name' }).then(function () {
                    passed = true;
                });
            });

            (0, _chai.expect)(passed, 'passed').to.be['true'];
            (0, _chai.expect)(tag.get('hasValidated'), 'hasValidated').to.include('name');
        });

        (0, _mocha.it)('validates name presence', function () {
            var tag = Tag.create();
            var passed = false;
            var nameErrors = undefined;

            // TODO: validator is currently a singleton meaning state leaks
            // between all objects that use it. Each object should either
            // get it's own validator instance or validator objects should not
            // contain state. The following currently fails:
            //
            // let validator = tag.get('validators.tag')
            // expect(validator.get('passed'), 'passed').to.be.false;

            (0, _emberRunloop['default'])(function () {
                tag.validate({ property: 'name' }).then(function () {
                    passed = true;
                });
            });

            nameErrors = tag.get('errors').errorsFor('name').get(0);
            (0, _chai.expect)(nameErrors.attribute, 'errors.name.attribute').to.equal('name');
            (0, _chai.expect)(nameErrors.message, 'errors.name.message').to.equal('You must specify a name for the tag.');

            (0, _chai.expect)(passed, 'passed').to.be['false'];
            (0, _chai.expect)(tag.get('hasValidated'), 'hasValidated').to.include('name');
        });

        (0, _mocha.it)('validates names starting with a comma', function () {
            var tag = Tag.create({ name: ',test' });
            var passed = false;
            var nameErrors = undefined;

            (0, _emberRunloop['default'])(function () {
                tag.validate({ property: 'name' }).then(function () {
                    passed = true;
                });
            });

            nameErrors = tag.get('errors').errorsFor('name').get(0);
            (0, _chai.expect)(nameErrors.attribute, 'errors.name.attribute').to.equal('name');
            (0, _chai.expect)(nameErrors.message, 'errors.name.message').to.equal('Tag names can\'t start with commas.');

            (0, _chai.expect)(passed, 'passed').to.be['false'];
            (0, _chai.expect)(tag.get('hasValidated'), 'hasValidated').to.include('name');
        });

        (0, _mocha.it)('validates name length', function () {
            // shortest invalid name
            var tag = Tag.create({ name: new Array(152).join('x') });
            var passed = false;
            var nameErrors = undefined;

            (0, _chai.expect)(tag.get('name').length, 'name length').to.equal(151);

            (0, _emberRunloop['default'])(function () {
                tag.validate({ property: 'name' }).then(function () {
                    passed = true;
                });
            });

            nameErrors = tag.get('errors').errorsFor('name')[0];
            (0, _chai.expect)(nameErrors.attribute, 'errors.name.attribute').to.equal('name');
            (0, _chai.expect)(nameErrors.message, 'errors.name.message').to.equal('Tag names cannot be longer than 150 characters.');

            (0, _chai.expect)(passed, 'passed').to.be['false'];
            (0, _chai.expect)(tag.get('hasValidated'), 'hasValidated').to.include('name');
        });

        (0, _mocha.it)('passes with valid slug', function () {
            // longest valid slug
            var tag = Tag.create({ slug: new Array(151).join('x') });
            var passed = false;

            (0, _chai.expect)(tag.get('slug').length, 'slug length').to.equal(150);

            (0, _emberRunloop['default'])(function () {
                tag.validate({ property: 'slug' }).then(function () {
                    passed = true;
                });
            });

            (0, _chai.expect)(passed, 'passed').to.be['true'];
            (0, _chai.expect)(tag.get('hasValidated'), 'hasValidated').to.include('slug');
        });

        (0, _mocha.it)('validates slug length', function () {
            // shortest invalid slug
            var tag = Tag.create({ slug: new Array(152).join('x') });
            var passed = false;
            var slugErrors = undefined;

            (0, _chai.expect)(tag.get('slug').length, 'slug length').to.equal(151);

            (0, _emberRunloop['default'])(function () {
                tag.validate({ property: 'slug' }).then(function () {
                    passed = true;
                });
            });

            slugErrors = tag.get('errors').errorsFor('slug')[0];
            (0, _chai.expect)(slugErrors.attribute, 'errors.slug.attribute').to.equal('slug');
            (0, _chai.expect)(slugErrors.message, 'errors.slug.message').to.equal('URL cannot be longer than 150 characters.');

            (0, _chai.expect)(passed, 'passed').to.be['false'];
            (0, _chai.expect)(tag.get('hasValidated'), 'hasValidated').to.include('slug');
        });

        (0, _mocha.it)('passes with a valid description', function () {
            // longest valid description
            var tag = Tag.create({ description: new Array(201).join('x') });
            var passed = false;

            (0, _chai.expect)(tag.get('description').length, 'description length').to.equal(200);

            (0, _emberRunloop['default'])(function () {
                tag.validate({ property: 'description' }).then(function () {
                    passed = true;
                });
            });

            (0, _chai.expect)(passed, 'passed').to.be['true'];
            (0, _chai.expect)(tag.get('hasValidated'), 'hasValidated').to.include('description');
        });

        (0, _mocha.it)('validates description length', function () {
            // shortest invalid description
            var tag = Tag.create({ description: new Array(202).join('x') });
            var passed = false;
            var errors = undefined;

            (0, _chai.expect)(tag.get('description').length, 'description length').to.equal(201);

            (0, _emberRunloop['default'])(function () {
                tag.validate({ property: 'description' }).then(function () {
                    passed = true;
                });
            });

            errors = tag.get('errors').errorsFor('description')[0];
            (0, _chai.expect)(errors.attribute, 'errors.description.attribute').to.equal('description');
            (0, _chai.expect)(errors.message, 'errors.description.message').to.equal('Description cannot be longer than 200 characters.');

            // TODO: tag.errors appears to be a singleton and previous errors are
            // not cleared despite creating a new tag object
            //
            // console.log(JSON.stringify(tag.get('errors')));
            // expect(tag.get('errors.length')).to.equal(1);

            (0, _chai.expect)(passed, 'passed').to.be['false'];
            (0, _chai.expect)(tag.get('hasValidated'), 'hasValidated').to.include('description');
        });

        // TODO: we have both metaTitle and metaTitle property names on the
        // model/validator respectively - this should be standardised
        (0, _mocha.it)('passes with a valid metaTitle', function () {
            // longest valid metaTitle
            var tag = Tag.create({ metaTitle: new Array(151).join('x') });
            var passed = false;

            (0, _chai.expect)(tag.get('metaTitle').length, 'metaTitle length').to.equal(150);

            (0, _emberRunloop['default'])(function () {
                tag.validate({ property: 'metaTitle' }).then(function () {
                    passed = true;
                });
            });

            (0, _chai.expect)(passed, 'passed').to.be['true'];
            (0, _chai.expect)(tag.get('hasValidated'), 'hasValidated').to.include('metaTitle');
        });

        (0, _mocha.it)('validates metaTitle length', function () {
            // shortest invalid metaTitle
            var tag = Tag.create({ metaTitle: new Array(152).join('x') });
            var passed = false;
            var errors = undefined;

            (0, _chai.expect)(tag.get('metaTitle').length, 'metaTitle length').to.equal(151);

            (0, _emberRunloop['default'])(function () {
                tag.validate({ property: 'metaTitle' }).then(function () {
                    passed = true;
                });
            });

            errors = tag.get('errors').errorsFor('metaTitle')[0];
            (0, _chai.expect)(errors.attribute, 'errors.metaTitle.attribute').to.equal('metaTitle');
            (0, _chai.expect)(errors.message, 'errors.metaTitle.message').to.equal('Meta Title cannot be longer than 150 characters.');

            (0, _chai.expect)(passed, 'passed').to.be['false'];
            (0, _chai.expect)(tag.get('hasValidated'), 'hasValidated').to.include('metaTitle');
        });

        // TODO: we have both metaDescription and metaDescription property names on
        // the model/validator respectively - this should be standardised
        (0, _mocha.it)('passes with a valid metaDescription', function () {
            // longest valid description
            var tag = Tag.create({ metaDescription: new Array(201).join('x') });
            var passed = false;

            (0, _chai.expect)(tag.get('metaDescription').length, 'metaDescription length').to.equal(200);

            (0, _emberRunloop['default'])(function () {
                tag.validate({ property: 'metaDescription' }).then(function () {
                    passed = true;
                });
            });

            (0, _chai.expect)(passed, 'passed').to.be['true'];
            (0, _chai.expect)(tag.get('hasValidated'), 'hasValidated').to.include('metaDescription');
        });

        (0, _mocha.it)('validates metaDescription length', function () {
            // shortest invalid metaDescription
            var tag = Tag.create({ metaDescription: new Array(202).join('x') });
            var passed = false;
            var errors = undefined;

            (0, _chai.expect)(tag.get('metaDescription').length, 'metaDescription length').to.equal(201);

            (0, _emberRunloop['default'])(function () {
                tag.validate({ property: 'metaDescription' }).then(function () {
                    passed = true;
                });
            });

            errors = tag.get('errors').errorsFor('metaDescription')[0];
            (0, _chai.expect)(errors.attribute, 'errors.metaDescription.attribute').to.equal('metaDescription');
            (0, _chai.expect)(errors.message, 'errors.metaDescription.message').to.equal('Meta Description cannot be longer than 200 characters.');

            (0, _chai.expect)(passed, 'passed').to.be['false'];
            (0, _chai.expect)(tag.get('hasValidated'), 'hasValidated').to.include('metaDescription');
        });
    });
});
/* jshint expr:true */

// import validator from 'ghost-admin/validators/tag-settings';