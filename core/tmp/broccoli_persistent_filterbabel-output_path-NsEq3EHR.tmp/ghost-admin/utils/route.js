define('ghost-admin/utils/route', ['exports', 'ember-route'], function (exports, _emberRoute) {

    _emberRoute['default'].reopen({
        actions: {
            willTransition: function willTransition(transition) {
                if (this.get('upgradeStatus.isRequired')) {
                    transition.abort();
                    this.get('upgradeStatus').requireUpgrade();
                    return false;
                } else {
                    this._super.apply(this, arguments);
                }
            }
        }
    });
});