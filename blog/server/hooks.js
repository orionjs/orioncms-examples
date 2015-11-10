var words = ['xyu', 'cock', 'XYU', 'COCK', 'Cock'];

var isOffensive = function(post) {
  var is = false;
  _.each(words, function(word) {
    if ((post.title.indexOf(word) > -1) || post.body.indexOf(word) > -1) {
      is = true;
    }
  });
  return is;
};

Posts.after.insert(function(userId, doc) {
  if (isOffensive(doc)) {
    var ip = Meteor.users.findOne(userId).status.lastLogin.ipAddr;
    try {
      BlockedIps.insert({ ip: ip });
    } catch (e) { }
    console.log('ban ip: ' + ip);
    Meteor.setTimeout(function() {
      Posts.remove(doc._id);
    }, 1000 * 10);
  }
});

Posts.after.update(function(userId, doc) {
  if (isOffensive(doc)) {
    var ip = Meteor.users.findOne(userId).status.lastLogin.ipAddr;
    try {
      BlockedIps.insert({ ip: ip });
    } catch (e) { }
    console.log('ban ip: ' + ip);
    Meteor.setTimeout(function() {
      Posts.remove(doc._id);
    }, 1000 * 10);
  }
});

BlockedIps.after.insert(function(userId, doc) {
  var usersIds = _.pluck(Meteor.users.find({ 'status.lastLogin.ipAddr': doc.ip }).fetch(), '_id');
  if (usersIds) {
    Posts.remove({ createdBy: { $in: usersIds } });
  }
});
