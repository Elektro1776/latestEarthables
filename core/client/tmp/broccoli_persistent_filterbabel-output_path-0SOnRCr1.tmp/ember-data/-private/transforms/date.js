define("ember-data/-private/transforms/date", ["exports", "ember-data/-private/ext/date", "ember-data/transform"], function (exports, _emberDataPrivateExtDate, _emberDataTransform) {
  "use strict";

  function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

  function _typeof(obj) { return obj && obj.constructor === Symbol ? "symbol" : typeof obj; }

  exports["default"] = _emberDataTransform["default"].extend({
    deserialize: function deserialize(serialized) {
      var type = typeof serialized === "undefined" ? "undefined" : _typeof(serialized);

      if (type === "string") {
        return new Date((0, _emberDataPrivateExtDate.parseDate)(serialized));
      } else if (type === "number") {
        return new Date(serialized);
      } else if (serialized === null || serialized === undefined) {
        // if the value is null return null
        // if the value is not present in the data return undefined
        return serialized;
      } else {
        return null;
      }
    },

    serialize: function serialize(date) {
      if (_instanceof(date, Date)) {
        return date.toISOString();
      } else {
        return null;
      }
    }
  });
});

/**
  The `DS.DateTransform` class is used to serialize and deserialize
  date attributes on Ember Data record objects. This transform is used
  when `date` is passed as the type parameter to the
  [DS.attr](../../data#method_attr) function.

  ```app/models/score.js
  import DS from 'ember-data';

  export default DS.Model.extend({
    value: DS.attr('number'),
    player: DS.belongsTo('player'),
    date: DS.attr('date')
  });
  ```

  @class DateTransform
  @extends DS.Transform
  @namespace DS
 */