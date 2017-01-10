export { target };
export { onOpenTether };
export { onCloseTether };
import Constraint from 'liquid-fire/constraint';

function target(name) {
  return new Constraint('parentElementClass', function (className) {
    if (className.match('-liquid-target')) {
      var targetName = className.replace('-liquid-target', '');
      return targetName.match(name);
    }
  });
}

function onOpenTether() {
  return new Constraint('newValue', function (_ref) {
    var emptyTarget = _ref.emptyTarget;
    return !emptyTarget;
  });
}

function onCloseTether() {
  return new Constraint('newValue', function (_ref2) {
    var emptyTarget = _ref2.emptyTarget;
    return emptyTarget;
  });
}