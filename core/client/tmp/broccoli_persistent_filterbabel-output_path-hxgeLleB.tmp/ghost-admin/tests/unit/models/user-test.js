define('ghost-admin/tests/unit/models/user-test', ['exports', 'ember-runloop', 'ember-mocha'], function (exports, _emberRunloop, _emberMocha) {

    (0, _emberMocha.describeModel)('user', 'Unit: Model: user', {
        needs: ['model:role', 'serializer:application', 'serializer:user']
    }, function () {
        (0, _emberMocha.it)('has a validation type of "user"', function () {
            var model = this.subject();

            expect(model.get('validationType')).to.equal('user');
        });

        (0, _emberMocha.it)('active property is correct', function () {
            var model = this.subject({
                status: 'active'
            });

            expect(model.get('active')).to.be.ok;

            ['warn-1', 'warn-2', 'warn-3', 'warn-4', 'locked'].forEach(function (status) {
                (0, _emberRunloop['default'])(function () {
                    model.set('status', status);
                });
                expect(model.get('status')).to.be.ok;
            });

            (0, _emberRunloop['default'])(function () {
                model.set('status', 'inactive');
            });
            expect(model.get('active')).to.not.be.ok;

            (0, _emberRunloop['default'])(function () {
                model.set('status', 'invited');
            });
            expect(model.get('active')).to.not.be.ok;
        });

        (0, _emberMocha.it)('invited property is correct', function () {
            var model = this.subject({
                status: 'invited'
            });

            expect(model.get('invited')).to.be.ok;

            (0, _emberRunloop['default'])(function () {
                model.set('status', 'invited-pending');
            });
            expect(model.get('invited')).to.be.ok;

            (0, _emberRunloop['default'])(function () {
                model.set('status', 'active');
            });
            expect(model.get('invited')).to.not.be.ok;

            (0, _emberRunloop['default'])(function () {
                model.set('status', 'inactive');
            });
            expect(model.get('invited')).to.not.be.ok;
        });

        (0, _emberMocha.it)('pending property is correct', function () {
            var model = this.subject({
                status: 'invited-pending'
            });

            expect(model.get('pending')).to.be.ok;

            (0, _emberRunloop['default'])(function () {
                model.set('status', 'invited');
            });
            expect(model.get('pending')).to.not.be.ok;

            (0, _emberRunloop['default'])(function () {
                model.set('status', 'inactive');
            });
            expect(model.get('pending')).to.not.be.ok;
        });

        (0, _emberMocha.it)('role property is correct', function () {
            var _this = this;

            var model = this.subject();

            (0, _emberRunloop['default'])(function () {
                var role = _this.store().push({ data: { id: 1, type: 'role', attributes: { name: 'Author' } } });
                model.get('roles').pushObject(role);
            });
            expect(model.get('role.name')).to.equal('Author');

            (0, _emberRunloop['default'])(function () {
                var role = _this.store().push({ data: { id: 1, type: 'role', attributes: { name: 'Editor' } } });
                model.set('role', role);
            });
            expect(model.get('role.name')).to.equal('Editor');
        });

        (0, _emberMocha.it)('isAuthor property is correct', function () {
            var _this2 = this;

            var model = this.subject();

            (0, _emberRunloop['default'])(function () {
                var role = _this2.store().push({ data: { id: 1, type: 'role', attributes: { name: 'Author' } } });
                model.set('role', role);
            });
            expect(model.get('isAuthor')).to.be.ok;
            expect(model.get('isEditor')).to.not.be.ok;
            expect(model.get('isAdmin')).to.not.be.ok;
            expect(model.get('isOwner')).to.not.be.ok;
        });

        (0, _emberMocha.it)('isEditor property is correct', function () {
            var _this3 = this;

            var model = this.subject();

            (0, _emberRunloop['default'])(function () {
                var role = _this3.store().push({ data: { id: 1, type: 'role', attributes: { name: 'Editor' } } });
                model.set('role', role);
            });
            expect(model.get('isEditor')).to.be.ok;
            expect(model.get('isAuthor')).to.not.be.ok;
            expect(model.get('isAdmin')).to.not.be.ok;
            expect(model.get('isOwner')).to.not.be.ok;
        });

        (0, _emberMocha.it)('isAdmin property is correct', function () {
            var _this4 = this;

            var model = this.subject();

            (0, _emberRunloop['default'])(function () {
                var role = _this4.store().push({ data: { id: 1, type: 'role', attributes: { name: 'Administrator' } } });
                model.set('role', role);
            });
            expect(model.get('isAdmin')).to.be.ok;
            expect(model.get('isAuthor')).to.not.be.ok;
            expect(model.get('isEditor')).to.not.be.ok;
            expect(model.get('isOwner')).to.not.be.ok;
        });

        (0, _emberMocha.it)('isOwner property is correct', function () {
            var _this5 = this;

            var model = this.subject();

            (0, _emberRunloop['default'])(function () {
                var role = _this5.store().push({ data: { id: 1, type: 'role', attributes: { name: 'Owner' } } });
                model.set('role', role);
            });
            expect(model.get('isOwner')).to.be.ok;
            expect(model.get('isAuthor')).to.not.be.ok;
            expect(model.get('isAdmin')).to.not.be.ok;
            expect(model.get('isEditor')).to.not.be.ok;
        });
    });
});