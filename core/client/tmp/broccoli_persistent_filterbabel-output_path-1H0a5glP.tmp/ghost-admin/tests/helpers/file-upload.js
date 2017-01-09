define('ghost-admin/tests/helpers/file-upload', ['exports', 'jquery', 'ember-test'], function (exports, _jquery, _emberTest) {
    exports.createFile = createFile;
    exports.fileUpload = fileUpload;

    function createFile() {
        var content = arguments.length <= 0 || arguments[0] === undefined ? ['test'] : arguments[0];
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var name = options.name;
        var type = options.type;

        var file = new Blob(content, { type: type ? type : 'text/plain' });
        file.name = name ? name : 'test.txt';

        return file;
    }

    function fileUpload($element, content, options) {
        var file = createFile(content, options);
        var event = _jquery['default'].Event('change', {
            testingFiles: [file]
        });

        $element.trigger(event);
    }

    exports['default'] = _emberTest['default'].registerAsyncHelper('fileUpload', function (app, selector, content, options) {
        var file = createFile(content, options);

        return triggerEvent(selector, 'change', { foor: 'bar', testingFiles: [file] });
    });
});
/* global Blob */