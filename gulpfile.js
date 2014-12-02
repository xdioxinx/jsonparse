var gulp = require( 'gulp' );
var connect = require( 'gulp-connect' );

var paths = [
  './*.md',
  'src/**/*.html',
  'src/**/*.js'
];

gulp.task( 'connect', function() {
	connect.server({
		root: 'src',
		livereload: true
	});
});

gulp.task( 'watch', function() {
	gulp.watch( paths, [ 'reload' ] );
});

gulp.task( 'reload', function() {
	gulp.src( paths )
	.pipe( connect.reload() );
});

gulp.task( 'default', [
	'connect',
	'watch'
]);
