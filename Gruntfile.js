module.exports = function(grunt) {
	// load tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
            dist: {
                options: {
                	loadPath: require('node-bourbon').includePaths,
                    style: 'compressed',
                    trace: true
                },
                files: {
                    'public/styles/css/main.css': 'public/styles/sass/main.scss'
                }
            }
        },

		connect: {
			server: {
				options: {
					port: 3000
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},

			html: {
				files: ['index.html'],
				tasks: [],
				options: {
					livereload: true
				}
			},

			js: {
				files: ['public/js/*'],
				tasks: [],
				options: {
					spawn: false,
					livereload: true
				}
			},

			css: {
				files: ['public/styles/sass/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
					livereload: true
				}
			}
		}
	});

	grunt.registerTask('default', ['connect', 'watch']);
};