define('ghost-admin/components/gh-editor-save-button', ['exports', 'ember-component', 'ember-computed'], function (exports, _emberComponent, _emberComputed) {
    exports['default'] = _emberComponent['default'].extend({
        tagName: 'section',
        classNames: ['splitbtn', 'js-publish-splitbutton'],
        classNameBindings: ['isNew:unsaved'],

        isNew: null,
        isPublished: null,
        willPublish: null,
        willSchedule: null,
        timeScheduled: null,
        postOrPage: null,
        submitting: false,
        statusFreeze: null,
        scheduledWillPublish: false,

        // Tracks whether we're going to change the state of the post on save
        isDangerous: (0, _emberComputed['default'])('isPublished', 'willPublish', 'willSchedule', 'isScheduled', 'scheduledWillPublish', 'statusFreeze', function () {
            if (this.get('scheduledWillPublish')) {
                if (this.get('willPublish') !== this.get('willSchedule')) {
                    return false;
                } else {
                    return true;
                }
            } else {
                if (this.get('isPublished') !== this.get('willPublish')) {
                    return true;
                } else if (this.get('isScheduled') !== this.get('willSchedule')) {
                    return true;
                } else if (this.get('statusFreeze')) {
                    // always show the save button in red, when we're 2 minutes before the scheduled date
                    return true;
                } else {
                    return false;
                }
            }
        }),

        // Text for non-scheduled Posts
        publishText: (0, _emberComputed['default'])('isPublished', 'postOrPage', 'scheduledWillPublish', function () {
            if (this.get('scheduledWillPublish')) {
                return this.get('willPublish') || this.get('willSchedule') ? 'Update ' + this.get('postOrPage') : 'Publish Now';
            } else {
                return this.get('isPublished') ? 'Update ' + this.get('postOrPage') : 'Publish Now';
            }
        }),

        draftText: (0, _emberComputed['default'])('isPublished', 'scheduledWillPublish', function () {
            if (this.get('scheduledWillPublish')) {
                return !this.get('willPublish') || !this.get('willSchedule') ? 'Unpublish' : 'Save Draft';
            } else {
                return this.get('isPublished') ? 'Unpublish' : 'Save Draft';
            }
        }),

        savePostText: (0, _emberComputed['default'])('willPublish', 'publishText', 'postOrPage', 'draftText', 'scheduledWillPublish', 'willSchedule', function () {
            // we have to show the menu for a published post when a scheduled post gets published while the user is in the
            // editor and didn't refresh yet. To do so, we use the 'scheduledWillPublish' CP helper
            if (this.get('scheduledWillPublish')) {
                if (this.get('willSchedule') || this.get('willPublish')) {
                    return 'Update ' + this.get('postOrPage');
                } else {
                    return 'Unpublish';
                }
            } else {
                return this.get('willPublish') ? this.get('publishText') : this.get('draftText');
            }
        }),

        // Text for scheduled Posts
        scheduleText: (0, _emberComputed['default'])('isScheduled', 'postOrPage', function () {
            return this.get('isScheduled') ? 'Update ' + this.get('postOrPage') : 'Schedule Post';
        }),

        unscheduleText: (0, _emberComputed['default'])('isScheduled', function () {
            return this.get('isScheduled') ? 'Unschedule' : 'Save Draft';
        }),

        saveScheduleText: (0, _emberComputed['default'])('willSchedule', 'scheduleText', 'unscheduleText', function () {
            return this.get('willSchedule') ? this.get('scheduleText') : this.get('unscheduleText');
        }),

        deleteText: (0, _emberComputed['default'])('postOrPage', function () {
            return 'Delete ' + this.get('postOrPage');
        }),

        activeClass: (0, _emberComputed['default'])('willPublish', 'willSchedule', function () {
            return this.get('willPublish') || this.get('willSchedule') ? true : false;
        }),

        actions: {
            save: function save() {
                this.sendAction('save');
            },

            setSaveType: function setSaveType(saveType) {
                this.sendAction('setSaveType', saveType);
            },

            'delete': function _delete() {
                this.sendAction('delete');
            }
        }
    });
});