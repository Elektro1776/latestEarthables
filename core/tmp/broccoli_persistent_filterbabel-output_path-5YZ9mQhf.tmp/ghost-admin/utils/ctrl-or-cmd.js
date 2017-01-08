define('ghost-admin/utils/ctrl-or-cmd', ['exports'], function (exports) {
  exports['default'] = navigator.userAgent.indexOf('Mac') !== -1 ? 'command' : 'ctrl';
});