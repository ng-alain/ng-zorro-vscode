let fs = require('fs'),
    path = require('path'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    wrap = require("gulp-wrap"),
    gulpSequence = require('gulp-sequence'),
    hb = require('gulp-hb'),
    generate = require('./generate');

const DEF = {
    resources: './src/resources/**/*.html',
    dest: './',
    lans: [ 'zh-CN', 'en' ],
    defaultLan: 'zh-CN'
};

const i18n = JSON.parse(fs.readFileSync(`./src/i18n/${DEF.defaultLan}.json`)) || {};

gulp.task('build', () => {
    gulp.src(DEF.resources)
        .pipe(generate({
            i18n: i18n,
            template: `
    <%=item.key=='root root'?'':',' %> "<%=item.key %>": {
        "prefix": "nz-<%=item.prefix %>",
        "body": "<%=item.escapedContent %>",
        "description": "<%=item.description %>",
        "scope": "<%=item.scope %>"
    }`
        }))
        .pipe(concat('snippets.json'))
        .pipe(wrap(`{\n <%= contents %>  \n}`, {}, { parse: false }))
        .pipe(gulp.dest(DEF.dest));
});

gulp.task('watch', () => {
    gulp.watch(DEF.resources, [ 'build' ]);
});

gulp.task('gen-i18n', () => {

    let snippetJson = JSON.parse(fs.readFileSync(`./snippets.json`)) || {};

    for (let lan of DEF.lans) {
        let filePath = `./src/i18n/${lan}.json`,
            curJson = JSON.parse(fs.readFileSync(filePath)) || {},
            newJson = {};
        for (let key in snippetJson) {
            // category
            let keyArr = key.split(' '),
                categoryKey = keyArr[0],
                curItem = curJson[categoryKey] || { title: '', list: {} };

            if (!newJson[categoryKey]) {
                newJson[categoryKey] = {
                    title: curItem.title || '',
                    list: {}
                };
            }
            // list
            let newKey = keyArr.length > 1 ? keyArr.slice(1).join('-') : keyArr[0];
            newJson[categoryKey].list[newKey] = curItem.list[newKey] || snippetJson[key].description;
        }
        let jsonStr = JSON.stringify(newJson, null, '\t');
        fs.writeFileSync(filePath, jsonStr);
    }

});

gulp.task('gen-readme', () => {
    let content = fs.readFileSync(`./src/README.md`),
        i18n = JSON.parse(fs.readFileSync(`./src/i18n/${DEF.defaultLan}.json`)) || {};

    gulp.src(`./src/README.md`)
        .pipe(hb({
            data: {
                i18n: i18n
            }
        }))
        .pipe(gulp.dest("./"));
});

gulp.task('build-i18n', gulpSequence([ 'build', 'gen-i18n', 'build' ]));

gulp.task('serve', gulpSequence([ 'build', 'gen-i18n', 'watch' ]));

gulp.task('prod', gulpSequence([ 'build', 'gen-i18n', 'gen-readme', 'build' ]));
