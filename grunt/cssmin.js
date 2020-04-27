module.exports = {
	build: {
		expand: true,
		cwd: './css',
		src: ['**/*.css', '!**/*.min.css'],
		dest: '_build/css',
		ext: '.css'
	}
}