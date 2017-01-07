const _version = process.env.NODE_ENV || 'dev';
const __PROT__ = 3000;

const gulp = require("gulp"); // 基础库
const sass = require("gulp-sass"); // sass
const minifycss = require("gulp-clean-css"); // css压缩
const autoprefixer = require("gulp-autoprefixer"); // css 浏览器前缀
const uglify  = require("gulp-uglify"); // js压缩
const rename = require("gulp-rename"); // 重命名
const concat = require("gulp-concat"); // 合并文件
const clean = require("gulp-clean"); // 清空文件夹

gulp.task("css", function () {
  return gulp.src(["./src/scss/mimeplugin.scss"])
    .pipe(sass({"sourcemap":false}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4.0'],
      cascade: true, //是否美化属性值 默认：true
      remove:true //是否去掉不必要的前缀 默认：true
    }))
    .pipe(gulp.dest("./dist/"))
    .pipe(rename({ "suffix": ".min" }))
    .pipe(minifycss())
    .pipe(gulp.dest("./dist/"));
});

gulp.task("js", function () {
  return gulp.src(["./src/js/*.js"])
    .pipe(concat("mimeplugin.js"))
    .pipe(gulp.dest("./dist/"))
    .pipe(rename({ "suffix": ".min" }))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/"));
});

gulp.task("default", ["css", "js"]);
