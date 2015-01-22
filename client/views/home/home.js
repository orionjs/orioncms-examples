Template.homePostItem.events({
	'click .image': function (event) {
		var post = this;
		var container = $(event.currentTarget);
		container.parent().height(container.outerHeight());
		container.find(".content").animate({ opacity: 0 })
		container.css({
			"z-index": 250,
			position: "fixed",
			top: container.offset().top - $(window).scrollTop() + 10, 
			left: container.offset().left, 
			width: container.width(), 
			height: container.height()
		})
		$(".white-panel").css({ display: 'inherit' })
		$(".white-panel").animate({ opacity: 1 }, function() {
			$("html, body").scrollTop(0);
			container.animate({
				top: 0, 
				left: 0, 
				width: $(window).width()
			}, function() {
				Router.go('post', post);
			})
		})
	}
});

Template.home.rendered = function() {
	$(".posts-list").animate({
		top: 0
	})
}