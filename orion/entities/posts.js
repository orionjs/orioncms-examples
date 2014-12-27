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
	 * The file attribute is a custom orion attribute
	 * This is where orion do the magic. Just set 
	 * the attribute type and it will automatically
	 * create the form for the file.
	 * WARNING: the url of the image will not be saved in
	 * post.image, it will be saved in post.image.link.
	 */
	image: orion.attribute('file', {
	    label: 'Image',
	    optional: true
	}),
	/**
	 * Here its the same with image attribute.
	 * summernote is a html editor.
	 */
	body: orion.attribute('summernote', {
	    label: 'Body',
	    optional: true
	}),
},  {
	sidebarName: 'Posts',
	pluralName: 'Posts',
	singularName: 'Post',
	/**
	 * You have to put here what do you want to show in
	 * the entity index page.
	 * It uses aldeed:tabular. Check the documentation
	 * https://github.com/aldeed/meteor-tabular/
	 */
	tableColumns: [
		{ data:'title', title: 'Title' },
		/**
		 * If you want to show a custom orion attribute in
		 * the index table you must call this function
		 * orion.attributeColumn(attributeType, key, label)
		 */
		orion.attributeColumn('file', 'image', 'Image'),
		orion.attributeColumn('summernote', 'body', 'Preview')
	]
});