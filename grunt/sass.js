module.exports = {
	dev: {
		options: {
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