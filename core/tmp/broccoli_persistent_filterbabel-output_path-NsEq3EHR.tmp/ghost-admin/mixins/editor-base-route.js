define('ghost-admin/mixins/editor-base-route', ['exports', 'jquery', 'ember-metal/mixin', 'rsvp', 'ember-runloop', 'ghost-admin/mixins/shortcuts-route', 'ghost-admin/mixins/style-body', 'ghost-admin/utils/ctrl-or-cmd'], function (exports, _jquery, _emberMetalMixin, _rsvp, _emberRunloop, _ghostAdminMixinsShortcutsRoute, _ghostAdminMixinsStyleBody, _ghostAdminUtilsCtrlOrCmd) {

    var generalShortcuts = {};
    generalShortcuts[_ghostAdminUtilsCtrlOrCmd['default'] + '+alt+p'] = 'publish';

    exports['default'] = _emberMetalMixin['default'].create(_ghostAdminMixinsStyleBody['default'], _ghostAdminMixinsShortcutsRoute['default'], {
        classNames: ['editor'],

        shortcuts: generalShortcuts,

        actions: {
            save: function save() {
                var selectedElement = (0, _jquery['default'])(document.activeElement);

                if (selectedElement.is('input[type="text"]')) {
                    selectedElement.trigger('focusout');
                }

                _emberRunloop['default'].scheduleOnce('actions', this, function () {
                    this.get('controller').send('save');
                });
            },

            publish: function publish() {
                var controller = this.get('controller');

                controller.send('setSaveType', 'publish');
                controller.send('save');
            },

            willTransition: function willTransition(transition) {
                var controller = this.get('controller');
                var scratch = controller.get('model.scratch');
                var controllerIsDirty = controller.get('hasDirtyAttributes');
                var model = controller.get('model');
                var state = model.getProperties('isDeleted', 'isSaving', 'hasDirtyAttributes', 'isNew');
                var deletedWithoutChanges = undefined,
                    fromNewToEdit = undefined;

                if (this.get('upgradeStatus.isRequired')) {
                    return this._super.apply(this, arguments);
                }

                // if a save is in-flight we don't know whether or not it's safe to leave
                // so we abort the transition and retry after the save has completed.
                if (state.isSaving) {
                    transition.abort();
                    return _emberRunloop['default'].later(this, function () {
                        _rsvp['default'].resolve(controller.get('lastPromise')).then(function () {
                            transition.retry();
                        });
                    }, 100);
                }

                fromNewToEdit = this.get('routeName') === 'editor.new' && transition.targetName === 'editor.edit' && transition.intent.contexts && transition.intent.contexts[0] && transition.intent.contexts[0].id === model.get('id');

                deletedWithoutChanges = state.isDeleted && (state.isSaving || !state.hasDirtyAttributes);

                if (!fromNewToEdit && !deletedWithoutChanges && controllerIsDirty) {
                    transition.abort();
                    controller.send('toggleLeaveEditorModal', transition);
                    return;
                }

                // The controller may hold model state that will be lost in the transition,
                // so we need to apply it now.
                if (fromNewToEdit && controllerIsDirty) {
                    if (scratch !== model.get('markdown')) {
                        model.set('markdown', scratch);
                    }
                }

                if (state.isNew) {
                    model.deleteRecord();
                }

                // since the transition is now certain to complete..
                window.onbeforeunload = null;

                // remove model-related listeners created in editor-base-route
                this.detachModelHooks(controller, model);
            }
        },

        renderTemplate: function renderTemplate(controller, model) {
            this._super(controller, model);

            this.render('post-settings-menu', {
                model: model,
                into: 'application',
                outlet: 'settings-menu'
            });
        },

        attachModelHooks: function attachModelHooks(controller, model) {
            // this will allow us to track when the model is saved and update the controller
            // so that we can be sure controller.hasDirtyAttributes is correct, without having to update the
            // controller on each instance of `model.save()`.
            //
            // another reason we can't do this on `model.save().then()` is because the post-settings-menu
            // also saves the model, and passing messages is difficult because we have two
            // types of editor controllers, and the PSM also exists on the posts.post route.
            //
            // The reason we can't just keep this functionality in the editor controller is
            // because we need to remove these handlers on `willTransition` in the editor route.
            model.on('didCreate', controller, controller.get('modelSaved'));
            model.on('didUpdate', controller, controller.get('modelSaved'));
        },

        detachModelHooks: function detachModelHooks(controller, model) {
            model.off('didCreate', controller, controller.get('modelSaved'));
            model.off('didUpdate', controller, controller.get('modelSaved'));
        },

        setupController: function setupController(controller, model) {
            var tags = model.get('tags');

            model.set('scratch', model.get('markdown'));
            model.set('titleScratch', model.get('title'));

            this._super.apply(this, arguments);

            if (tags) {
                // used to check if anything has changed in the editor
                controller.set('previousTagNames', tags.mapBy('name'));
            } else {
                controller.set('previousTagNames', []);
            }

            // attach model-related listeners created in editor-base-route
            this.attachModelHooks(controller, model);
        }
    });
});