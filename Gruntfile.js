module.exports = function(grunt) {
  grunt.initConfig({
    markdown: {
    all: {
      files: [
        {
          expand: true,
          src: '*.md',
          dest: './',
          ext: '.html'
        }
      ],
      options: {
        template: 'templates/index.html',
        markdownOptions: {
          gfm: true,
          codeLines: {
            before: '<span>',
            after: '</span>'
          }
        }
      }
    }
  },
  watch :{
    scripts :{
      files : ['*.md','css/*.css', 'templates/*.html'],
      tasks : ['markdown'],
      options : {
        livereload : 9090,
      }
    }
  },
  browserSync: {
    bsFiles: {
      src : ['build/css/*.css',
             '*.html']
      },
      options: {
          watchTask: true,
          server: './'
      }
    }

  });

  grunt.loadNpmTasks('grunt-markdown');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['markdown', 'browserSync', 'watch']);
};
