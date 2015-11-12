/**
 * We declare the collection just like meteor default way
 * but changing Meteor.Collection to orion.collection.
 *
 * We can set options to that new collection, like which fields
 * we will show in the index of the collection in the admin
 */
Posts = new orion.collection('posts', {
  singularName: orion.helpers.getTranslation('posts.singularName'), // The name of one of this items
  pluralName: orion.helpers.getTranslation('posts.pluralName'), // The name of more than one of this items
  title: orion.helpers.getTranslation('posts.title'), // The title of the page
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case is not necesary
     */
    title: orion.helpers.getTranslation('posts.title')
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: 'title', title: orion.helpers.getTranslation('posts.schema.title') },
      /**
       * If you want to show a custom orion attribute in
       * the index table you must call this function
       * orion.attributeColumn(attributeType, key, label)
       */
      orion.attributeColumn('image', 'image', orion.helpers.getTranslation('posts.schema.image')),
      orion.attributeColumn('summernote', 'body', orion.helpers.getTranslation('posts.schema.body')),
      orion.attributeColumn('createdBy', 'createdBy', orion.helpers.getTranslation('posts.schema.createdBy')),
      orion.attributeColumn('createdAt', 'createdAt', orion.helpers.getTranslation('posts.schema.createdAt'))
    ]
  }
});

/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: orion.helpers.getTranslation('posts.schema.title') // We use this function to make i18n work in autoform
  },
  /**
   * The image attribute is a custom orion attribute
   * This is where orion do the magic. Just set
   * the attribute type and it will automatically
   * create the form for the image.
   * WARNING: the url of the image will not be saved in
   * .image, it will be saved in .image.url.
   */
  image: orion.attribute('image', {
      label: orion.helpers.getTranslation('posts.schema.image'), // We use this function to make i18n work in autoform
      optional: true
  }),
  /**
   * Here its the same with image attribute.
   * summernote is a html editor.
   */
  body: orion.attribute('summernote', {
      label: orion.helpers.getTranslation('posts.schema.body') // We use this function to make i18n work in autoform
  }),
  /**
   * Ids of the users that flagged this posts
   */
  flaggedBy: {
    type: [String],
    optional: true,
    index: true
  },
  /**
   * Likes count
   */
  likesCount: {
    type: Number,
    optional: true,
    index: true
  },
  /**
   * This attribute sets the user id of the user that created
   * this post automatically.
   */
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));


/**
 * Using dburles:collection-helpers we will add a helper to the posts
 * collection to easily get the user
 */

Posts.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  },
  likes: function(userId) {
    return !!Likes.find({ userId: userId, postId: this._id }).count();
  }
});
