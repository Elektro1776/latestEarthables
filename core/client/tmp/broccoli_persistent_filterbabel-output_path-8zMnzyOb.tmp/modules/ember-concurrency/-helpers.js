export { taskHelperClosure };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import Ember from 'ember';

function taskHelperClosure(taskMethod, _args, hash) {
  var task = _args[0];
  var outerArgs = _args.slice(1);

  return Ember.run.bind(null, function () {
    for (var _len = arguments.length, innerArgs = Array(_len), _key = 0; _key < _len; _key++) {
      innerArgs[_key] = arguments[_key];
    }

    if (hash && hash.value) {
      var _event = innerArgs.pop();
      innerArgs.push(Ember.get(_event, hash.value));
    }

    return task[taskMethod].apply(task, _toConsumableArray(outerArgs).concat(innerArgs));
  });
}