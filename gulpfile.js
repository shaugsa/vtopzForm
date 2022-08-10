const { watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

const path = require('./config/path.js');
const app = require('./config/app.js');

const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

// tasks
const clear = require('./gulp/task/clear.js');
const pug = require('./gulp/task/pug.js');
const css = require('./gulp/task/css.js');
const scss = require('./gulp/task/scss.js');
const js = require('./gulp/task/js.js');
const img = require('./gulp/task/img.js');
const font = require('./gulp/task/font.js');



// watch for HTML
const watcher = () => {
    watch(path.pug.watch, pug).on('all', browserSync.reload);
    watch(path.scss.watch, scss).on('all', browserSync.reload);
    watch(path.js.watch, js).on('all', browserSync.reload);
    watch(path.img.watch, img).on('all', browserSync.reload);
    watch(path.font.watch, font).on('all', browserSync.reload);
}

const build = series(
    clear,
    parallel(pug, scss, js, img, font),
);

const dev = series(
    build.
    parallel(watcher, server)
);

// exports.html = html;
exports.pug = pug;
exports.watcher = watcher;
exports.clear = clear;
exports.css = css;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;


//dev
exports.default = app.isProd
    ? build
    : dev;
