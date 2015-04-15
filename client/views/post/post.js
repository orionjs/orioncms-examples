Template.post.helpers({
	post: function() {
		return Posts.findOne(Router.current().params._id);
	},
	getUserName: function() {
		var post = Posts.findOne(Router.current().params._id);
		var user = post && Meteor.users.findOne(post.createdBy);
		return (user && user.profile && user.profile.name) || 'No Name';
	}
});

Template.post.events({
	'click .back': function (event) {
		$(".post-header").animate({
			top: ($(".post-header").height() * -1) -10, 
		})
		$(".body").animate({
			top: $(window).height() +10, 
		})
		$("html, body").animate({ 
			scrollTop: 0 
		}, function() {
			Router.go('home');
		});
	}
});

Template.post.onRendered(function() {
	var subscription = this.subscribe('onePost', Router.current().params._id);
	this.autorun(function() {
		if (subscription.ready()) {
			$(".content").animate({
				top: 240
			})
			$(".body").animate({
				top: 0, 
				opacity: 1
			})
		}
	})
});