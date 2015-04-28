Template.post.helpers({
	post: function() {
		return Posts.findOne(Router.current().params._id);
	}
});

Template.post.onRendered(function() {
	this.subscribe('onePostWithUser', Router.current().params._id);
});