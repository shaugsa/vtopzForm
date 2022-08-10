const {src, dest} = require('gulp');
const path = require('../../config/path.js');
const app = require('../../config/app.js')

// Plagins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const autoprefix = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const gcmq = require('gulp-group-css-media-queries');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');

// SCSS
const scss = () => {
    return src(path.scss.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title : "SCSS",
            message : error.message
        }))
    }))
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefix({
        cascade: false,
    }))
    .pipe(gcmq())
    .pipe(shorthand())
    .pipe(size({title: 'main.css'}))
    .pipe(dest(path.scss.dest))
    .pipe(rename({suffix: ".min"}))
    .pipe(csso())
    .pipe(size({title: 'main.min.css'}))
    .pipe(sourcemaps.write())
    .pipe(dest(path.scss.dest))
}

module.exports = scss;