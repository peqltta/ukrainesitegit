module.exports = function(grunt){

require('load-grunt-tasks')(grunt);

	grunt.initConfig({


		jshint: {
    		all: ['js/vod.js','!js/min.js']
  				},

	  concat: {
	    options: {
	      separator: ';',
	    },
	    dist: {
	      src: ['js/jquery.js', 'js/bootstrap.min.js', 'js/jquery-easing.min.js', 'js/vod.js', 'js/wow.js', 'js/parallax.js'],
	      dest: 'js/min.js',
	    },
	  },
	    uglify: {
		    dist: {
		      files: {
		        'js/min.js': ['js/min.js', 'src/input2.js']
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
			      'css/min.css': ['css/bootstrap.min.css', 'css/animate.css', 'css/vod.css']
			    }
			  }
			},

			 htmlmin: {
				    dist: {
				      options: {
				        removeComments: true,
				        collapseWhitespace: true
				      },
				      files: {
				        'index.min.html': 'index.html',
				        'index-event.min.html': 'index-event.html' 

				      }
				  }
    		},		
			watch:{
				js:{
					files: ['js/*.js', '!js/min.js'],
					tasks: ['jshint', 'uglify'],
					options: {spawn:false }
				},
				css:{
					files: ['css/*.css', '!css/min.css'],
					tasks: ['cssmin'],
					options: {spawn:false }
				},
				html:{
					files: ['*.html', '!index.min.html'],
					tasks: ['htmlmin'],
					options: {spawn:false }
				}
			},
			imagemin: { 
			    dynamic: { 
			      files: [{
			        expand: true,
			        cwd: 'img/',
			        src: ['**/*.{png,jpg,gif}'],
			        dest: 'dist/'
			      }]
			    }
			  }

		
});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'imagemin', 'htmlmin']);

	
}