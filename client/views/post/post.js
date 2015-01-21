Template.post.helpers({
	getUserName: function() {
		var createdBy = this.createdBy;
		var user =  Meteor.users.findOne(createdBy);
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

Template.post.rendered = function() {
	$(".content").animate({
		top: 240
	})
	$(".body").animate({
		top: 0, 
		opacity: 1
	})
}