module.exports = (grunt) ->

  grunt.initConfig
    less:
      development:
        options:
          paths: ['assets/less']
        files: 'assets/less/main.css': 'assets/less/main.less'
    uglify:
      development:
        files: 'assets/javascripts/default.js': 'assets/javascripts/**/*.js'
    watch:
      less:
        files: '**/*.less'
        tasks: ['less']
      js:
        files: '**/*.js'
        tasks: ['uglify']
    exec:
      build:
        cmd: 'jekyll build'
      serve:
        cmd: 'jekyll serve --watch'

  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-exec'

  grunt.registerTask 'default', ['less', 'uglify', 'exec:build']
  grunt.registerTask 'serve', ['exec:serve']
