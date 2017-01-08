define('ghost-admin/tests/unit/mixins/validation-engine-test', ['exports', 'chai', 'mocha', 'ghost-admin/mixins/validation-engine'], function (exports, _chai, _mocha, _ghostAdminMixinsValidationEngine) {

    (0, _mocha.describe)('ValidationEngineMixin', function () {
        // Replace this with your real tests.
        // it('works', function () {
        //     var ValidationEngineObject = EmberObject.extend(ValidationEngineMixin);
        //     var subject = ValidationEngineObject.create();
        //     expect(subject).to.be.ok;
        // });

        (0, _mocha.describe)('#validate', function () {
            (0, _mocha.it)('loads the correct validator');
            (0, _mocha.it)('rejects if the validator doesn\'t exist');
            (0, _mocha.it)('resolves with valid object');
            (0, _mocha.it)('rejects with invalid object');
            (0, _mocha.it)('clears all existing errors');

            (0, _mocha.describe)('with a specified property', function () {
                (0, _mocha.it)('resolves with valid property');
                (0, _mocha.it)('rejects with invalid property');
                (0, _mocha.it)('adds property to hasValidated array');
                (0, _mocha.it)('clears existing error on specified property');
            });

            (0, _mocha.it)('handles a passed in model');
            (0, _mocha.it)('uses this.model if available');
        });

        (0, _mocha.describe)('#save', function () {
            (0, _mocha.it)('calls validate');
            (0, _mocha.it)('rejects with validation errors');
            (0, _mocha.it)('calls object\'s #save if validation passes');
            (0, _mocha.it)('skips validation if it\'s a deletion');
        });
    });
});
/* jshint expr:true */

// import EmberObject from 'ember-object';