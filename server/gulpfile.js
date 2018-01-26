const gulp = require('gulp');
const path = require('path');

const babel = require('gulp-babel');
const del = require('del');
const install = require('gulp-install');
const log = require('fancy-log');

const clean = async dir => {
	return del([path.join(dir, '*')], { force: true }).then(() => {
		log(`Cleared contents from ${dir}.`);
	});
};

const build = async (src, dest) => {
	return new Promise((resolve, reject) => {
		gulp
			.src(path.join(src, '**', '*.js'))
			.pipe(babel())
			.pipe(gulp.dest(dest))
			.on('end', () => {
				log(`JS files translated to ${dest}.`);
				resolve();
			});
	});
};

const npmInstall = async dir => {
	return new Promise((resolve, reject) => {
		gulp
			.src(path.join(dir, 'package.json'))
			.pipe(install({ production: true }))
			.on('finish', () => {
				log(`NPM dependencies installed at ${dir}`);
				resolve();
			});
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

gulp.task('build-project', async () => {
	const srcDir = path.join(__dirname, 'src');
	const distDir = path.join(__dirname, '..', 'dist', 'server');
	const auxillaryFiles = [
		path.join(__dirname, 'package.json'),
		path.join(__dirname, '.babelrc')
	];

	return clean(distDir)
		.then(() => {
			return transfer(
				[path.join(srcDir, '**', '*'), ...auxillaryFiles],
				distDir
			);
		})
		.then(() => {
			return build(srcDir, distDir);
		})
		.then(() => {
			return npmInstall(distDir);
		});
});

gulp.task('default', gulp.parallel('build-project'));
