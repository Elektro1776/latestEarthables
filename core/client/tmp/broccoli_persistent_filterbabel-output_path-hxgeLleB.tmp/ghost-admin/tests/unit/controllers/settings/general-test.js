define('ghost-admin/tests/unit/controllers/settings/general-test', ['exports', 'ember', 'ember-mocha'], function (exports, _ember, _emberMocha) {
    var run = _ember['default'].run;
    var EmberObject = _ember['default'].Object;

    (0, _emberMocha.describeModule)('controller:settings/general', 'Unit: Controller: settings/general', {
        needs: ['service:notifications']
    }, function () {
        (0, _emberMocha.it)('isDatedPermalinks should be correct', function () {
            var controller = this.subject({
                model: EmberObject.create({
                    permalinks: '/:year/:month/:day/:slug/'
                })
            });

            expect(controller.get('isDatedPermalinks')).to.be.ok;

            run(function () {
                controller.set('model.permalinks', '/:slug/');

                expect(controller.get('isDatedPermalinks')).to.not.be.ok;
            });
        });

        (0, _emberMocha.it)('setting isDatedPermalinks should switch between dated and slug', function () {
            var controller = this.subject({
                model: EmberObject.create({
                    permalinks: '/:year/:month/:day/:slug/'
                })
            });

            run(function () {
                controller.set('isDatedPermalinks', false);

                expect(controller.get('isDatedPermalinks')).to.not.be.ok;
                expect(controller.get('model.permalinks')).to.equal('/:slug/');
            });

            run(function () {
                controller.set('isDatedPermalinks', true);

                expect(controller.get('isDatedPermalinks')).to.be.ok;
                expect(controller.get('model.permalinks')).to.equal('/:year/:month/:day/:slug/');
            });
        });
    });
});