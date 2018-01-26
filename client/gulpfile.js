const gulp = require('gulp');
const del = require('del');
const log = require('fancy-log');
const path = require('path');

const clean = async dir => {
	return del([path.join(dir, '*')], { force: true }).then(() => {
		log(`Cleared contents from ${dir}.`);
	});
};

const transfer = async (src, dest) => {
	return new Promise((resolve, reject) => {
		gulp
			.src(src)
			.pipe(gulp.dest(dest))
			.on('end', () => {
				log(`Files transferred from ${src} to ${dest}`);
				resolve();
			});
	});
};

gulp.task('transfer-build-files', async () => {
	const srcDir = path.join(__dirname, 'build');
	const distDir = path.join(__dirname, '..', 'dist', 'client');
	const auxillaryFiles = [];

	return clean(distDir)
		.then(() => {
			return transfer(
				[
					path.join(srcDir, '**', '*'),
					`!${path.join(srcDir, '**', 'tests/')}`,
					`!${path.join(srcDir, '**', 'tests', '**', '*')}`,
					...auxillaryFiles
				],
				distDir
			);
		})
		.then(() => {
			return clean(srcDir);
		});
});

gulp.task('default', gulp.parallel('transfer-build-files'));
