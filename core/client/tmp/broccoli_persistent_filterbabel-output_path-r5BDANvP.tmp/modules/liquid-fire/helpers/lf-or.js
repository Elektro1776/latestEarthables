export { lfOr };
import Ember from 'ember';

function lfOr(params /*, hash*/) {
  return params.reduce(function (a, b) {
    return a || b;
  }, false);
}

export default Ember.Helper.helper(lfOr);