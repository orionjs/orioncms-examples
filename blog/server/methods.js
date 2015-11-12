Meteor.methods({
  /**
   * Add the user ip to the flaggedBy array in the post. That will
   * hide the post for him. If flaggedBy reaches 3, it will remove
   * the post and ban the who created it.
   */
  flagPost: function(postId) {
    check(postId, String);
    var ip = this.connection && this.connection.clientAddress;
    var post = Posts.findOne(postId);
    if (!post || !ip) {
      return;
    } else if (post.flaggedBy && post.flaggedBy.length > 1) {
      Posts.remove(postId);
      try {
        var user = Meteor.users.findOne(post.createdBy);
        var userIp = user && user.status.lastLogin.ipAddr;
        BlockedIps.insert({ ip: userIp });
        console.log('ban ip: ' + userIp);
      } catch (e) { }
    } else {
      Posts.update(postId, { $addToSet: { flaggedBy: ip } });
    }
  },
  likePost: function(postId) {
    check(postId, String);
    if (!this.userId) return;
    var likes = Likes.find({ userId: this.userId, postId: postId }).count();
    if (likes) return;
    Likes.insert({ userId: this.userId, postId: postId });
    Posts.update(postId, { $inc: { likesCount: 1 } });
  },
  unlikePost: function(postId) {
    check(postId, String);
    if (!this.userId) return;
    var likes = Likes.find({ userId: this.userId, postId: postId }).count();
    if (!likes) return;
    Likes.remove({ userId: this.userId, postId: postId });
    Posts.update(postId, { $inc: { likesCount: -1 } });
  }
});
