export { target };
export { onOpenWormhole };
export { onCloseWormhole };
import Constraint from 'liquid-fire/constraint';

function target(name) {
  return new Constraint('parentElementClass', name + '-liquid-target');
}

function onOpenWormhole() {
  return new Constraint('newValue', function (_ref) {
    var emptyTarget = _ref.emptyTarget;
    return !emptyTarget;
  });
}

function onCloseWormhole() {
  return new Constraint('newValue', function (_ref2) {
    var emptyTarget = _ref2.emptyTarget;
    return emptyTarget;
  });
}