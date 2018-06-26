const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('scss', function(){
	return gulp.src('src/scss/base.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'));
});

gulp.task('watchboot', function(){
	return gulp.watch('node_modules/bootstrap/scss/_custom.scss', ['scss']);
});

gulp.task('watch', function(){
	return gulp.watch('src/scss/*.scss', ['scss']);
});

gulp.task('default',['watchboot','scss','watch']);