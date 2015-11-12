/**
 * Not all collections have to be orion collections
 */
Likes = new Mongo.Collection('likes');

Likes.attachSchema({
  userId: {
    type: String,
    index: true
  },
  postId: {
    type: String,
    index: true
  },
  /**
   * Any schema can use orion attributes
   */
  createdAt: orion.attribute('createdAt')
});
