define('ghost-admin/controllers/post-settings-menu', ['exports', 'jquery', 'ember', 'ember-controller', 'ember-computed', 'ember-metal/utils', 'ember-service/inject', 'ember-controller/inject', 'ember-string', 'ember-metal/observer', 'ghost-admin/utils/date-formatting', 'ghost-admin/mixins/settings-menu-controller', 'ghost-admin/utils/bound-one-way', 'ghost-admin/utils/isNumber'], function (exports, _jquery, _ember, _emberController, _emberComputed, _emberMetalUtils, _emberServiceInject, _emberControllerInject, _emberString, _emberMetalObserver, _ghostAdminUtilsDateFormatting, _ghostAdminMixinsSettingsMenuController, _ghostAdminUtilsBoundOneWay, _ghostAdminUtilsIsNumber) {
    var ArrayProxy = _ember['default'].ArrayProxy;
    var Handlebars = _ember['default'].Handlebars;
    var PromiseProxyMixin = _ember['default'].PromiseProxyMixin;
    exports['default'] = _emberController['default'].extend(_ghostAdminMixinsSettingsMenuController['default'], {
        selectedAuthor: null,

        application: (0, _emberControllerInject['default'])(),
        config: (0, _emberServiceInject['default'])(),
        ghostPaths: (0, _emberServiceInject['default'])(),
        notifications: (0, _emberServiceInject['default'])(),
        session: (0, _emberServiceInject['default'])(),
        slugGenerator: (0, _emberServiceInject['default'])(),
        timeZone: (0, _emberServiceInject['default'])(),

        initializeSelectedAuthor: (0, _emberMetalObserver['default'])('model', function () {
            var _this = this;

            return this.get('model.author').then(function (author) {
                _this.set('selectedAuthor', author);
                return author;
            });
        }),

        authors: (0, _emberComputed['default'])(function () {
            // Loaded asynchronously, so must use promise proxies.
            var deferred = {};

            deferred.promise = this.store.query('user', { limit: 'all' }).then(function (users) {
                return users.rejectBy('id', 'me').sortBy('name');
            }).then(function (users) {
                return users.filter(function (user) {
                    return user.get('active');
                });
            });

            return ArrayProxy.extend(PromiseProxyMixin).create(deferred);
        }),

        slugValue: (0, _ghostAdminUtilsBoundOneWay['default'])('model.slug'),
        metaTitleScratch: (0, _ghostAdminUtilsBoundOneWay['default'])('model.metaTitle'),
        metaDescriptionScratch: (0, _ghostAdminUtilsBoundOneWay['default'])('model.metaDescription'),

        seoTitle: (0, _emberComputed['default'])('model.titleScratch', 'metaTitleScratch', function () {
            var metaTitle = this.get('metaTitleScratch') || '';

            metaTitle = metaTitle.length > 0 ? metaTitle : this.get('model.titleScratch');

            if (metaTitle.length > 70) {
                metaTitle = metaTitle.substring(0, 70).trim();
                metaTitle = Handlebars.Utils.escapeExpression(metaTitle);
                metaTitle = (0, _emberString.htmlSafe)(metaTitle + '&hellip;');
            }

            return metaTitle;
        }),

        seoDescription: (0, _emberComputed['default'])('model.scratch', 'metaDescriptionScratch', function () {
            var metaDescription = this.get('metaDescriptionScratch') || '';
            var html = '';
            var el = undefined,
                placeholder = undefined;

            if (metaDescription.length > 0) {
                placeholder = metaDescription;
            } else {
                el = (0, _jquery['default'])('.rendered-markdown');

                // Get rendered markdown
                if (el !== undefined && el.length > 0) {
                    html = el.clone();
                    html.find('.js-drop-zone').remove();
                    html = html[0].innerHTML;
                }

                // Strip HTML
                placeholder = (0, _jquery['default'])('<div />', { html: html }).text();
                // Replace new lines and trim
                placeholder = placeholder.replace(/\n+/g, ' ').trim();
            }

            if (placeholder.length > 156) {
                // Limit to 156 characters
                placeholder = placeholder.substring(0, 156).trim();
                placeholder = Handlebars.Utils.escapeExpression(placeholder);
                placeholder = (0, _emberString.htmlSafe)(placeholder + '&hellip;');
            }

            return placeholder;
        }),

        seoURL: (0, _emberComputed['default'])('model.slug', 'config.blogUrl', function () {
            var blogUrl = this.get('config.blogUrl');
            var seoSlug = this.get('model.slug') ? this.get('model.slug') : '';
            var seoURL = blogUrl + '/' + seoSlug;

            // only append a slash to the URL if the slug exists
            if (seoSlug) {
                seoURL += '/';
            }

            if (seoURL.length > 70) {
                seoURL = seoURL.substring(0, 70).trim();
                seoURL = (0, _emberString.htmlSafe)(seoURL + '&hellip;');
            }

            return seoURL;
        }),

        // live-query of all tags for tag input autocomplete
        availableTags: (0, _emberComputed['default'])(function () {
            return this.get('store').filter('tag', { limit: 'all' }, function () {
                return true;
            });
        }),

        showError: function showError(error) {
            // TODO: remove null check once ValidationEngine has been removed
            if (error) {
                this.get('notifications').showAPIError(error);
            }
        },

        actions: {
            discardEnter: function discardEnter() {
                return false;
            },

            togglePage: function togglePage() {
                var _this2 = this;

                this.toggleProperty('model.page');

                // If this is a new post.  Don't save the model.  Defer the save
                // to the user pressing the save button
                if (this.get('model.isNew')) {
                    return;
                }

                this.get('model').save()['catch'](function (error) {
                    _this2.showError(error);
                    _this2.get('model').rollbackAttributes();
                });
            },

            toggleFeatured: function toggleFeatured() {
                var _this3 = this;

                this.toggleProperty('model.featured');

                // If this is a new post.  Don't save the model.  Defer the save
                // to the user pressing the save button
                if (this.get('model.isNew')) {
                    return;
                }

                this.get('model').save(this.get('saveOptions'))['catch'](function (error) {
                    _this3.showError(error);
                    _this3.get('model').rollbackAttributes();
                });
            },

            /**
             * triggered by user manually changing slug
             */
            updateSlug: function updateSlug(newSlug) {
                var _this4 = this;

                var slug = this.get('model.slug');

                newSlug = newSlug || slug;
                newSlug = newSlug && newSlug.trim();

                // Ignore unchanged slugs or candidate slugs that are empty
                if (!newSlug || slug === newSlug) {
                    // reset the input to its previous state
                    this.set('slugValue', slug);

                    return;
                }

                this.get('slugGenerator').generateSlug('post', newSlug).then(function (serverSlug) {
                    // If after getting the sanitized and unique slug back from the API
                    // we end up with a slug that matches the existing slug, abort the change
                    if (serverSlug === slug) {
                        return;
                    }

                    // Because the server transforms the candidate slug by stripping
                    // certain characters and appending a number onto the end of slugs
                    // to enforce uniqueness, there are cases where we can get back a
                    // candidate slug that is a duplicate of the original except for
                    // the trailing incrementor (e.g., this-is-a-slug and this-is-a-slug-2)

                    // get the last token out of the slug candidate and see if it's a number
                    var slugTokens = serverSlug.split('-');
                    var check = Number(slugTokens.pop());

                    // if the candidate slug is the same as the existing slug except
                    // for the incrementor then the existing slug should be used
                    if ((0, _ghostAdminUtilsIsNumber['default'])(check) && check > 0) {
                        if (slug === slugTokens.join('-') && serverSlug !== newSlug) {
                            _this4.set('slugValue', slug);

                            return;
                        }
                    }

                    _this4.set('model.slug', serverSlug);

                    if (_this4.hasObserverFor('model.titleScratch')) {
                        _this4.removeObserver('model.titleScratch', _this4, 'titleObserver');
                    }

                    // If this is a new post.  Don't save the model.  Defer the save
                    // to the user pressing the save button
                    if (_this4.get('model.isNew')) {
                        return;
                    }

                    return _this4.get('model').save();
                })['catch'](function (error) {
                    _this4.showError(error);
                    _this4.get('model').rollbackAttributes();
                });
            },

            /**
             * Parse user's set published date.
             * Action sent by post settings menu view.
             * (#1351)
             */
            setPublishedAtUTC: function setPublishedAtUTC(userInput) {
                var _this5 = this;

                if (!userInput) {
                    // Clear out the publishedAtUTC field for a draft
                    if (this.get('model.isDraft')) {
                        this.set('model.publishedAtUTC', null);
                    }
                    return;
                }

                // The user inputs a date which he expects to be in his timezone. Therefore, from now on
                // we have to work with the timezone offset which we get from the timeZone Service.
                this.get('timeZone.blogTimezone').then(function (blogTimezone) {
                    var newPublishedAt = (0, _ghostAdminUtilsDateFormatting.parseDateString)(userInput, blogTimezone);
                    var publishedAtUTC = moment.utc(_this5.get('model.publishedAtUTC'));
                    var errMessage = '';
                    var newPublishedAtUTC = undefined;

                    // Clear previous errors
                    _this5.get('model.errors').remove('post-setting-date');

                    // Validate new Published date
                    if (!newPublishedAt.isValid()) {
                        errMessage = 'Published Date must be a valid date with format: ' + 'DD MMM YY @ HH:mm (e.g. 6 Dec 14 @ 15:00)';
                    }

                    // Date is a valid date, so now make it UTC
                    newPublishedAtUTC = moment.utc(newPublishedAt);

                    if (newPublishedAtUTC.diff(moment.utc(new Date()), 'hours', true) > 0) {

                        // We have to check that the time from now is not shorter than 2 minutes,
                        // otherwise we'll have issues with the serverside scheduling procedure
                        if (newPublishedAtUTC.diff(moment.utc(new Date()), 'minutes', true) < 2) {
                            errMessage = 'Must be at least 2 minutes from now.';
                        } else {
                            // in case the post is already published and the user sets the date
                            // afterwards to a future time, we stop here, and he has to unpublish
                            // his post first
                            if (_this5.get('model.isPublished')) {
                                errMessage = 'Your post is already published.';
                                // this is the indicator for the different save button layout
                                _this5.set('timeScheduled', false);
                            }
                            // everything fine, we can start the schedule workflow and change
                            // the save buttons according to it
                            _this5.set('timeScheduled', true);
                        }
                        // if the post is already scheduled and the user changes the date back into the
                        // past, we'll set the status of the post back to draft, so he can start all over
                        // again
                    } else if (_this5.get('model.isScheduled')) {
                            _this5.set('model.status', 'draft');
                        }

                    // If errors, notify and exit.
                    if (errMessage) {
                        _this5.get('model.errors').add('post-setting-date', errMessage);
                        return;
                    }

                    // Do nothing if the user didn't actually change the date
                    if (publishedAtUTC && publishedAtUTC.isSame(newPublishedAtUTC)) {
                        return;
                    }

                    // Validation complete
                    _this5.set('model.publishedAtUTC', newPublishedAtUTC);

                    // If this is a new post.  Don't save the model.  Defer the save
                    // to the user pressing the save button
                    if (_this5.get('model.isNew')) {
                        return;
                    }

                    _this5.get('model').save()['catch'](function (error) {
                        _this5.showError(error);
                        _this5.get('model').rollbackAttributes();
                    });
                });
            },

            setMetaTitle: function setMetaTitle(metaTitle) {
                // Grab the model and current stored meta title
                var model = this.get('model');
                var currentTitle = model.get('metaTitle');

                // If the title entered matches the stored meta title, do nothing
                if (currentTitle === metaTitle) {
                    return;
                }

                // If the title entered is different, set it as the new meta title
                model.set('metaTitle', metaTitle);

                // Make sure the meta title is valid and if so, save it into the model
                return model.validate({ property: 'metaTitle' }).then(function () {
                    if (model.get('isNew')) {
                        return;
                    }

                    return model.save();
                });
            },

            setMetaDescription: function setMetaDescription(metaDescription) {
                // Grab the model and current stored meta description
                var model = this.get('model');
                var currentDescription = model.get('metaDescription');

                // If the title entered matches the stored meta title, do nothing
                if (currentDescription === metaDescription) {
                    return;
                }

                // If the title entered is different, set it as the new meta title
                model.set('metaDescription', metaDescription);

                // Make sure the meta title is valid and if so, save it into the model
                return model.validate({ property: 'metaDescription' }).then(function () {
                    if (model.get('isNew')) {
                        return;
                    }

                    return model.save();
                });
            },

            setCoverImage: function setCoverImage(image) {
                var _this6 = this;

                this.set('model.image', image);

                if (this.get('model.isNew')) {
                    return;
                }

                this.get('model').save()['catch'](function (error) {
                    _this6.showError(error);
                    _this6.get('model').rollbackAttributes();
                });
            },

            clearCoverImage: function clearCoverImage() {
                var _this7 = this;

                this.set('model.image', '');

                if (this.get('model.isNew')) {
                    return;
                }

                this.get('model').save()['catch'](function (error) {
                    _this7.showError(error);
                    _this7.get('model').rollbackAttributes();
                });
            },

            resetPubDate: function resetPubDate() {
                this.set('publishedAtUTCValue', '');
            },

            closeNavMenu: function closeNavMenu() {
                this.get('application').send('closeNavMenu');
            },

            changeAuthor: function changeAuthor(newAuthor) {
                var _this8 = this;

                var author = this.get('model.author');
                var model = this.get('model');

                // return if nothing changed
                if (newAuthor.get('id') === author.get('id')) {
                    return;
                }

                model.set('author', newAuthor);

                // if this is a new post (never been saved before), don't try to save it
                if (this.get('model.isNew')) {
                    return;
                }

                model.save()['catch'](function (error) {
                    _this8.showError(error);
                    _this8.set('selectedAuthor', author);
                    model.rollbackAttributes();
                });
            },

            addTag: function addTag(tagName, index) {
                var _this9 = this;

                var currentTags = this.get('model.tags');
                var currentTagNames = currentTags.map(function (tag) {
                    return tag.get('name').toLowerCase();
                });
                var availableTagNames = undefined,
                    tagToAdd = undefined;

                tagName = tagName.trim();

                // abort if tag is already selected
                if (currentTagNames.contains(tagName.toLowerCase())) {
                    return;
                }

                this.get('availableTags').then(function (availableTags) {
                    availableTagNames = availableTags.map(function (tag) {
                        return tag.get('name').toLowerCase();
                    });

                    // find existing tag or create new
                    if (availableTagNames.contains(tagName.toLowerCase())) {
                        tagToAdd = availableTags.find(function (tag) {
                            return tag.get('name').toLowerCase() === tagName.toLowerCase();
                        });
                    } else {
                        tagToAdd = _this9.get('store').createRecord('tag', {
                            name: tagName
                        });

                        // we need to set a UUID so that selectize has a unique value
                        // it will be ignored when sent to the server
                        tagToAdd.set('uuid', (0, _emberMetalUtils.guidFor)(tagToAdd));
                    }

                    // push tag onto post relationship
                    if (tagToAdd) {
                        _this9.get('model.tags').insertAt(index, tagToAdd);
                    }
                });
            },

            removeTag: function removeTag(tag) {
                this.get('model.tags').removeObject(tag);

                if (tag.get('isNew')) {
                    tag.destroyRecord();
                }
            }
        }
    });
});