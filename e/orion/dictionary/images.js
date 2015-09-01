/**
 * In this file are defined the definitions of the 
 * category images.
 * It's a good practice to create a file for
 * each dictionary category
 */

orion.dictionary.addDefinition('logo', 'images', 
	/**
	 * The file attribute is a custom orion attribute
	 * This is where orion do the magic. Just set 
	 * the attribute type and it will automatically
	 * create the form for the file.
	 * WARNING: the url of the image will not be saved in
	 * logo, it will be saved in logo.url.
	 */
	orion.attribute('file', {
	    label: orion.helpers.getTranslation('dictionary.images.logo'),
	    optional: true
	})
);