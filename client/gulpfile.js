const gulp = require('gulp');
const gutil = require('gutil');
const path = require('path');

const tasks = [
    'copy-build-files'
];

gulp.task('default', tasks, () => {
    return gutil.log('Gulp Tasks Completed.');
});

gulp.task('copy-build-files', async () => {
    let srcDir = path.join(__dirname, 'build');
    let outputDir = path.join(__dirname, '..', 'dist', 'client');

    gutil.log(`Transferring build files from ${srcDir} to ${outputDir}.`);

    gulp
        .src([
            path.join(srcDir, '**', '*')
        ])
        .pipe(gulp.dest(outputDir));

    gutil.log(`Files successfully transferred.`);
});