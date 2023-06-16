const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const del = require('del');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/',
    },
  });
}

function images() {
  return src('app/images/**/*')
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest('dist/images'));
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(concat('style.min.css'))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/*.html']).on('change', browserSync.reload);
}

function scripts() {
  return src([
    // 'node_modules/jquery/dist/jquery.js',
    // 'node_modules/slick-carousel/slick/slick.js',
    // 'node_modules/mixitup/dist/mixitup.js',
    // 'node_modules/swiper/swiper-bundle.js',
    // 'node_modules/fslightbox/index.js',
    // 'node_modules/fullpage.js/dist/fullpage.js',
    // 'node_modules/simple-parallax-js/dist/simpleParallax.js',
    // 'node_modules/nouislider/dist/nouislider.js',
    // 'node_modules/swiper/modules/navigation.js',
    // 'node_modules/swiper/modules/pagination.js',
    'app/js/main.js',
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'));
}

function cleanDist() {
  return del('dist');
}

function build() {
  return src(
    [
      'app/css/style.min.css',
      'app/fonts/**/*',
      'app/js/main.min.js',
      'app/*.html',
      'app/images',
    ],
    { base: 'app' }
  ).pipe(dest('dist'));
}

exports.styles = styles;
exports.watching = watching;
exports.scripts = scripts;
exports.cleanDist = cleanDist;
exports.browsersync = browsersync;
exports.images = images;

exports.build = series(cleanDist, build);
exports.default = parallel(watching, scripts, browsersync);
