define('ember-cli-mirage/factory', ['exports'], function (exports) {
  'use strict';

  function _typeof(obj) { return obj && obj.constructor === Symbol ? 'symbol' : typeof obj; }

  var Factory = function Factory() {
    this.build = function (sequence) {
      var object = {};
      var attrs = this.attrs || {};

      _.keys(attrs).forEach(function (key) {
        var type = _typeof(attrs[key]);

        if (type === 'function') {
          object[key] = attrs[key].call(attrs, sequence);
        } else {
          object[key] = attrs[key];
        }
      });

      return object;
    };
  };

  Factory.extend = function (attrs) {
    // Merge the new attributes with existing ones. If conflict, new ones win.
    var newAttrs = _.assign({}, this.attrs, attrs);

    var Subclass = function Subclass() {
      this.attrs = newAttrs;
      Factory.call(this);
    };

    // Copy extend
    Subclass.extend = Factory.extend;

    // Store a reference on the class for future subclasses
    Subclass.attrs = newAttrs;

    return Subclass;
  };

  exports['default'] = Factory;
});