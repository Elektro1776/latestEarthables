define('ghost-admin/components/gh-timezone-select', ['exports', 'ember-component', 'ember-computed', 'ember-service/inject', 'ember-invoke-action'], function (exports, _emberComponent, _emberComputed, _emberServiceInject, _emberInvokeAction) {
    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

    exports['default'] = _emberComponent['default'].extend({
        classNames: ['form-group', 'for-select'],

        activeTimezone: null,
        availableTimezones: null,

        clock: (0, _emberServiceInject['default'])(),

        availableTimezoneNames: (0, _emberComputed.mapBy)('availableTimezones', 'name'),

        hasTimezoneOverride: (0, _emberComputed['default'])('activeTimezone', 'availableTimezoneNames', function () {
            var activeTimezone = this.get('activeTimezone');
            var availableTimezoneNames = this.get('availableTimezoneNames');

            return !availableTimezoneNames.contains(activeTimezone);
        }),

        selectedTimezone: (0, _emberComputed['default'])('activeTimezone', 'availableTimezones', 'hasTimezoneOverride', function () {
            var hasTimezoneOverride = this.get('hasTimezoneOverride');
            var activeTimezone = this.get('activeTimezone');
            var availableTimezones = this.get('availableTimezones');

            if (hasTimezoneOverride) {
                return { name: '', label: '' };
            }

            return availableTimezones.filterBy('name', activeTimezone).get('firstObject');
        }),

        selectableTimezones: (0, _emberComputed['default'])('availableTimezones', 'hasTimezoneOverride', function () {
            var hasTimezoneOverride = this.get('hasTimezoneOverride');
            var availableTimezones = this.get('availableTimezones');

            if (hasTimezoneOverride) {
                return [{ name: '', label: '' }].concat(_toConsumableArray(availableTimezones));
            }

            return availableTimezones;
        }),

        localTime: (0, _emberComputed['default'])('hasTimezoneOverride', 'activeTimezone', 'selectedTimezone', 'clock.second', function () {
            var hasTimezoneOverride = this.get('hasTimezoneOverride');
            var timezone = hasTimezoneOverride ? this.get('activeTimezone') : this.get('selectedTimezone.name');

            this.get('clock.second');
            return timezone ? moment().tz(timezone).format('HH:mm:ss') : moment().utc().format('HH:mm:ss');
        }),

        actions: {
            setTimezone: function setTimezone(timezone) {
                (0, _emberInvokeAction.invokeAction)(this, 'update', timezone);
            }
        }
    });
});