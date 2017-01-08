/* jshint ignore:start */

if (!runningTests) {
  require("ghost-admin/app")["default"].create({"version":"0.11","LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"ghost-admin"});
}

/* jshint ignore:end */
