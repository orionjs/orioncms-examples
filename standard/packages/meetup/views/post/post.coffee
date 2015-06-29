Template.post.helpers post: ->
  Posts.findOne Router.current().params._id
Template.post.onRendered ->
  @subscribe 'onePostWithUser', Router.current().params._id
  return
