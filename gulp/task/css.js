const {src, dest} = require('gulp');

const path = require('../../config/path.js');
const app = require('../../config/app.js')

// Plagins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

// CSS
const css = () => {
    return src(path.pug.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title : "CSS",
            message : error.message
        }))
    }))
    .pipe(pugs(app.pug))
    .pipe(dest(path.css.dest))
}

module.exports = pug;