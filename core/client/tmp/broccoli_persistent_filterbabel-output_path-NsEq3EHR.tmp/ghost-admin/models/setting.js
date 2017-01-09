define('ghost-admin/models/setting', ['exports', 'ember-data/model', 'ember-data/attr', 'ghost-admin/mixins/validation-engine'], function (exports, _emberDataModel, _emberDataAttr, _ghostAdminMixinsValidationEngine) {
    exports['default'] = _emberDataModel['default'].extend(_ghostAdminMixinsValidationEngine['default'], {
        validationType: 'setting',

        title: (0, _emberDataAttr['default'])('string'),
        description: (0, _emberDataAttr['default'])('string'),
        logo: (0, _emberDataAttr['default'])('string'),
        cover: (0, _emberDataAttr['default'])('string'),
        defaultLang: (0, _emberDataAttr['default'])('string'),
        postsPerPage: (0, _emberDataAttr['default'])('number'),
        forceI18n: (0, _emberDataAttr['default'])('boolean'),
        permalinks: (0, _emberDataAttr['default'])('string'),
        activeTheme: (0, _emberDataAttr['default'])('string'),
        availableThemes: (0, _emberDataAttr['default'])(),
        activeTimezone: (0, _emberDataAttr['default'])('string', { defaultValue: 'Etc/UTC' }),
        ghost_head: (0, _emberDataAttr['default'])('string'),
        ghost_foot: (0, _emberDataAttr['default'])('string'),
        facebook: (0, _emberDataAttr['default'])('facebook-url-user'),
        twitter: (0, _emberDataAttr['default'])('twitter-url-user'),
        labs: (0, _emberDataAttr['default'])('string'),
        navigation: (0, _emberDataAttr['default'])('navigation-settings'),
        isPrivate: (0, _emberDataAttr['default'])('boolean'),
        password: (0, _emberDataAttr['default'])('string'),
        slack: (0, _emberDataAttr['default'])('slack-settings')
    });
});
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */