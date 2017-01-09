define('lodash/internal/root', ['exports'], function (exports) {
  /** Used to determine if values are of the language type `Object`. */
  'use strict';

  function _typeof(obj) { return obj && obj.constructor === Symbol ? 'symbol' : typeof obj; }

  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Detect free variable `exports`. */
  var freeExports = objectTypes[typeof exports === 'undefined' ? 'undefined' : _typeof(exports)] && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = objectTypes[typeof module === 'undefined' ? 'undefined' : _typeof(module)] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = freeExports && freeModule && (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object && global;

  /** Detect free variable `self`. */
  var freeSelf = objectTypes[typeof self === 'undefined' ? 'undefined' : _typeof(self)] && self && self.Object && self;

  /** Detect free variable `window`. */
  var freeWindow = objectTypes[typeof window === 'undefined' ? 'undefined' : _typeof(window)] && window && window.Object && window;

  /**
   * Used as a reference to the global object.
   *
   * The `this` value is used if it's the global object to avoid Greasemonkey's
   * restricted `window` object, otherwise the `window` object is used.
   */
  var root = freeGlobal || window;
  // var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;

  exports['default'] = root;
});