define('ember-sortable/utils/transitionend', ['exports'], function (exports) {
  // Thanks to http://davidwalsh.name/css-animation-callback

  'use strict';

  function whichTransitionEvent() {
    var t;
    var el = document.createElement('fake-element');
    var transitions = {
      'transition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }

  var transitionend = whichTransitionEvent();

  exports['default'] = transitionend;
});