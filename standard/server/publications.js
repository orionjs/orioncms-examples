/*
Pages are auto publish so do nothing here for pages
 */

/**
 * Publish all posts
 */
Meteor.publish('posts', function () {
  return Posts.find();
});

/**
 * Publish posts with all the creators profiles
 */
Meteor.publishComposite('postsWithUsers', {
  find: function() {
    return Posts.find();
  },
  children: [{
    find: function(post) {
      return Meteor.users.find({ _id: post.createdBy }, { fields: { profile: 1 } });
    }
  }]
})

/**
 * Publish one post specifically with its creator profile
 */
Meteor.publishComposite('onePostWithUser', function(postId) {
  check(postId, String);
  return {
    find: function() {
      return Posts.find({ _id: postId });
    },
    children: [{
      find: function(post) {
        return Meteor.users.find({ _id: post.createdBy }, { fields: { profile: 1 } });
      }
    }]
  }
})
