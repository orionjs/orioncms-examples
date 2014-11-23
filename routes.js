Router.map(function() {

	this.route('home', {
		path: '/',
		layoutTemplate: 'layout',
		loadingTemplate: 'adminLoading',
		waitOn: function() {
			return [orion.subs.subscribe('dictionary'), 
			orion.subs.subscribe('entity', 'posts')] 
		},
		data: function() {
			return {
				posts: orion.entities.posts.collection.find()
			}
		}
	});

	this.route('post', {
		path: '/:_id',
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