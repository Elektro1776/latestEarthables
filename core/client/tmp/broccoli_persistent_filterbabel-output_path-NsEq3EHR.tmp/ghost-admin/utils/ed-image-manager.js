define('ghost-admin/utils/ed-image-manager', ['exports'], function (exports) {
    var imageMarkdownRegex = /^!(?:\[([^\n\]]*)\])(?:\(([^\n\]]*)\))?$/gim;

    // Process the markdown content and find all of the locations where there is an image markdown block
    function parse(stringToParse) {
        var images = [];
        var m = undefined;

        while ((m = imageMarkdownRegex.exec(stringToParse)) !== null) {
            images.push(m);
        }

        return images;
    }

    // Figure out the start and end of the selection range for the src in the markdown, so we know what to replace
    function getSrcRange(content, index) {
        var images = parse(content);
        var replacement = {};

        if (index > -1) {
            // [1] matches the alt text, and 2 matches the url between the ()
            // if the () are missing entirely, which is valid, [2] will be undefined and we'll need to treat this case
            // a little differently
            if (images[index][2] === undefined) {
                replacement.needsParens = true;
                replacement.start = content.indexOf(']', images[index].index) + 1;
                replacement.end = replacement.start;
            } else {
                replacement.start = content.indexOf('(', images[index].index) + 1;
                replacement.end = replacement.start + images[index][2].length;
            }
            return replacement;
        }

        return false;
    }

    exports['default'] = {
        getSrcRange: getSrcRange
    };
});