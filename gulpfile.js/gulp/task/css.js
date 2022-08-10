const {src, dest} = require('gulp');
const path = require('../../config/path.js');
const app = require('../../config/app.js')

// Plagins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefix = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const gcmq = require('gulp-group-css-media-queries');

// CSS
const css = () => {
    return src(path.css.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title : "CSS",
            message : error.message
        }))
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefix({
        cascade: false,
    }))
    .pipe(gcmq())
    .pipe(shorthand())
    .pipe(size({title: 'main.css'}))
    .pipe(concat('main.css'))
    .pipe(dest(path.css.dest))
    .pipe(rename({suffix: ".min"}))
    .pipe(csso())
    .pipe(size({title: 'main.min.css'}))
    .pipe(sourcemaps.write())
    .pipe(dest(path.css.dest))
}

module.exports = css;