Template.home.onRendered ->
  @subscribe 'postsWithUsers'
  return
Template.home.helpers posts: ->
  Posts.find()
