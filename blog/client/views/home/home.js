Template.home.onRendered(function() {
	this.subscribe('postsWithUsers');
});

Template.home.helpers({
	posts: function () {
		return Posts.find({}, { sort: { createdAt: -1 } });
	}
});

Template.home.events({
	'click .flag-btn': function() {
		Meteor.call('flagPost', this._id);
	}
});
