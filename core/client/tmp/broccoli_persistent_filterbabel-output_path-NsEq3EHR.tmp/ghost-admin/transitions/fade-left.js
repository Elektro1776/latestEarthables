define('ghost-admin/transitions/fade-left', ['exports', 'ghost-admin/transitions/fade-direction'], function (exports, _ghostAdminTransitionsFadeDirection) {
  exports['default'] = function () {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return _ghostAdminTransitionsFadeDirection['default'].call(this, 'x', -1, opts, opts.offset);
  };
});