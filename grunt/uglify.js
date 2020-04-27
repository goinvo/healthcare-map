module.exports = {
	build: {
		options: {
		    ASCIIOnly: true,
		    compress: {
		        pure_funcs: ['console.log']
		      }
		},
		files: [{
			expand: true,
			src: ['js/site.js'],
			dest: '_build',
			ext: '.js'
		}]	
	}
}