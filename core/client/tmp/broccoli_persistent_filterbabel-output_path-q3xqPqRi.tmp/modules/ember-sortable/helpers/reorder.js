export { reorder };
import Ember from 'ember';

/**
  In tests, the dummy app is rendered at half size.
  To avoid rounding errors, we must therefore double
  the overshoot.
*/
var OVERSHOOT = 2;

/**
  Reorders elements to the specified state.

  Examples

      reorder(
        'mouse',
        '.some-list li',
        '[data-id="66278893"]',
        '[data-id="66278894"]',
        '[data-id="66278892"]'
      );

  @method reorder
  @param {'mouse'|'touch'} [mode]
    event mode
  @param {String} [itemSelector]
    selector for all items
  @param {...String} [resultSelectors]
    selectors for the resultant order
  @return {Promise}
*/

function reorder(app, mode, itemSelector) {
  var _app$testHelpers = app.testHelpers;
  var andThen = _app$testHelpers.andThen;
  var drag = _app$testHelpers.drag;
  var findWithAssert = _app$testHelpers.findWithAssert;
  var wait = _app$testHelpers.wait;

  for (var _len = arguments.length, resultSelectors = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    resultSelectors[_key - 3] = arguments[_key];
  }

  resultSelectors.forEach(function (selector, targetIndex) {
    andThen(function () {
      var items = findWithAssert(itemSelector);
      var element = items.filter(selector);
      var targetElement = items.eq(targetIndex);
      var dx = targetElement.offset().left - OVERSHOOT - element.offset().left;
      var dy = targetElement.offset().top - OVERSHOOT - element.offset().top;

      drag(mode, element, function () {
        return { dx: dx, dy: dy };
      });
    });
  });

  return wait();
}

export default Ember.Test.registerAsyncHelper('reorder', reorder);