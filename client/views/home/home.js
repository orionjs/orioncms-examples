Template.homePostItem.events({
	'click .image': function (event) {
		var post = this;
		var container = $(event.target);
		container.animate({
			top: (container.offset().top * -1) + 10, 
			left: (container.offset().left * -1), 
			width: $(window).width()
		})
		container.find('.content').animate({
			opacity: 0
		})
		$(".image").not(event.target).animate({
			opacity: 0
		})
		$("html, body").animate({ 
			scrollTop: 0 
		}, function() {
			Router.go('post', post);
		});
	}
});

Template.home.rendered = function() {
	$(".posts-list").animate({
		top: 0
	})
}