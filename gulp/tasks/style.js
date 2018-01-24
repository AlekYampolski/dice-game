var gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  nestedCss = require("postcss-nested"),
  varsCss = require("postcss-simple-vars"),
  mixins = require("postcss-mixins"),
  importCss = require("postcss-import");

gulp.task("style", function() {
  return gulp
    .src("./app/assets/css/app.css")
    .pipe(postcss([importCss, mixins,varsCss,  nestedCss,  autoprefixer]))
    .on("error", function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});
