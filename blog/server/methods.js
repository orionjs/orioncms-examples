Meteor.methods({
  flagPost: function(postId) {
    check(postId, String);
    var ip = this.connection.clientAddress;
    var post = Posts.findOne(postId);
    if (!post) {
      return;
    } else if (post.flaggedBy && post.flaggedBy.length > 3) {
      Posts.remove(postId);
    } else {
      Posts.update(postId, { $addToSet: { flaggedBy: ip } });
    }
  }
});
