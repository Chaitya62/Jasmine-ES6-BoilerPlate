import gulp from 'gulp';
import babel from 'gulp-babel';
import jasmineBrowser from 'gulp-jasmine-browser';
import notify from 'gulp-notify';
import watch from 'gulp-watch';
import jasmine from 'gulp-jasmine';

gulp.task('test',()=>{
	gulp.src(['src/**/*.js','spec/**/*[sS]pec.js'])
		.pipe(babel({
			presets: ['es2015']
		}))
		.on('error',notify.onError({
			message: "Error : <%= error.message %>",
			title: 'Error in JS'
		}))

		.pipe(jasmine({ errorOnFail: true }));
		/*.pipe(jasmineBrowser.specRunner())
		.pipe(jasmineBrowser.server({port: 8080}))*/

		//return testResults;
			
		
});

gulp.task('build',()=>{
	//enter build specific code here
});


