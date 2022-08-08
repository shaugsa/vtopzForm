const { watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

const path = require('./config/path.js');

const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

// tasks
const clear = require('./gulp/task/clear.js');
const pug = require('./gulp/task/pug.js')
const pug = require('./gulp/task/css.js')
const pug = require('./gulp/task/css.js')


// watch for HTML
const watcher = () => {
    watch(path.pug.watch, pug).on('all', browserSync.reload);
    watch(path.css.watch, css).on('all', browserSync.reload);
}

// exports.html = html;
exports.pug = pug;
exports.watcher = watcher;
exports.clear = clear;
exports.css = css;


//dev
exports.dev = series(
    clear,
    parallel (pug, css),
    parallel (watcher, server)
);