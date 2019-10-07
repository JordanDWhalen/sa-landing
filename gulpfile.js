let gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  globbing = require("gulp-css-globbing"),
  sourcemaps = require("gulp-sourcemaps"),
  imagemin = require("gulp-imagemin"),
  flatten = require("gulp-flatten"),
  newer = require("gulp-newer"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  connect = require("gulp-connect"),
  open = require("gulp-open"),
  twig = require("gulp-twig"),
  data = require("gulp-data"),
  livereload = require("gulp-livereload"),
  fileinclude = require("gulp-file-include"),
  _ = require("lodash"),
  nunjucksRender = require("gulp-nunjucks-render"),
  filter = require("gulp-filter"),
  path = require("path"),
  fs = require("fs"),
  baseTasks = [
    "styles",
    "vendor-js",
    "js",
    "resources",
    "resources-files",
    "markup"
  ];

gulp.task("styles", function() {
  return gulp
    .src("src/assets/styles/application.scss") // IMPORT ANY OTHER VENDOR LIBS FROM THAT SRC FILE
    .pipe(flatten())
    .pipe(newer("src/**/*"))
    .pipe(sourcemaps.init())
    .pipe(globbing({ extensions: ".scss" }))
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(sourcemaps.write())
    .on("error", handleError)
    .pipe(gulp.dest("public/assets/styles"))
});

gulp.task("vendor-js", function() {
  return gulp
    .src([
      // INCLUDE ANY OTHER VENDOR LIBS HERE
      "src/assets/js/vendor/**/*.js"
    ])
    .pipe(concat("application-vendor.js"))
    .pipe(uglify())
    .on("error", handleError)
    .pipe(gulp.dest("public/assets/js"))
});

gulp.task("js", function() {
  return gulp
    .src(["src/assets/js/scripts/**/*.js"])
    .pipe(sourcemaps.init())
    .on("error", handleError)
    .pipe(concat("application.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("public/assets/js"))
});

gulp.task("resources", function() {
  return gulp
    .src("src/assets/resources/**/*.{jpg,jpeg,png,gif,ico,svg}")
    .pipe(flatten())
    .pipe(newer("public/assets/resources"))
    .pipe(
      imagemin({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true,
        svgoPlugins: []
      })
    )
    .on("error", handleError)
    .pipe(gulp.dest("public/assets/resources"))
});

gulp.task("resources-files", function() {
  return gulp
    .src([
      "src/assets/resources/**/*",
      "!src/assets/resources/**/*.{jpg,jpeg,png,gif,ico,svg}"
    ])
    .pipe(flatten())
    .pipe(newer("public/assets/resources"))
    .on("error", handleError)
    .pipe(gulp.dest("public/assets/resources"))
});

gulp.task("markup", function() {
  return gulp
    .src("src/markup/pages/*.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file"
      })
    )
    .on("error", handleError)
    .pipe(newer("public/*.html"))
    .on("error", handleError)
    .pipe(gulp.dest("public/"));
});

gulp.task("open", function() {
  setTimeout(function() {
    gulp.src("").pipe(open({ uri: "http://localhost:8080" }));
  }, 5000);
});

gulp.task("connect", function() {
  gulp.watch(["src/markup/**/*.{nunjucks,html}", "!src/vendor"], ["markup"]);
  gulp.watch(["src/assets/styles/**/*.scss"], ["styles"]);
  gulp.watch(["src/assets/js/scripts/**/*.js"], ["js"]);
  gulp.watch(["src/assets/js/vendor/**/*.js"], ["vendor-js"]);
  gulp.watch(
    ["src/assets/resources/**/*.{jpg,jpeg,png,gif,ico,svg}"],
    ["resources"]
  );
  gulp.watch(
    [
      "src/assets/resources/**/*",
      "!src/assets/resources/**/*.{jpg,jpeg,png,gif,ico,svg}"
    ],
    ["resources-files"]
  );

  livereload.listen();

  gulp
    .watch([
      "src/markup/**",
      "public/assets/js/*.js",
      ".{jpg,jpeg,png,gif,ico,svg}",
      "public/assets/styles/*.css"
    ])
    .on("change", livereload.changed);

  connect.server({
    root: "public/",
    // host: '',
    keepalive: false,
    livereload: true
  });
});

// Error reporting function
function handleError(err) {
  console.log(err.toString());
  this.emit("end");
}

gulp.task("default", [...baseTasks, "connect", "open"]);
gulp.task("build", baseTasks);
