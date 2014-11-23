orion.addEntity('posts', {
	title: {
		type: String,
		label: "Title",
	},
	image: {
		type: orion.attributes.image,
		label: "Image",
	},
	body: {
		type: orion.attributes.summernote,
		label: "Body",
	}
},  {
	sidebarName: 'Posts',
	pluralName: 'Posts',
	singularName: 'Post',
	defaultIndexTableFields: [
		orion.adminIndexAttributeViews.image("image", "Image"),
		{key:'title', label: 'Title'},
		orion.adminIndexAttributeViews.summernote("body", "Body"),
	]
});