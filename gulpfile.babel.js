import gulp from 'gulp';
import babel from 'gulp-babel';
import jasmineBrowser from 'gulp-jasmine-browser';
import notify from 'gulp-notify';
import watch from 'gulp-watch';


gulp.task('test',()=>{
	var testResults = gulp.src(['src/**/*.js','spec/**/*[sS]pec.js'])
		.pipe(watch(['src/**/*.js','spec/**/*(_.)?[sS]pec.js']))
		.pipe(babel({
			presets: ['es2015']
		}))
		.on('error',notify.onError({
			message: "Error : <%= error.message %>",
			title: 'Error in JS'
		}))
		.pipe(jasmineBrowser.specRunner())
		.pipe(jasmineBrowser.server({port: 8080}))

		return testResults;
			
		
});

gulp.task('build',()=>{
	//enter build specific code here
});


