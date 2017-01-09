define('ember-cli-mirage/orm/associations/association', ['exports'], function (exports) {
  'use strict';

  function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

  function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  var Association = function Association(type) {
    _classCallCheck(this, Association);

    this.type = type;

    // The model type that owns this association
    this.owner = '';

    // The model type this association refers to
    this.target = '';
  };

  exports['default'] = Association;
});