var gulp = require("gulp");
var gutil = require("gulp-util");

var path = require('path');
var webpack = require("webpack");

var sequence = require('run-sequence');

var config = require('./webpack.config.js');



var release_dir = './release'


/**------------------------------------------------
 * task release-js
 */
gulp.task("release-js", function() {
	console.log("copy *.js to dist folder.")
	gulp.src([
		'./build/*.js'
	]).pipe(gulp.dest(release_dir + '/js'))
	return
})

// /**------------------------------------------------
//  * task release-js
//  */
// gulp.task("release-css", function() {
// 	console.log('copy .css files & font to dist folder.')

// 	// copy css
// 	gulp.src([
// 			'./src/css/*.css',
// 			'./node_modules/font-awesome/css/font-awesome.css',
// 		])
// 		.pipe(gulp.dest(release_dir + '/css'))

// 	// copy fonts
// 	gulp.src([
// 			'./node_modules/font-awesome/fonts/*.*',
// 		])
// 		.pipe(gulp.dest(release_dir + '/fonts'))
// 	gulp.src([
// 			'./node_modules/bootstrap/fonts/*.*',
// 		])
// 		.pipe(gulp.dest(release_dir + '/fonts/bootstrap'))


// })


/**------------------------------------------------
 * task webpack
 * 
 */
gulp.task("webpack", function(callback) {
	// run webpack
	return webpack(config).run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack", err);
		gutil.log("[webpack]", stats.toString({
			// output options
		}));
		callback();
		
	});

});


/**------------------------------------------------
 * task webpack-dev
 * 
 * webpack-dev is executed after webpack is done.
 * @ref : https://github.com/gulpjs/gulp/blob/master/docs/API.md#async-task-support
 */
gulp.task("webpack-dev", ['webpack'], function(callback) {
	sequence('release-js', callback)

})


// /**------------------------------------------------
//  * task default
//  * 
//  */
// gulp.task("default", function(callback) {
// 	// run webpack
// 	webpack(config).run(function(err, stats) {
// 		if(err) throw new gutil.PluginError("webpack", err);
// 		gutil.log("[webpack]", stats.toString({
// 			// output options
// 		}));

// 		// copy to dist
// 		sequence(['release-js', 'release-css'], callback);

// 		callback();
		
// 	});

// });

