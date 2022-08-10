const {src, dest} = require('gulp');
const path = require('../../config/path.js');
const app = require('../../config/app.js')

// Plagins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

// js
const js = () => {
    return src(path.js.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title : "CSS",
            message : error.message
        }))
    }))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(sourcemaps.write())
    .pipe(dest(path.js.dest))
}

module.exports = js;