export { drag };
import Ember from 'ember';
var $ = Ember.$;

/**
  Drags elements by an offset specified in pixels.

  Examples

      drag(
        'mouse',
        '.some-list li[data-item=uno]',
        function() {
          return { dy: 50, dx: 20 };
        }
      );

  @method drag
  @param {'mouse'|'touch'} [mode]
    event mode
  @param {String} [itemSelector]
    selector for the element to drag
  @param {Function} [offsetFn]
    function returning the offset by which to drag
  @param {Object} [callbacks]
    callbacks that are fired at the different stages of the interaction
  @return {Promise}
*/

function drag(app, mode, itemSelector, offsetFn) {
  var callbacks = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];

  var start = undefined,
      move = undefined,
      end = undefined,
      which = undefined;

  var _app$testHelpers = app.testHelpers;
  var andThen = _app$testHelpers.andThen;
  var findWithAssert = _app$testHelpers.findWithAssert;
  var wait = _app$testHelpers.wait;

  if (mode === 'mouse') {
    start = 'mousedown';
    move = 'mousemove';
    end = 'mouseup';
    which = 1;
  } else if (mode === 'touch') {
    start = 'touchstart';
    move = 'touchmove';
    end = 'touchend';
  } else {
    throw new Error('Unsupported mode: \'' + mode + '\'');
  }

  andThen(function () {
    var item = findWithAssert(itemSelector);
    var itemOffset = item.offset();
    var offset = offsetFn();
    var targetX = itemOffset.left + offset.dx;
    var targetY = itemOffset.top + offset.dy;

    triggerEvent(app, item, start, {
      pageX: itemOffset.left,
      pageY: itemOffset.top,
      which: which
    });

    if (callbacks.dragstart) {
      andThen(callbacks.dragstart);
    }

    triggerEvent(app, item, move, {
      pageX: itemOffset.left,
      pageY: itemOffset.top
    });

    if (callbacks.dragmove) {
      andThen(callbacks.dragmove);
    }

    triggerEvent(app, item, move, {
      pageX: targetX,
      pageY: targetY
    });

    triggerEvent(app, item, end, {
      pageX: targetX,
      pageY: targetY
    });

    if (callbacks.dragend) {
      andThen(callbacks.dragend);
    }
  });

  return wait();
}

function triggerEvent(app, el, type, props) {
  return app.testHelpers.andThen(function () {
    var event = $.Event(type, props);
    $(el).trigger(event);
  });
}

export default Ember.Test.registerAsyncHelper('drag', drag);