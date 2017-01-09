define('ghost-admin/tests/unit/controllers/settings/navigation-test', ['exports', 'chai', 'ember-mocha', 'ember', 'ghost-admin/models/navigation-item'], function (exports, _chai, _emberMocha, _ember, _ghostAdminModelsNavigationItem) {
    var run = _ember['default'].run;
    var EmberObject = _ember['default'].Object;

    var navSettingJSON = '[\n    {"label":"Home","url":"/"},\n    {"label":"JS Test","url":"javascript:alert(\'hello\');"},\n    {"label":"About","url":"/about"},\n    {"label":"Sub Folder","url":"/blah/blah"},\n    {"label":"Telephone","url":"tel:01234-567890"},\n    {"label":"Mailto","url":"mailto:test@example.com"},\n    {"label":"External","url":"https://example.com/testing?query=test#anchor"},\n    {"label":"No Protocol","url":"//example.com"}\n]';

    (0, _emberMocha.describeModule)('controller:settings/navigation', 'Unit: Controller: settings/navigation', {
        // Specify the other units that are required for this test.
        needs: ['service:config', 'service:notifications', 'model:navigation-item', 'service:ajax', 'service:ghostPaths', 'service:upgrade-status']
    }, function () {
        (0, _emberMocha.it)('blogUrl: captures config and ensures trailing slash', function () {
            var ctrl = this.subject();
            ctrl.set('config.blogUrl', 'http://localhost:2368/blog');
            (0, _chai.expect)(ctrl.get('blogUrl')).to.equal('http://localhost:2368/blog/');
        });

        (0, _emberMocha.it)('init: creates a new navigation item', function () {
            var ctrl = this.subject();

            run(function () {
                (0, _chai.expect)(ctrl.get('newNavItem')).to.exist;
                (0, _chai.expect)(ctrl.get('newNavItem.isNew')).to.be['true'];
            });
        });

        (0, _emberMocha.it)('blogUrl: captures config and ensures trailing slash', function () {
            var ctrl = this.subject();
            ctrl.set('config.blogUrl', 'http://localhost:2368/blog');
            (0, _chai.expect)(ctrl.get('blogUrl')).to.equal('http://localhost:2368/blog/');
        });

        (0, _emberMocha.it)('save: validates nav items', function (done) {
            var ctrl = this.subject();

            run(function () {
                ctrl.set('model', EmberObject.create({ navigation: [_ghostAdminModelsNavigationItem['default'].create({ label: 'First', url: '/' }), _ghostAdminModelsNavigationItem['default'].create({ label: '', url: '/second' }), _ghostAdminModelsNavigationItem['default'].create({ label: 'Third', url: '' })] }));
                // blank item won't get added because the last item is incomplete
                (0, _chai.expect)(ctrl.get('model.navigation.length')).to.equal(3);

                ctrl.save().then(function passedValidation() {
                    (0, _chai.assert)(false, 'navigationItems weren\'t validated on save');
                    done();
                })['catch'](function failedValidation() {
                    var navItems = ctrl.get('model.navigation');
                    (0, _chai.expect)(navItems[0].get('errors').toArray()).to.be.empty;
                    (0, _chai.expect)(navItems[1].get('errors.firstObject.attribute')).to.equal('label');
                    (0, _chai.expect)(navItems[2].get('errors.firstObject.attribute')).to.equal('url');
                    done();
                });
            });
        });

        (0, _emberMocha.it)('save: ignores blank last item when saving', function (done) {
            var ctrl = this.subject();

            run(function () {
                ctrl.set('model', EmberObject.create({ navigation: [_ghostAdminModelsNavigationItem['default'].create({ label: 'First', url: '/' }), _ghostAdminModelsNavigationItem['default'].create({ label: '', url: '' })] }));

                (0, _chai.expect)(ctrl.get('model.navigation.length')).to.equal(2);

                ctrl.save().then(function passedValidation() {
                    (0, _chai.assert)(false, 'navigationItems weren\'t validated on save');
                    done();
                })['catch'](function failedValidation() {
                    var navItems = ctrl.get('model.navigation');
                    (0, _chai.expect)(navItems[0].get('errors').toArray()).to.be.empty;
                    done();
                });
            });
        });

        (0, _emberMocha.it)('action - addItem: adds item to navigationItems', function () {
            var ctrl = this.subject();

            run(function () {
                ctrl.set('model', EmberObject.create({ navigation: [_ghostAdminModelsNavigationItem['default'].create({ label: 'First', url: '/first', last: true })] }));
            });

            (0, _chai.expect)(ctrl.get('model.navigation.length')).to.equal(1);

            ctrl.set('newNavItem.label', 'New');
            ctrl.set('newNavItem.url', '/new');

            run(function () {
                ctrl.send('addItem');
            });

            (0, _chai.expect)(ctrl.get('model.navigation.length')).to.equal(2);
            (0, _chai.expect)(ctrl.get('model.navigation.lastObject.label')).to.equal('New');
            (0, _chai.expect)(ctrl.get('model.navigation.lastObject.url')).to.equal('/new');
            (0, _chai.expect)(ctrl.get('model.navigation.lastObject.isNew')).to.be['false'];
            (0, _chai.expect)(ctrl.get('newNavItem.label')).to.be.blank;
            (0, _chai.expect)(ctrl.get('newNavItem.url')).to.be.blank;
            (0, _chai.expect)(ctrl.get('newNavItem.isNew')).to.be['true'];
        });

        (0, _emberMocha.it)('action - addItem: doesn\'t insert new item if last object is incomplete', function () {
            var ctrl = this.subject();

            run(function () {
                ctrl.set('model', EmberObject.create({ navigation: [_ghostAdminModelsNavigationItem['default'].create({ label: '', url: '', last: true })] }));
                (0, _chai.expect)(ctrl.get('model.navigation.length')).to.equal(1);
                ctrl.send('addItem');
                (0, _chai.expect)(ctrl.get('model.navigation.length')).to.equal(1);
            });
        });

        (0, _emberMocha.it)('action - deleteItem: removes item from navigationItems', function () {
            var ctrl = this.subject();
            var navItems = [_ghostAdminModelsNavigationItem['default'].create({ label: 'First', url: '/first' }), _ghostAdminModelsNavigationItem['default'].create({ label: 'Second', url: '/second', last: true })];

            run(function () {
                ctrl.set('model', EmberObject.create({ navigation: navItems }));
                (0, _chai.expect)(ctrl.get('model.navigation').mapBy('label')).to.deep.equal(['First', 'Second']);
                ctrl.send('deleteItem', ctrl.get('model.navigation.firstObject'));
                (0, _chai.expect)(ctrl.get('model.navigation').mapBy('label')).to.deep.equal(['Second']);
            });
        });

        (0, _emberMocha.it)('action - reorderItems: updates navigationItems list', function () {
            var ctrl = this.subject();
            var navItems = [_ghostAdminModelsNavigationItem['default'].create({ label: 'First', url: '/first' }), _ghostAdminModelsNavigationItem['default'].create({ label: 'Second', url: '/second', last: true })];

            run(function () {
                ctrl.set('model', EmberObject.create({ navigation: navItems }));
                (0, _chai.expect)(ctrl.get('model.navigation').mapBy('label')).to.deep.equal(['First', 'Second']);
                ctrl.send('reorderItems', navItems.reverseObjects());
                (0, _chai.expect)(ctrl.get('model.navigation').mapBy('label')).to.deep.equal(['Second', 'First']);
            });
        });

        (0, _emberMocha.it)('action - updateUrl: updates URL on navigationItem', function () {
            var ctrl = this.subject();
            var navItems = [_ghostAdminModelsNavigationItem['default'].create({ label: 'First', url: '/first' }), _ghostAdminModelsNavigationItem['default'].create({ label: 'Second', url: '/second', last: true })];

            run(function () {
                ctrl.set('model', EmberObject.create({ navigation: navItems }));
                (0, _chai.expect)(ctrl.get('model.navigation').mapBy('url')).to.deep.equal(['/first', '/second']);
                ctrl.send('updateUrl', '/new', ctrl.get('model.navigation.firstObject'));
                (0, _chai.expect)(ctrl.get('model.navigation').mapBy('url')).to.deep.equal(['/new', '/second']);
            });
        });
    });
});
/* jshint expr:true */