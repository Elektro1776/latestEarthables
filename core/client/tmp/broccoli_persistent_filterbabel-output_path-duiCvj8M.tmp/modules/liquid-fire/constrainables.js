import { childRoute, routeName, routeModel } from "liquid-fire/ember-internals";

export default {
  oldValue: {
    reversesTo: 'newValue',
    accessor: function accessor(conditions) {
      return [versionValue(conditions, 1)];
    }
  },
  newValue: {
    reversesTo: 'oldValue',
    accessor: function accessor(conditions) {
      return [versionValue(conditions, 0)];
    }
  },
  oldRoute: {
    reversesTo: 'newRoute',
    accessor: function accessor(conditions) {
      return routeName(childRoute(versionValue(conditions, 1), conditions.matchContext.outletName));
    }
  },
  newRoute: {
    reversesTo: 'oldRoute',
    accessor: function accessor(conditions) {
      return routeName(childRoute(versionValue(conditions, 0), conditions.matchContext.outletName));
    }
  },
  oldModel: {
    reversesTo: 'newModel',
    accessor: function accessor(conditions) {
      return routeModel(childRoute(versionValue(conditions, 1), conditions.matchContext.outletName));
    }
  },
  newModel: {
    reversesTo: 'oldModel',
    accessor: function accessor(conditions) {
      return routeModel(childRoute(versionValue(conditions, 0), conditions.matchContext.outletName));
    }
  },
  helperName: {
    accessor: function accessor(conditions) {
      return conditions.matchContext.helperName;
    }
  },
  outletName: {
    accessor: function accessor(conditions) {
      return conditions.matchContext.outletName;
    }
  },
  parentElementClass: {
    accessor: function accessor(conditions) {
      var cls = conditions.parentElement.attr('class');
      if (cls) {
        return cls.split(/\s+/);
      }
    }
  },
  parentElement: {},
  firstTime: {},
  media: {}
};

function versionValue(conditions, index) {
  var versions = conditions.versions;
  return versions[index] ? versions[index].value : null;
}