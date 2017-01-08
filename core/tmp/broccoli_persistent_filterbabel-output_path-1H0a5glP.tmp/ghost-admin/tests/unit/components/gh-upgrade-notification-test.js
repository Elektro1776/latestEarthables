define('ghost-admin/tests/unit/components/gh-upgrade-notification-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

    (0, _emberMocha.describeComponent)('gh-upgrade-notification', 'GhUpgradeNotificationComponent', {
        needs: ['helper:gh-format-html']
    }, function () {
        beforeEach(function () {
            var upgradeMessage = { 'content': 'Ghost 10.02.91 is available! Hot Damn. <a href="http://support.ghost.org/how-to-upgrade/" target="_blank">Click here</a> to upgrade.' };
            this.subject().set('upgradeNotification', upgradeMessage);
        });

        (0, _emberMocha.it)('renders', function () {
            // creates the component instance
            var component = this.subject();
            (0, _chai.expect)(component._state).to.equal('preRender');

            // renders the component on the page
            this.render();
            (0, _chai.expect)(component._state).to.equal('inDOM');

            (0, _chai.expect)(this.$().prop('tagName')).to.equal('SECTION');
            (0, _chai.expect)(this.$().hasClass('gh-upgrade-notification')).to.be['true'];
            // caja tools sanitize target='_blank' attribute
            (0, _chai.expect)(this.$().html()).to.contain('Hot Damn. <a href="http://support.ghost.org/how-to-upgrade/">Click here</a>');
        });
    });
});
/* jshint expr:true */