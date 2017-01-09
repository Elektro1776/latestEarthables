import Ember from 'ember';

export default function (target, action) {
  if (Ember.canInvoke(target.attrs, action)) {
    var _target$attrs;

    for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      params[_key - 2] = arguments[_key];
    }

    (_target$attrs = target.attrs)[action].apply(_target$attrs, params);
  }
}