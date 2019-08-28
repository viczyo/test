const gulp = require("gulp");
const uglify = require("gulp-uglify");
const webserver = require("gulp-webserver");
const sass  = require("gulp-sass");

gulp.task("server", ["static"], ()=>{
	gulp.src("dist")
		.pipe( webserver({
			port: 9999,
			livereload : true,
			proxies : [
				{
					source: "abc",
					target: "http://xxxxxxxx"
				}
			]
		}) )
	gulp.watch("src/pages/**/*.js", ["compileJS"]);
	gulp.watch("src/scripts/**/*.js", ["compileJS"]);
	gulp.watch("src/conf/**/*.js", ["compileJS"]);
	gulp.watch("src/pages/**/*.html", ["compileHTML"])
	gulp.watch("src/styles/**/*.scss", ["compileCSS"])
	
})

gulp.task("compileCSS", ()=>{
	gulp.src("src/styles/**/*.scss")
		.pipe( sass().on('error', sass.logError) )
		.pipe( gulp.dest("dist/styles/") )
})

gulp.task("compileHTML", ()=>{
	gulp.src("src/pages/**/*.html")
		.pipe( gulp.dest("dist/pages/") )
})
gulp.task("compileJS", ()=>{
	gulp.src("src/pages/**/*.js")
		.pipe( uglify() )
		.pipe( gulp.dest("dist/pages/") )
	gulp.src("src/scripts/**/*.js")
		.pipe( uglify() )
		.pipe( gulp.dest("dist/scripts/") )
	gulp.src("src/conf/**/*.js")
		.pipe( uglify() )
		.pipe( gulp.dest("dist/conf/") )
})

gulp.task("static", ()=>{
	gulp.src("src/static/**/*.*")
		.pipe( gulp.dest("dist/static/") )
})