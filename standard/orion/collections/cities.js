/**
 * We declare the collection just like meteor default way
 * but changing Meteor.Collection to orion.collection.
 *
 * We can set options to that new collection, like which fields 
 * we will show in the index of the collection in the admin
 */
Cities = new orion.collection('cities', {
  singularName: orion.helpers.getTranslation('cities.singularName'), // The name of one of this items
  pluralName: orion.helpers.getTranslation('cities.pluralName'), // The name of more than one of this items
  title: orion.helpers.getTranslation('cities.title'), // The title of the page
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case is not necesary
     */
    title: orion.helpers.getTranslation('cities.title')
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: 'name', title: orion.helpers.getTranslation('cities.schema.name') },
      /**
       * If you want to show a custom orion attribute in
       * the index table you must call this function
       * orion.attributeColumn(attributeType, key, label)
       */
      orion.attributeColumn('file', 'image', orion.helpers.getTranslation('cities.schema.image')),
      orion.attributeColumn('summernote', 'body', orion.helpers.getTranslation('cities.schema.body')),
      orion.attributeColumn('createdBy', 'createdBy', orion.helpers.getTranslation('cities.schema.createdBy')),
      orion.attributeColumn('createdAt', 'createdAt', orion.helpers.getTranslation('cities.schema.createdAt'))
    ]
  }
});

/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Cities.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: orion.helpers.getTranslation('cities.schema.name') // We use this function to make i18n work in autoform
  },
  /**
   * The file attribute is a custom orion attribute
   * This is where orion do the magic. Just set 
   * the attribute type and it will automatically
   * create the form for the file.
   * WARNING: the url of the image will not be saved in
   * .image, it will be saved in .image.url.
   */
  image: orion.attribute('file', {
      label: orion.helpers.getTranslation('cities.schema.image'), // We use this function to make i18n work in autoform
      optional: true
  }),
  /**
   * Here its the same with image attribute.
   * summernote is a html editor.
   */
  body: orion.attribute('summernote', {
      label: orion.helpers.getTranslation('cities.schema.body') // We use this function to make i18n work in autoform
  }),
  /**
   * This attribute sets the user id of the user that created 
   * this citiesautomatically.
   */
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));


/**
 * Using dburles:collection-helpers we will add a helper to the cities
 * collection to easily get the user
 */

Cities.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});

