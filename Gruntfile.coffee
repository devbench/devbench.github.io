module.exports = (grunt) ->

  grunt.initConfig
    less:
      all:
        options:
          paths: ['assets/less']
        files: 'assets/less/main.css': 'assets/less/main.less'
    uglify:
      all:
        files: 'assets/javascripts/default.js': ['assets/javascripts/vendor/**/*.js', 'assets/javascripts/lib/**/*.js']
    watch:
      less:
        files: 'assets/less/**/*.less'
        tasks: ['critical', 'less']
        options:
          livereload: true
      js:
        files: ['assets/javascripts/vendor/**/*.js', 'assets/javascripts/lib/**/*.js']
        tasks: ['uglify']
        options:
          livereload: true
    critical:
      test:
        options:
          base: './'
          css: 'assets/less/main.css'
          width: 320
          height: 480
        src: '_site/index.html'
        dest: 'assets/less/critical.css'
    exec:
      build:
        cmd: 'jekyll build'
      serve:
        cmd: 'jekyll serve --watch'

  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-exec'
  grunt.loadNpmTasks 'grunt-critical'

  grunt.registerTask 'default', ['less', 'uglify', 'critical', 'exec:build']
  grunt.registerTask 'serve', ['default', 'exec:serve']


