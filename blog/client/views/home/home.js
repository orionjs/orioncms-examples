Template.home.onRendered(function() {
	this.subscribe('posts.home');
});

Template.home.helpers({
	posts: function () {
		return Posts.find({}, { sort: { likesCount: -1 } });
	}
});

Template.home.events({
	'click .flag-btn': function() {
		Meteor.call('flagPost', this._id);
	},
	'click .like-btn': function() {
		var post = Posts.findOne(this._id);
		if (post.likes(Meteor.userId())) {
			Meteor.call('unlikePost', this._id);
		} else {
			Meteor.call('likePost', this._id);
		}
	}
});
