define('ghost-admin/components/gh-task-button', ['exports', 'ember-computed', 'ember-invoke-action', 'ghost-admin/components/gh-spin-button', 'ghost-admin/templates/components/gh-spin-button'], function (exports, _emberComputed, _emberInvokeAction, _ghostAdminComponentsGhSpinButton, _ghostAdminTemplatesComponentsGhSpinButton) {

    /**
     * Task Button works exactly like Spin button, but with one major difference:
     *
     * Instead of passing a "submitting" parameter (which is bound to the parent object),
     * you pass an ember-concurrency task. All of the "submitting" behavior is handled automatically.
     *
     * As another bonus, there's no need to handle canceling the promises when something
     * like a controller changes. Because the only task running is handled through this
     * component, all running promises will automatically be cancelled when this
     * component is removed from the DOM
     */
    exports['default'] = _ghostAdminComponentsGhSpinButton['default'].extend({
        layout: _ghostAdminTemplatesComponentsGhSpinButton['default'], // This is used to we don't have to re-implement the template

        classNameBindings: ['showSpinner:appear-disabled'],

        task: null,

        submitting: (0, _emberComputed.reads)('task.last.isRunning'),
        disabled: false,

        click: function click() {
            var task = this.get('task');
            var taskName = this.get('task.name');
            var lastTaskName = this.get('task.last.task.name');

            // task-buttons are never truly disabled so that clicks when a taskGroup
            // is running don't get dropped however that means we need to check here
            // so we don't spam actions through multiple clicks
            if (this.get('showSpinner') && taskName === lastTaskName) {
                return;
            }

            (0, _emberInvokeAction.invokeAction)(this, 'action');

            return task.perform();
        }
    });
});