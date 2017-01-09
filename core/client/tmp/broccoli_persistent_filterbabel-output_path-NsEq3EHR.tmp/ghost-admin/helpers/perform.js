define('ghost-admin/helpers/perform', ['exports', 'ember', 'ember-concurrency/-task-property', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyTaskProperty, _emberConcurrencyHelpers) {
  exports.performHelper = performHelper;

  function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

  function performHelper(args, hash) {
    var task = args[0];
    if (!_instanceof(task, _emberConcurrencyTaskProperty.Task)) {
      _ember['default'].assert('The first argument passed to the `perform` helper should be a Task object (without quotes); you passed ' + task, false);
    }

    return (0, _emberConcurrencyHelpers.taskHelperClosure)('perform', args, hash);
  }

  exports['default'] = _ember['default'].Helper.helper(performHelper);
});