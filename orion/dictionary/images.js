/**
 * In this file are defined the definitions of the 
 * category images.
 * It's a good practice to create a file for
 * each dictionary category
 */

orion.dictionary.addDefinition('logo', 'images', {
	/**
	 * The image attribute is using a custom orion
	 * attribute: orion.attribute.image.
	 * This is where orion makes the magic. Just set 
	 * the attribute type and it will automatically
	 * create the form for the image.
	 * WARNING: the url of the image will not be saved in
	 * logo, it will be saved in logo.link.
	 */
    type: orion.attributes.image,
    label: "Site Logo",
    optional: true,
});