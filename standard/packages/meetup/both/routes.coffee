Router.configure
  loadingTemplate: 'loading'
  layoutTemplate: 'layout'
Router.route '/',
  name: 'home'
  layoutTemplate: 'layout'
Router.route '/posts/:_id',
  name: 'post'
  
Router.route '/allpages',
  # waitOn: -> 
  #   [Meteor.subscribe 'pages',  ]
  name: 'allpages'
