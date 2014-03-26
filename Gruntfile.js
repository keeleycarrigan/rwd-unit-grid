module.exports = function (grunt) {

// Project configuration.
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
        options: {
            livereload: true
        },
        css: {
            files: 'app/scss/*',
            tasks: ['sass']
        },
        js: {
            files: 'app/js/*',
            tasks: ['copy:js']
        },
        html: {
            files: ['app/*.html', 'app/*.php'],
            tasks: ['copy:html']
        },
        images: {
            files: 'app/imgs/*',
            tasks: ['copy:imgs']
        }
    },
    sass: {
        dist: {
            files: {
                'demo/css/<%= pkg.name %>-demo.css': 'app/scss/index.scss'
            }
        }
    },
    copy: {
        html: {
            files: [
                {
                    expand: true,
                    cwd: 'app',
                    src: ['*.html', '*.php'],
                    dest: 'demo/'
                }
            ]
        },
        js: {
            files: [
                {
                    expand: true,
                    cwd: 'app/js',
                    src: '**',
                    dest: 'build/js/'
                }
            ]
        },
        imgs: {
            files: [
                {
                    expand: true,
                    cwd: 'app/imgs/',
                    src: '**',
                    dest: 'demo/imgs/'
                }
            ]
        }
    },
    connect: {
        server: {
            options: {
                hostname: 'localhost',
                base: 'demo/',
                livereload: true
            }
        }
    }
});

grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-connect');

grunt.registerTask('default', ['connect','watch']);
grunt.registerTask('build', ['sass', 'copy']);
};