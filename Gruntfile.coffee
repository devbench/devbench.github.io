module.exports = (grunt) ->

  grunt.initConfig
    less:
      development:
        options:
          paths: ['assets/less']
        files:
          'assets/less/main.css': 'assets/less/main.less'
    watch:
      scripts:
        files: ['**/*.less']
        tasks: ['less']
    exec: {
      build:
        cmd: 'jekyll build'
      serve:
        cmd: 'jekyll serve --watch'
    }

  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-exec'

  grunt.registerTask 'default', ['less', 'exec:build']
  grunt.registerTask 'serve', ['exec:serve']
