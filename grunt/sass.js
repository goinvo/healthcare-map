const sass = require('node-sass');
module.exports = {
	dev: {
		options: {
			implementation: sass,
			style: 'expanded'
		},
		files: [
	        {
	            expand: true,
	            cwd: 'scss',
	            src: ['*.scss'],
	            dest: 'css',
	            ext: '.css'
	        }
        ]
	}
}
