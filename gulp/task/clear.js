const {src} = require('gulp');
const clean = require('gulp-clean');

const path = require('../../config/path.js');

const clear = () => {
    return src(path.root)
    .pipe(clean())
}

module.exports = clear;