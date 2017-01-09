define('liquid-fire/ember-internals', ['exports', 'liquid-fire/ember-internals/common', 'liquid-fire/ember-internals/version-specific'], function (exports, _liquidFireEmberInternalsCommon, _liquidFireEmberInternalsVersionSpecific) {
  /*
    This module is intended to encapsulate all the known places where
    liquid-fire depends on non-public Ember APIs.
  
    See also tests/helpers/ember-testing-internals.js, which does the
    same thing but for code that is only needed in the test environment.
  
   */

  // These things are the same for all supported Ember versions.
  'use strict';

  Object.defineProperty(exports, 'childRoute', {
    enumerable: true,
    get: function get() {
      return _liquidFireEmberInternalsCommon.childRoute;
    }
  });
  Object.defineProperty(exports, 'routeName', {
    enumerable: true,
    get: function get() {
      return _liquidFireEmberInternalsCommon.routeName;
    }
  });
  Object.defineProperty(exports, 'routeModel', {
    enumerable: true,
    get: function get() {
      return _liquidFireEmberInternalsCommon.routeModel;
    }
  });
  Object.defineProperty(exports, 'routeIsStable', {
    enumerable: true,
    get: function get() {
      return _liquidFireEmberInternalsCommon.routeIsStable;
    }
  });
  Object.defineProperty(exports, 'modelIsStable', {
    enumerable: true,
    get: function get() {
      return _liquidFireEmberInternalsCommon.modelIsStable;
    }
  });

  // These things are swapped out at build time based on the Ember
  // version.
  Object.defineProperty(exports, 'containingElement', {
    enumerable: true,
    get: function get() {
      return _liquidFireEmberInternalsVersionSpecific.containingElement;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _liquidFireEmberInternalsVersionSpecific.initialize;
    }
  });
  Object.defineProperty(exports, 'getOutletStateTemplate', {
    enumerable: true,
    get: function get() {
      return _liquidFireEmberInternalsVersionSpecific.getOutletStateTemplate;
    }
  });
});