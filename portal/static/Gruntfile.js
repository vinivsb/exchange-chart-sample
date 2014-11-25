var config = require('grunt-settings');

module.exports = function(grunt) {
  // Initialize the configuration block.
  config.init(grunt);

  // Compress the CSS.
  config.set('cssmin.dist', {
      src: 'css/**/*.css'
    , dest: 'application.css'
  });


  // Compress JavaScript
  config.set('uglify.dist', {
      options: {
          sourceMap: true
        , sourceMapIncludeSources: true
      }
    , src: ['js/libs/jquery.js','js/libs/highcharts.js', 'js/boot.js','js/my-app/**/*.js']
    , dest: 'application.js'
  });

  // Concat JavaScript
  config.set('concat.dev', {
      src: ['js/libs/jquery.js','js/libs/highcharts.js', 'js/boot.js','js/my-app/**/*.js']
    , dest: 'application.js'
  });

  // Concat CSS
  config.set('watch.css', {
      files: ['css/**/*.css']
    , tasks: ['cssmin']
  });

  // Watch for updates.
  config.set('watch.js', {
      files: ['js/**/*.js']
    , tasks: ['concat']
  });

  // Register the default task.
  config.registerTask('default', ['uglify']);
};
