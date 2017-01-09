define('ghost-admin/mixins/editor-base-controller', ['exports', 'ember', 'ember-metal/mixin', 'rsvp', 'ember-computed', 'ember-service/inject', 'ember-controller/inject', 'ember-string', 'ember-metal/observer', 'ember-runloop', 'ember-array/utils', 'ember-utils', 'ember-concurrency', 'ghost-admin/models/post', 'ghost-admin/utils/bound-one-way', 'ghost-admin/services/ajax'], function (exports, _ember, _emberMetalMixin, _rsvp, _emberComputed, _emberServiceInject, _emberControllerInject, _emberString, _emberMetalObserver, _emberRunloop, _emberArrayUtils, _emberUtils, _emberConcurrency, _ghostAdminModelsPost, _ghostAdminUtilsBoundOneWay, _ghostAdminServicesAjax) {
    var resolve = _rsvp['default'].resolve;

    // this array will hold properties we need to watch
    // to know if the model has been changed (`controller.hasDirtyAttributes`)
    var watchedProps = ['model.scratch', 'model.titleScratch', 'model.hasDirtyAttributes', 'model.tags.[]'];

    _ghostAdminModelsPost['default'].eachAttribute(function (name) {
        watchedProps.push('model.' + name);
    });

    exports['default'] = _emberMetalMixin['default'].create({
        _autoSaveId: null,
        _timedSaveId: null,
        submitting: false,

        showLeaveEditorModal: false,
        showReAuthenticateModal: false,

        postSettingsMenuController: (0, _emberControllerInject['default'])('post-settings-menu'),
        notifications: (0, _emberServiceInject['default'])(),
        clock: (0, _emberServiceInject['default'])(),
        slugGenerator: (0, _emberServiceInject['default'])(),

        init: function init() {
            var _this = this;

            this._super.apply(this, arguments);
            window.onbeforeunload = function () {
                return _this.get('hasDirtyAttributes') ? _this.unloadDirtyMessage() : null;
            };
        },

        shouldFocusTitle: (0, _emberComputed.alias)('model.isNew'),
        shouldFocusEditor: false,

        autoSave: (0, _emberMetalObserver['default'])('model.scratch', function () {
            // Don't save just because we swapped out models
            if (this.get('model.isDraft') && !this.get('model.isNew')) {
                var autoSaveId = undefined,
                    saveOptions = undefined,
                    timedSaveId = undefined;

                saveOptions = {
                    silent: true,
                    backgroundSave: true
                };

                timedSaveId = _emberRunloop['default'].throttle(this, 'send', 'save', saveOptions, 60000, false);
                this._timedSaveId = timedSaveId;

                autoSaveId = _emberRunloop['default'].debounce(this, 'send', 'save', saveOptions, 3000);
                this._autoSaveId = autoSaveId;
            }
        }),

        /**
         * By default, a post will not change its publish state.
         * Only with a user-set value (via setSaveType action)
         * can the post's status change.
         */
        willPublish: (0, _ghostAdminUtilsBoundOneWay['default'])('model.isPublished'),
        willSchedule: (0, _ghostAdminUtilsBoundOneWay['default'])('model.isScheduled'),
        scheduledWillPublish: (0, _ghostAdminUtilsBoundOneWay['default'])('model.isPublished'),

        // set by the editor route and `hasDirtyAttributes`. useful when checking
        // whether the number of tags has changed for `hasDirtyAttributes`.
        previousTagNames: null,

        tagNames: (0, _emberComputed.mapBy)('model.tags', 'name'),

        postOrPage: (0, _emberComputed['default'])('model.page', function () {
            return this.get('model.page') ? 'Page' : 'Post';
        }),

        // countdown timer to show the time left until publish time for a scheduled post
        // starts 15 minutes before scheduled time
        scheduleCountdown: (0, _emberComputed['default'])('model.status', 'clock.second', 'model.publishedAtUTC', 'model.timeScheduled', function () {
            var status = this.get('model.status');
            var publishTime = this.get('model.publishedAtUTC');

            this.get('clock.second');

            if (this.get('model.timeScheduled') && status === 'scheduled' && publishTime.diff(moment.utc(new Date()), 'minutes', true) < 15) {
                return moment(publishTime).fromNow();
            } else {
                return false;
            }
        }),

        // statusFreeze has two tasks:
        // 1. 2 minutes before the scheduled time it will return true to change the button layout in gh-editor-save-button. There will be no
        //    dropdown menu, the save button gets the status 'isDangerous' to turn red and will only have the option to unschedule the post
        // 2. when the scheduled time is reached we use a helper 'scheduledWillPublish' to pretend we're already dealing with a published post.
        //    This will take effect on the save button menu, the workflows and existing conditionals.
        statusFreeze: (0, _emberComputed['default'])('model.status', 'clock.second', 'model.publishedAtUTC', 'model.timeScheduled', function () {
            var status = this.get('model.status');
            var publishTime = this.get('model.publishedAtUTC');

            this.get('clock.second');

            if (this.get('model.timeScheduled') && status === 'scheduled' && publishTime.diff(moment.utc(new Date()), 'minutes', true) < 2) {
                return true;
            } else if (!this.get('model.timeScheduled') && !this.get('scheduledWillPublish') && status === 'scheduled' && publishTime.diff(moment.utc(new Date()), 'hours', true) < 0) {
                // set the helper to true, until the model refreshed
                this.set('scheduledWillPublish', true);
                this.showSaveNotification('scheduled', 'published', false);
                return false;
            } else {
                return false;
            }
        }),

        // compares previousTagNames to tagNames
        tagNamesEqual: function tagNamesEqual() {
            var tagNames = this.get('tagNames') || [];
            var previousTagNames = this.get('previousTagNames') || [];
            var hashCurrent = undefined,
                hashPrevious = undefined;

            // beware! even if they have the same length,
            // that doesn't mean they're the same.
            if (tagNames.length !== previousTagNames.length) {
                return false;
            }

            // instead of comparing with slow, nested for loops,
            // perform join on each array and compare the strings
            hashCurrent = tagNames.join('');
            hashPrevious = previousTagNames.join('');

            return hashCurrent === hashPrevious;
        },

        // a hook created in editor-base-route's setupController
        modelSaved: function modelSaved() {
            var model = this.get('model');

            // safer to updateTags on save in one place
            // rather than in all other places save is called
            model.updateTags();

            // set previousTagNames to current tagNames for hasDirtyAttributes check
            this.set('previousTagNames', this.get('tagNames'));

            // `updateTags` triggers `hasDirtyAttributes => true`.
            // for a saved model it would otherwise be false.

            // if the two "scratch" properties (title and content) match the model, then
            // it's ok to set hasDirtyAttributes to false
            if (model.get('titleScratch') === model.get('title') && model.get('scratch') === model.get('markdown')) {
                this.set('hasDirtyAttributes', false);
            }
        },

        // an ugly hack, but necessary to watch all the model's properties
        // and more, without having to be explicit and do it manually
        hasDirtyAttributes: _emberComputed['default'].apply(_ember['default'], watchedProps.concat({
            get: function get() {
                var model = this.get('model');

                if (!model) {
                    return false;
                }

                var markdown = model.get('markdown');
                var title = model.get('title');
                var titleScratch = model.get('titleScratch');
                var scratch = this.get('model.scratch');
                var changedAttributes = undefined;

                if (!this.tagNamesEqual()) {
                    return true;
                }

                if (titleScratch !== title) {
                    return true;
                }

                // since `scratch` is not model property, we need to check
                // it explicitly against the model's markdown attribute
                if (markdown !== scratch) {
                    return true;
                }

                // if the Adapter failed to save the model isError will be true
                // and we should consider the model still dirty.
                if (model.get('isError')) {
                    return true;
                }

                // models created on the client always return `hasDirtyAttributes: true`,
                // so we need to see which properties have actually changed.
                if (model.get('isNew')) {
                    changedAttributes = Object.keys(model.changedAttributes());

                    if (changedAttributes.length) {
                        return true;
                    }

                    return false;
                }

                // even though we use the `scratch` prop to show edits,
                // which does *not* change the model's `hasDirtyAttributes` property,
                // `hasDirtyAttributes` will tell us if the other props have changed,
                // as long as the model is not new (model.isNew === false).
                return model.get('hasDirtyAttributes');
            },
            set: function set(key, value) {
                return value;
            }
        })),

        // used on window.onbeforeunload
        unloadDirtyMessage: function unloadDirtyMessage() {
            return '==============================\n\n' + 'Hey there! It looks like you\'re in the middle of writing' + ' something and you haven\'t saved all of your content.' + '\n\nSave before you go!\n\n' + '==============================';
        },

        // TODO: This has to be moved to the I18n localization file.
        // This structure is supposed to be close to the i18n-localization which will be used soon.
        messageMap: {
            errors: {
                post: {
                    published: {
                        published: 'Update failed',
                        draft: 'Saving failed',
                        scheduled: 'Scheduling failed'
                    },
                    draft: {
                        published: 'Publish failed',
                        draft: 'Saving failed',
                        scheduled: 'Scheduling failed'
                    },
                    scheduled: {
                        scheduled: 'Updated failed',
                        draft: 'Unscheduling failed',
                        published: 'Publish failed'
                    }

                }
            },

            success: {
                post: {
                    published: {
                        published: 'Updated.',
                        draft: 'Saved.',
                        scheduled: 'Scheduled.'
                    },
                    draft: {
                        published: 'Published!',
                        draft: 'Saved.',
                        scheduled: 'Scheduled.'
                    },
                    scheduled: {
                        scheduled: 'Updated.',
                        draft: 'Unscheduled.',
                        published: 'Published!'
                    }
                }
            }
        },

        // TODO: Update for new notification click-action API
        showSaveNotification: function showSaveNotification(prevStatus, status, delay) {
            var message = this.messageMap.success.post[prevStatus][status];
            var notifications = this.get('notifications');
            var type = undefined,
                path = undefined;

            if (status === 'published') {
                type = this.get('postOrPage');
                path = this.get('model.absoluteUrl');
            } else {
                type = 'Preview';
                path = this.get('model.previewUrl');
            }

            message += '&nbsp;<a href="' + path + '" target="_blank">View ' + type + '</a>';

            notifications.showNotification(message.htmlSafe(), { delayed: delay });
        },

        showErrorAlert: function showErrorAlert(prevStatus, status, error, delay) {
            var message = this.messageMap.errors.post[prevStatus][status];
            var notifications = this.get('notifications');
            var errorMessage = undefined;

            function isString(str) {
                /*global toString*/
                return toString.call(str) === '[object String]';
            }

            if (error && isString(error)) {
                errorMessage = error;
            } else if (error && (0, _emberArrayUtils.isEmberArray)(error)) {
                // This is here because validation errors are returned as an array
                // TODO: remove this once validations are fixed
                errorMessage = error[0];
            } else if (error && error.errors && error.errors[0].message) {
                errorMessage = error.errors[0].message;
            } else {
                errorMessage = 'Unknown Error';
            }

            message += ': ' + errorMessage;
            message = (0, _emberString.htmlSafe)(message);

            notifications.showAlert(message, { type: 'error', delayed: delay, key: 'post.save' });
        },

        updateTitle: (0, _emberConcurrency.task)(regeneratorRuntime.mark(function callee$0$0(newTitle) {
            return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
                while (1) switch (context$1$0.prev = context$1$0.next) {
                    case 0:
                        this.set('model.titleScratch', newTitle);

                        // if model is not new and title is not '(Untitled)', or model is new and
                        // has a title, don't generate a slug

                        if (!((!this.get('model.isNew') || this.get('model.title')) && newTitle !== '(Untitled)')) {
                            context$1$0.next = 3;
                            break;
                        }

                        return context$1$0.abrupt('return');

                    case 3:
                        context$1$0.next = 5;
                        return (0, _emberConcurrency.timeout)(700);

                    case 5:
                        context$1$0.next = 7;
                        return this.get('generateSlug').perform();

                    case 7:
                    case 'end':
                        return context$1$0.stop();
                }
            }, callee$0$0, this);
        })).restartable(),

        generateSlug: (0, _emberConcurrency.task)(regeneratorRuntime.mark(function callee$0$0() {
            var title, slug;
            return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
                while (1) switch (context$1$0.prev = context$1$0.next) {
                    case 0:
                        title = this.get('model.titleScratch');

                        if (!(title === '(Untitled)' && this.get('model.slug'))) {
                            context$1$0.next = 3;
                            break;
                        }

                        return context$1$0.abrupt('return');

                    case 3:
                        context$1$0.prev = 3;
                        context$1$0.next = 6;
                        return this.get('slugGenerator').generateSlug('post', title);

                    case 6:
                        slug = context$1$0.sent;

                        if (!(0, _emberUtils.isBlank)(slug)) {
                            this.set('model.slug', slug);
                        }
                        context$1$0.next = 13;
                        break;

                    case 10:
                        context$1$0.prev = 10;
                        context$1$0.t0 = context$1$0['catch'](3);

                        // Nothing to do (would be nice to log this somewhere though),
                        // but a rejected promise needs to be handled here so that a resolved
                        // promise is returned.
                        if ((0, _ghostAdminServicesAjax.isVersionMismatchError)(context$1$0.t0)) {
                            this.get('notifications').showAPIError(context$1$0.t0);
                        }

                    case 13:
                    case 'end':
                        return context$1$0.stop();
                }
            }, callee$0$0, this, [[3, 10]]);
        })).enqueue(),

        actions: {
            cancelTimers: function cancelTimers() {
                var autoSaveId = this._autoSaveId;
                var timedSaveId = this._timedSaveId;

                if (autoSaveId) {
                    _emberRunloop['default'].cancel(autoSaveId);
                    this._autoSaveId = null;
                }

                if (timedSaveId) {
                    _emberRunloop['default'].cancel(timedSaveId);
                    this._timedSaveId = null;
                }
            },

            save: function save(options) {
                var _this2 = this;

                var prevStatus = this.get('model.status');
                var isNew = this.get('model.isNew');
                var psmController = this.get('postSettingsMenuController');
                var promise = undefined,
                    status = undefined;

                options = options || {};
                this.toggleProperty('submitting');
                if (options.backgroundSave) {
                    // do not allow a post's status to be set to published by a background save
                    status = 'draft';
                } else {
                    if (this.get('scheduledWillPublish')) {
                        status = !this.get('willSchedule') && !this.get('willPublish') ? 'draft' : 'published';
                    } else {
                        if (this.get('willPublish') && !this.get('model.isScheduled') && !this.get('statusFreeze')) {
                            status = 'published';
                        } else if (this.get('willSchedule') && !this.get('model.isPublished') && !this.get('statusFreeze')) {
                            status = 'scheduled';
                        } else {
                            status = 'draft';
                        }
                    }
                }

                this.send('cancelTimers');

                // Set the properties that are indirected
                // set markdown equal to what's in the editor, minus the image markers.
                this.set('model.markdown', this.get('model.scratch'));
                this.set('model.status', status);

                // Set a default title
                if (!this.get('model.titleScratch').trim()) {
                    this.set('model.titleScratch', '(Untitled)');
                }

                this.set('model.title', this.get('model.titleScratch'));
                this.set('model.metaTitle', psmController.get('metaTitleScratch'));
                this.set('model.metaDescription', psmController.get('metaDescriptionScratch'));

                if (!this.get('model.slug')) {
                    this.get('updateTitle').cancelAll();

                    promise = this.get('generateSlug').perform();
                }

                return resolve(promise).then(function () {
                    return _this2.get('model').save(options).then(function (model) {
                        if (!options.silent) {
                            _this2.showSaveNotification(prevStatus, model.get('status'), isNew ? true : false);
                        }

                        _this2.toggleProperty('submitting');

                        // reset the helper CP back to false after saving and refetching the new model
                        // which is published by the scheduler process on the server now
                        if (_this2.get('scheduledWillPublish')) {
                            _this2.set('scheduledWillPublish', false);
                        }
                        return model;
                    });
                })['catch'](function (error) {
                    // re-throw if we have a general server error
                    // TODO: use isValidationError(error) once we have
                    // ember-ajax/ember-data integration
                    if (error && error.errors && error.errors[0].errorType !== 'ValidationError') {
                        _this2.toggleProperty('submitting');
                        _this2.send('error', error);
                        return;
                    }

                    if (!options.silent) {
                        error = error || _this2.get('model.errors.messages');
                        _this2.showErrorAlert(prevStatus, _this2.get('model.status'), error);
                    }

                    _this2.set('model.status', prevStatus);

                    _this2.toggleProperty('submitting');
                    return _this2.get('model');
                });
            },

            setSaveType: function setSaveType(newType) {
                if (newType === 'publish') {
                    this.set('willPublish', true);
                    this.set('willSchedule', false);
                } else if (newType === 'draft') {
                    this.set('willPublish', false);
                    this.set('willSchedule', false);
                } else if (newType === 'schedule') {
                    this.set('willSchedule', true);
                    this.set('willPublish', false);
                }
            },

            autoSaveNew: function autoSaveNew() {
                if (this.get('model.isNew')) {
                    this.send('save', { silent: true, backgroundSave: true });
                }
            },

            toggleLeaveEditorModal: function toggleLeaveEditorModal(transition) {
                this.set('leaveEditorTransition', transition);
                this.toggleProperty('showLeaveEditorModal');
            },

            leaveEditor: function leaveEditor() {
                var transition = this.get('leaveEditorTransition');
                var model = this.get('model');

                if (!transition) {
                    this.get('notifications').showAlert('Sorry, there was an error in the application. Please let the Ghost team know what happened.', { type: 'error' });
                    return;
                }

                // definitely want to clear the data store and post of any unsaved, client-generated tags
                model.updateTags();

                if (model.get('isNew')) {
                    // the user doesn't want to save the new, unsaved post, so delete it.
                    model.deleteRecord();
                } else {
                    // roll back changes on model props
                    model.rollbackAttributes();
                }

                // setting hasDirtyAttributes to false here allows willTransition on the editor route to succeed
                this.set('hasDirtyAttributes', false);

                // since the transition is now certain to complete, we can unset window.onbeforeunload here
                window.onbeforeunload = null;

                return transition.retry();
            },

            updateTitle: function updateTitle() {
                var currentTitle = this.model.get('title');
                var newTitle = this.model.get('titleScratch').trim();

                if (currentTitle === newTitle) {
                    return;
                }

                if (this.get('model.isDraft') && !this.get('model.isNew')) {
                    // this is preferrable to setting hasDirtyAttributes to false manually
                    this.model.set('title', newTitle);

                    this.send('save', {
                        silent: true,
                        backgroundSave: true
                    });
                }
            },

            toggleReAuthenticateModal: function toggleReAuthenticateModal() {
                this.toggleProperty('showReAuthenticateModal');
            }
        }
    });
});

// debounce for 700 milliseconds

// Only set an "untitled" slug once per post