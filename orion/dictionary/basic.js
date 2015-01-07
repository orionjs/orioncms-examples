/**
 * In this file are defined the definitions of the 
 * category basic.
 * It's a good practice to create a file for
 * each dictionary category
 */

/**
 * The siteName definition is special, becouse 
 * it will change the text of the link to the home 
 * page in the admin.
 */
orion.dictionary.addDefinition('siteName', 'basic', {
    type: String,
    label: "Site Name",
    optional: true,
});

orion.dictionary.addDefinition('description', 'basic', {
    type: String,
    label: "Description of the site",
    optional: true,
    autoform: {
        type: 'textarea'
    }
});