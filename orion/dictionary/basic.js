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
    	type: 'textarea',
    	rows: '8',
    }
});