/**
 * Add your routes here
 */

Router.route('/', {
	name: 'home',
	layoutTemplate: 'layout',
	loadingTemplate: 'adminLoading',
	waitOn: function() {
		/**
		 * Here you have to subscribe to the publications.
		 * Remember to always subscribe to the dictionary.
		 */
		return [
			orion.subs.subscribe('dictionary'), 
			orion.subs.subscribe('entity', 'posts'), 
			orion.subs.subscribe('usersNames')
		] 
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

Router.route('/posts/:_id', {
	name: 'post',
	layoutTemplate: 'layout',
	loadingTemplate: 'adminLoading',
	waitOn: function() {
		return [
			orion.subs.subscribe('dictionary'), 
			orion.subs.subscribe('entity', 'posts', {_id: this.params._id}),
			orion.subs.subscribe('usersNames')
		] 
	},
	data: function() {
		return orion.entities.posts.collection.findOne({_id: this.params._id})
	}
});