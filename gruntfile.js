module.exports = function(grunt) {
    require('time-grunt')(grunt);
// 1. Вся настройка находится здесь
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	concat: {
		css: {
			src: 'src/css/*.css',
			dest: 'build/css/main.css'
		},
		js: {
			src: 'src/js/*.js',
			dest: 'build/js/common.js'
		}
	},
	cssmin: {
		target: {
			files: [{
				expand: true,
				cwd: 'build/css',
				src: ['*.css', '!*.min.css'],
				dest: 'build/css',
				ext: '.min.css'
			}]
		}
	},
	 uglify: {
    my_target: {
      files: {
        'build/js/common.min.js': ['build/js/common.js']
      }
    }
  },
	watch: {
		css: {
			files: ['src/sass/*.sass'],
			tasks: ['sass'],
			options: {
				spawn: false,
			},
		}
	},
	imagemin: {
  options: {
    optimizationLevel: 3,
    progressive: true,
    interlaced: true,
    pngquant: true
  },
  dynamic: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'build/'
    }]
  }
},
	sass: {
		dist: {
			options: {
			},
			files: {
				'src/css/style.css': 'src/sass/style.sass',
				'src/css/fonts.css' : 'src/sass/fonts.sass',
				'src/css/media.css' : 'src/sass/media.sass'
			}
		}
	},
	browserSync: {
		default_options: {
			bsFiles: {
				src: [
				"src/css/*.css",
				"src/*.html"
				]
			},
			options: {
				watchTask: true,
				notify: false,
				server: {
					baseDir: "src/"
				}
			} 
		}
	},
	copy: {
		main: {
			files: [
			{expand:true, cwd:'src',  src:"index.html", dest:"build/" },
			{expand:true, cwd:'src',  src:"fonts/**", dest:"build/" },
			{expand:true, cwd:'src', src:"lib/**", dest:"build/" }
			]
		}
	},
	clean: {
  build: {
    src: ["build/"],
  }
},
autoprefixer: {
    options: {
      browsers: ['last 2 versions', 'ie 8', 'ie 9']
    },
    your_target: {
     src: ['build/css/main.css', 'build/css/main.min.css']
    },
  },
   cmq: {
   	 target: {
			files: [{
				expand: true,
				cwd: 'build/css',
				src: '*.css',
				dest: 'build/css',
			}]
		}
  },
  sprite:{
      all: {
        src: 'src/img/sprites/*.png',
        dest: 'src/img/spritesheet.png',
        destCss: 'src/sass/sprites.sass',
        algorithm: 'top-down'	
      }
    }
});

// 3. Тут мы указываем Grunt, что хотим использовать этот плагин
require('load-grunt-tasks')(grunt);

// 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
grunt.registerTask('default', ['browserSync','watch']);
grunt.registerTask('build', ['clean','concat','cssmin','uglify','cmq','autoprefixer','imagemin','copy']);

};