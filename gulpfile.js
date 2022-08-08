const {src, dest, watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');

// Plagins
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify')


// dev HTNL
const html = () => {
    return src('src/*.html')
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'HTML',
            message: error.message
        }))
    }))
    .pipe(fileinclude())
    .pipe(size({ title : "До сжатия"}))
    .pipe(htmlmin({
        collapseWhitespace: true,
    }))
    .pipe(size({ title : "После сжатия"}))
    .pipe(dest('./public'))
    .pipe(browserSync.stream())
}

const server = () => {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    })
}

const clear = () => {
    return src('./public')
    .pipe(clean())
}

// watch for HTML
const watcher = () => {
    watch('./src/**/*.*', html )
}

exports.html = html;
exports.watcher = watcher;
exports.clear = clear;

exports.dev = series(
    clear,
    html,
    parallel (watcher, server)
);