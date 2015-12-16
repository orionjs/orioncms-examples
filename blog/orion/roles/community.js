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
CommunityRole.allow('collections.posts.index', true);

/**
 * And we will make that the users only see their posts in the index
 */
CommunityRole.helper('collections.posts.indexFilter', function() {
  return { createdBy: this.userId };
});

/**
 * Users can create posts
 */
CommunityRole.allow('collections.posts.insert', true);

/**
 * Users can update posts
 */
CommunityRole.allow('collections.posts.update', function(userId, doc, fields, modifier) {
  return doc.createdBy === userId; // Will be allowed to edit his own posts
});

/**
 * Users can't change the createdBy attribute
 */
CommunityRole.deny('collections.posts.update', function(userId, doc, fields, modifier) {
  return _.contains(fields, 'userId');
});

/**
 * Users can remove posts
 */
CommunityRole.allow('collections.posts.remove', function(userId, doc) {
  return doc.createdBy === userId; // Will be allowed to edit his own posts
});

/**
 * Users can see the create post button
 */
CommunityRole.allow('collections.posts.showCreate', true);

/**
 * Users can see the update post button if they created the doc
 */
CommunityRole.allow('collections.posts.showUpdate', function(doc) {
  return doc.createdBy == this.userId;
});

/**
 * Users can see the delete post button if they created the doc
 */
CommunityRole.allow('collections.posts.showRemove', function(doc) {
  return doc.createdBy == this.userId;
});

/**
 * Users cant modify the following fields
 */
CommunityRole.helper('collections.posts.forbiddenFields', function(doc) {
  return ['flaggedBy', 'likedBy', 'likesCount'];
});

/**
 * Blocked users cant insert or update posts and edit the dictionary
 */
CommunityRole.deny('collections.posts.insert', function(userId, doc) {
  var ip = Meteor.users.findOne(userId).status.lastLogin.ipAddr;
  var deny = !!BlockedIps.find({ ip: ip }).count();
  if (deny) {
    console.log('post insert blocked to', userId);
  }

  return deny;
});

CommunityRole.deny('collections.posts.update', function(userId, doc) {
  var ip = Meteor.users.findOne(userId).status.lastLogin.ipAddr;
  var deny = !!BlockedIps.find({ ip: ip }).count();
  if (deny) {
    console.log('post update blocked to', userId);
  }

  return deny;
});

CommunityRole.deny('dictionary.update', function(userId, doc) {
  if (Meteor.isServer) {
    var ip = Meteor.users.findOne(userId).status.lastLogin.ipAddr;
    var deny = !!BlockedIps.find({ ip: ip }).count();
    if (deny) {
      console.log('dictionary update blocked to', userId);
    }

    return deny;
  }
});
