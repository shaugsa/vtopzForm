const {src, dest} = require('gulp');

const html = () => {
    return src('./index.html')
    .pipe(dest('./public'))
}

exports.html = html;