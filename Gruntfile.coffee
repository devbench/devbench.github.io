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
        tasks: ['less']
      js:
        files: 'assets/javascripts/**/*.js'
    exec:
      build:
        cmd: 'jekyll build'
      serve:
        cmd: 'jekyll serve --watch'

  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-exec'

  grunt.registerTask 'default', ['less', 'exec:build']
  grunt.registerTask 'serve', ['exec:serve']
