/**
 * Set the default language, 
 * we dont have to add identifier
 */
orion.languages.setDefaultLanguage({
	name: 'English'
})

/**
 * Add a new language
 * We must set the identifier
 */
orion.languages.addLanguage({
	identifier: 'es',
	name: 'Español'
})