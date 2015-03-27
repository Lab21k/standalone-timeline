module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        watch: {
            js: {
                files: [
                    'Gruntfile.js',
                    'demo/index.html',
                    'src/scripts/*.js',
                    'src/api/scripts/**/*.js',
                    'src/api/scripts/*.js',
                    'src/api/*.js',
                ],
                tasks: ['concat'],
            },
            css: {
                files: [
                    'src/api/styles/*.css',
                    'src/styles/*.css'
                ],
                tasks: ['cssmin'],
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'src/scripts/*.js',
                    'src/styles/*.css',
                    'src/api/styles/*.css',
                    'demo/index.html'
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
        },
        concat: {
            dist: {
                src: [
                    // SIMILE-AJAX-API
                    'src/simile-ajax-api.js',
                    'src/scripts/platform.js',
                    'src/scripts/debug.js',
                    'src/scripts/xmlhttp.js',
                    'src/scripts/json.js',
                    'src/scripts/dom.js',
                    'src/scripts/graphics.js',
                    'src/scripts/date-time.js',
                    'src/scripts/string.js',
                    'src/scripts/html.js',
                    'src/scripts/data-structure.js',
                    'src/scripts/units.js',
                    'src/scripts/ajax.js',
                    'src/scripts/history.js',
                    'src/scripts/window-manager.js',
                    // API
                    'src/api/timeline-api.js',
                    'src/api/scripts/timeline.js',
                    'src/api/scripts/band.js',
                    'src/api/scripts/themes.js',
                    'src/api/scripts/ethers.js',
                    'src/api/scripts/ether-painters.js',
                    'src/api/scripts/event-utils.js',
                    'src/api/scripts/labellers.js',
                    'src/api/scripts/sources.js',
                    'src/api/scripts/original-painter.js',
                    'src/api/scripts/detailed-painter.js',
                    'src/api/scripts/overview-painter.js',
                    'src/api/scripts/compact-painter.js',
                    'src/api/scripts/decorators.js',
                    'src/api/scripts/units.js'
                ],
                dest: 'dist/timeline.min.js',
            },
        },
        uglify: {
            dist: {
                files: {
                    'dist/timeline.min.js': ['dist/timeline.min.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/timeline.min.css': [
                        'src/styles/graphics.css',
                        'src/api/styles/timeline.css',
                        'src/api/styles/ethers.css',
                        'src/api/styles/events.css'
                    ]
                }
            }
        },
        copy: {
            dist: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        src: [
                            'src/images/*',
                            'src/api/images/*'
                        ],
                        dest: 'dist/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'src/api/images/*'
                        ],
                        dest: 'dist/src/images/'
                    }
                ],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', [
        'concat',
        'uglify',
        'cssmin',
        'copy'
    ]);

    grunt.registerTask('default', [
        'connect:server',
        'watch'
    ]);
};
