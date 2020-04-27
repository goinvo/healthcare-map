module.exports = {
	build: {
		files: [{
			expand: true,
			src: [
				'js/*.js', '!js/site.js',
				'images/*', 
				'fonts/*', 
				'index.html',
				'contact.php'
			],
			dest: '_build'
		}]
	}
}