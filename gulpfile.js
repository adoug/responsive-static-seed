var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');
var port = process.env.PORT || 3000;

var paths = {
    html: [
        './src/views/**/*.html',
        './src/views/index.html'
    ],
    js: [
        './src/js/**/*.js',
        './app.js'
    ]
};

gulp.task('start', function () {
  var nodeOptions = {
    script: 'app.js',
    delayTime: 1,
    env: {
      'PORT': port,
      'NODE_ENV': 'dev'
    },
    watch: ['app.js']
  };

  return nodemon(nodeOptions);
});

gulp.task('html', function() {
    gulp.src('src/view/index.html')
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/views/*.html', ['html']);
});


gulp.task('default', ['start', 'watch']);