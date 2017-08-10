let _ = require("lodash"),
    path = require('path'),
    map = require("map-stream");

module.exports = function (options) {
    options.template = _.template(options.template);

    function generateJsCode(htmlFile) {
        let params = {
            item: getTemplateParams()
        };
        return options.template(params);

        function getTemplateParams() {
            let ret = {
                    content: String(htmlFile.contents),
                    scope: ''
                },
                filePath = path.normalize(htmlFile.path),
                fileNames = path.basename(filePath, '.html').split('-'),
                arr = filePath.split(path.sep),
                prefixs = arr.slice(arr.length - 3, arr.length - 1);

            if (prefixs[0] === 'src') {
                prefixs = [ ...fileNames ]
            }
            prefixs[0] = prefixs[0].includes('.') ? prefixs[0].split('.')[1] : prefixs[0];
            if (fileNames[0] === 'default')
                fileNames = prefixs;
            else
                fileNames.splice(0, 0, ...prefixs);

            ret.key = fileNames.join(' ');
            ret.prefix = fileNames.slice(1).join('-');
            ret.description = options.i18n[fileNames[0]].list[ret.prefix] || ret.key || '';
            ret.escapedContent = getEscapedTemplateContent(ret.content);

            return ret;
        }
    }

    function getEscapedTemplateContent(htmlContent) {
        return htmlContent
            .replace(/"/g, `\\"`)
            .replace(/\$event/g, `\\\\$event`)
            .replace(/\t/g, `\\t`)
            .replace(/\n/g, `\\n`)
            .replace(/\r/g, `\\r`);
    }

    function htmlToSnippet(file, callback) {
        if (file.path.endsWith('.html')) {
            if (file.isStream()) {
                return callback(new Error('Streaming not supported'));
            }
            if (file.isBuffer()) {
                file.contents = new Buffer(generateJsCode(file));
            }
        }

        return callback(null, file);
    }

    return map(htmlToSnippet);
}