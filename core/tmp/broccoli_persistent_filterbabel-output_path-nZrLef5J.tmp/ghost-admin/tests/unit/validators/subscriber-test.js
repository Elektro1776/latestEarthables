define('ghost-admin/tests/unit/validators/subscriber-test', ['exports', 'chai', 'mocha', 'ember', 'ghost-admin/mixins/validation-engine'], function (exports, _chai, _mocha, _ember, _ghostAdminMixinsValidationEngine) {
    var run = _ember['default'].run;
    var EmberObject = _ember['default'].Object;

    var Subscriber = EmberObject.extend(_ghostAdminMixinsValidationEngine['default'], {
        validationType: 'subscriber',

        email: null
    });

    (0, _mocha.describe)('Unit: Validator: subscriber', function () {
        (0, _mocha.it)('validates email by default', function () {
            var subscriber = Subscriber.create({});
            var properties = subscriber.get('validators.subscriber.properties');

            (0, _chai.expect)(properties, 'properties').to.include('email');
        });

        (0, _mocha.it)('passes with a valid email', function () {
            var subscriber = Subscriber.create({ email: 'test@example.com' });
            var passed = false;

            run(function () {
                subscriber.validate({ property: 'email' }).then(function () {
                    passed = true;
                });
            });

            (0, _chai.expect)(passed, 'passed').to.be['true'];
            (0, _chai.expect)(subscriber.get('hasValidated'), 'hasValidated').to.include('email');
        });

        (0, _mocha.it)('validates email presence', function () {
            var subscriber = Subscriber.create({});
            var passed = false;

            run(function () {
                subscriber.validate({ property: 'email' }).then(function () {
                    passed = true;
                });
            });

            var emailErrors = subscriber.get('errors').errorsFor('email').get(0);
            (0, _chai.expect)(emailErrors.attribute, 'errors.email.attribute').to.equal('email');
            (0, _chai.expect)(emailErrors.message, 'errors.email.message').to.equal('Please enter an email.');

            (0, _chai.expect)(passed, 'passed').to.be['false'];
            (0, _chai.expect)(subscriber.get('hasValidated'), 'hasValidated').to.include('email');
        });

        (0, _mocha.it)('validates email', function () {
            var subscriber = Subscriber.create({ email: 'foo' });
            var passed = false;

            run(function () {
                subscriber.validate({ property: 'email' }).then(function () {
                    passed = true;
                });
            });

            var emailErrors = subscriber.get('errors').errorsFor('email').get(0);
            (0, _chai.expect)(emailErrors.attribute, 'errors.email.attribute').to.equal('email');
            (0, _chai.expect)(emailErrors.message, 'errors.email.message').to.equal('Invalid email.');

            (0, _chai.expect)(passed, 'passed').to.be['false'];
            (0, _chai.expect)(subscriber.get('hasValidated'), 'hasValidated').to.include('email');
        });
    });
});
/* jshint expr:true */