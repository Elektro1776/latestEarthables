define('ghost-admin/transitions/tether', ['exports', 'ghost-admin/transitions/explode'], function (exports, _ghostAdminTransitionsExplode) {
  exports['default'] = tether;

  function tether(tetherUse, overlayUse) {
    var transitions = [];
    transitions.push({
      pick: '.liquid-tether > :first-child',
      use: tetherUse
    });

    if (overlayUse) {
      transitions.unshift({
        pick: '.liquid-tether-overlay',
        use: overlayUse
      });
    }

    return _ghostAdminTransitionsExplode['default'].apply(this, transitions);
  }
});