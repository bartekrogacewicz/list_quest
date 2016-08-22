module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			dev: {
				files: {
					'style.css':'assets/styles/app.less'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-serve');
};
