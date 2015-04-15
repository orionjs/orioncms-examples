/**
 * We will publish posts
 */
Meteor.publish('posts', function () {
  return Posts.find();
});

/**
 * And one post specifically
 */
Meteor.publishComposite('onePost', function(postId) {
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