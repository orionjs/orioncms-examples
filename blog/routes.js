/**
 * Add your routes here
 */

RouterLayer.route('/', {
	name: 'home',
	template: 'home',
	layout: 'layout'
});

RouterLayer.route('/posts/:_id', {
	name: 'post',
	template: 'post',
	layout: 'layout'
});
