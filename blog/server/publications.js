/**
 * Publish all posts
 */
Meteor.publish('posts', function () {
  var ip = this.connection.clientAddress;
  return Posts.find({ flaggedBy: { $ne: ip } }, { sort: { createdAt: -1 }, limit: 30, fields: { flaggedBy: 0 } });
});

/**
 * Publish posts with all the creators profiles
 */
Meteor.publishComposite('postsWithUsers', {
  find: function() {
    var ip = this.connection.clientAddress;
    return Posts.find({ flaggedBy: { $ne: ip } }, { sort: { createdAt: -1 }, limit: 30, fields: { flaggedBy: 0 } });
  },
  children: [{
    find: function(post) {
      return Meteor.users.find({ _id: post.createdBy }, { fields: { profile: 1 } });
    }
  }]
});

/**
 * Publish one post specifically with its creator profile
 */
Meteor.publishComposite('onePostWithUser', function(postId) {
  check(postId, String);
  return {
    find: function() {
      var ip = this.connection.clientAddress;
      return Posts.find({ _id: postId, flaggedBy: { $ne: ip } }, { fields: { flaggedBy: 0 } });
    },
    children: [{
      find: function(post) {
        return Meteor.users.find({ _id: post.createdBy }, { fields: { profile: 1 } });
      }
    }]
  };
});
