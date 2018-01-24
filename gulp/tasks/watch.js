var gulp = require("gulp"),
  watch = require("gulp-watch"),
  browserSync = require("browser-sync");

gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  watch("./app/index.html", function() {
    browserSync.reload();
  });

  watch("./app/temp/js/**/*.js", function() {
    browserSync.reload();
  });

  watch("./app/assets/css/**/*.css", function() {
    gulp.start("cssInject");
  });

  gulp.task("cssInject", ['style'], function() {
    return gulp.src("./app/assets/css/app.css").pipe(browserSync.stream());
  });
});
