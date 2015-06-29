Package.describe({
  name: 'timfam:meetup',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Orion Meetup slides',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
  'timfam:tools',
    ]);
  api.addFiles([
    'both/routes.js'
    ]);
  api.addFiles([
  // 'server/publications.js',
    ], 'server')

  api.addFiles([
  'views/layout/header.tpl.jade',
  'views/layout/layout.tpl.jade',
  'views/layout/footer.tpl.jade',
  'views/layout/notFound.tpl.jade',
  'views/layout/loading.tpl.jade',
  'views/layout/nav.tpl.jade',
  'views/layout/layout.js',
  'views/home/home.tpl.jade',
  'views/home/home.js',
  'views/home/home.less',
  'views/home/homepost.tpl.jade',
  'views/post/post.tpl.jade',
  'views/post/post.js',
  'views/post/post.less',
  'views/pages/allpages.tpl.jade',
  'views/pages/contactUs.tpl.jade',
  'views/pages/pagesSimple.tpl.jade',
  'views/pages/team.tpl.jade',

  ],'client' );

  // api.export('orion');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
