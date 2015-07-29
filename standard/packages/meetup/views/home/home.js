Template.home.onRendered(function() {
	this.subscribe('postsWithUsers')
});

Template.home.helpers({
	posts: function () {
		return Posts.find();
	}
});