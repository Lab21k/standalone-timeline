module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        watch: {
            files: [
                'Gruntfile.js',
                'scripts/*.js',
                'styles/*.css'
            ],
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'scripts/*.js',
                    'styles/*.css'
                ]
            }
        },
        connect: {
            server: {
                options: {
                    livereload: true,
                    base: './',
                    port: 9000
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', [
        'connect:server',
        'watch'
    ]);
};
