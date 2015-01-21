/**
 * Add your routes here
 */

Router.map(function() {

	/**
	 * The first attribute the name of the route. 
	 * The router will select the template with the
	 * same name of the route.
	 */
	this.route('home', {
		path: '/',
		layoutTemplate: 'layout',
		loadingTemplate: 'adminLoading',
		waitOn: function() {
			/**
			 * Here you have to subscribe to the publications.
			 * Remember to always subscribe to the dictionary.
			 */
			return [orion.subs.subscribe('dictionary'), 
			orion.subs.subscribe('entity', 'posts')] 
		},
		data: function() {
			return {
				/**
				 * This is the data that will be passed to template.
				 * It will only search the items that are in your 
				 * local database, ie only the items that you 
				 * subscribed before.
				 */
				posts: orion.entities.posts.collection.find({}, { sort: { createdAt: -1 } })
			}
		}
	});

	this.route('post', {
		path: '/posts/:_id',
		layoutTemplate: 'layout',
		loadingTemplate: 'adminLoading',
		waitOn: function() {
			return [orion.subs.subscribe('dictionary'), 
			orion.subs.subscribe('entity', 'posts', {_id: this.params._id})] 
		},
		data: function() {
			return orion.entities.posts.collection.findOne({_id: this.params._id})
		}
	});

});