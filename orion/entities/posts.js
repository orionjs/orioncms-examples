/**
 * Declaration of the posts entity
 * Is a good practice to create a
 * file for each entity.
 */
orion.addEntity('posts', {
	/**
	 * The title attribute is saved like a String.
	 */
	title: {
		type: String,
		label: "Title",
	},
	/**
	 * The image attribute is using a custom orion
	 * attribute: orion.attribute.image.
	 * This is where orion makes the magic. Just set 
	 * the attribute type and it will automatically
	 * create the form for the image.
	 * WARNING: the url of the image will not be saved in
	 * post.image, it will be saved in post.image.link.
	 */
	image: {
		type: orion.attributes.image,
		label: "Image",
	},
	/**
	 * Here its the same with image attribute.
	 * summernote is a html editor.
	 * WARNING: the content will not be saved in
	 * post.body, it will be saved in post.body.content.
	 */
	body: {
		type: orion.attributes.summernote,
		label: "Body",
	}
},  {
	sidebarName: 'Posts',
	pluralName: 'Posts',
	singularName: 'Post',
	/**
	 * You have to put here what do you want to show in
	 * the entity index page.
	 * It uses aslagle:reactive-table. Check the documentation
	 * https://github.com/ecohealthalliance/reactive-table#setting-columns
	 */
	defaultIndexTableFields: [
		/**
		 * Every custom orion attribute comes with it index table field.
		 * In this case, you specify the key (image) and the label (Image)
		 * and it will show a small image in the index table.
		 */
		orion.adminIndexAttributeViews.image("image", "Image"),
		{key:'title', label: 'Title'},
		orion.adminIndexAttributeViews.summernote("body", "Body"),
	]
});