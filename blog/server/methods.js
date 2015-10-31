Meteor.methods({
  flagPost: function(postId) {
    check(postId, String);
    var ip = this.connection && this.connection.clientAddress;
    var post = Posts.findOne(postId);
    if (!post || !ip) {
      return;
    } else if (post.flaggedBy && post.flaggedBy.length > 1) {
      Posts.remove(postId);
    } else {
      Posts.update(postId, { $addToSet: { flaggedBy: ip } });
    }
  }
});
