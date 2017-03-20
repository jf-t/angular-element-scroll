let gulp = require('gulp');
let tsc = require('gulp-typescript');

gulp.task('default', function () {
    return gulp.src('src/*.ts')
           .pipe(tsc({
               out: 'index.js'
           }))
           .pipe(gulp.dest('./'))
});
