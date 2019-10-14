var gulp = require('gulp'),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport= require("postcss-import");

function styleInfo(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested,  autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles"));
};

gulp.task('default', function(){
    console.log("Horray, created gulp tast");
});

gulp.task("html", function(done){
    console.log("imagine something usefule being done to html here");
    done();
});

gulp.task("watch", function(done){
    // watch("./app/index.html", function(){
    // console.log("imagine something usefule being done to html here");
    // styleInfo();
    // done();
    // });
    watch("./app/assets/styles/**/*.css", function(){
        styleInfo();
    });
});
