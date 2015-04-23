/**
 * We will create a new role that will allow
 * not-admin users to edit posts
 */
CommunityRole = new Roles.Role('community');

/**
 * We will allow users to edit the dictionary
 */
CommunityRole.allow('dictionary.update', true);

/**
 * This will make users only can edit this fields in the dictionary
 */
CommunityRole.helper('dictionary.allowedCategories', ['public']);

/**
 * Users can see posts in the admin
 */
CommunityRole.allow('collection.posts.index', true);

/**
 * And we will make that the users only see their posts in the index
 */
CommunityRole.helper('collection.posts.indexFilter', function() {
  return { createdBy: this.userId };
})

/**
 * Users can create posts
 */
CommunityRole.allow('collection.posts.insert', true);

/**
 * Users can update posts
 */
CommunityRole.allow('collection.posts.update', function(userId, doc, fields, modifier) {
  return doc.createdBy === userId; // Will be allowed to edit his own posts
});

/**
 * Users can't change the createdBy attribute
 */
CommunityRole.deny('collection.posts.update', function(userId, doc, fields, modifier) {
  return !_.contains(fields, 'userId');
});

/**
 * Users can remove posts
 */
CommunityRole.allow('collection.posts.remove', function(userId, doc) {
  return doc.createdBy === userId; // Will be allowed to edit his own posts
});

/**
 * Users can see the create post button
 */
CommunityRole.allow('collection.posts.showCreate', true);

/**
 * Users can see the update post button if they created the doc
 */
CommunityRole.allow('collection.posts.showUpdate', function(doc) {
  return doc.createdBy == this.userId;
});

/**
 * Users can see the delete post button if they created the doc
 */
CommunityRole.allow('collection.posts.showRemove', function(doc) {
  return doc.createdBy == this.userId;
});

