/**
 * Declaration of a template
 */
orion.pages.addTemplate({
	/**
	 * The name of the html template
	 */
	template: 'pagesSimple', 
	/**
	 * The name display name of the template
	 */
	name: 'Simple',
}, {
	/**
	 * The schema, works like schema on entities
	 */
	content: orion.attribute('froala', {
	    label: 'Content'
	})
})