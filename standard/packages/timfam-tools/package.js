Package.describe({
  name: 'timfam:tools',
  summary: 'Classify your content',
  version: '0.0.1',
  //  git: 'https://github.com/orionjs/orion'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
          'less',
    'coffeescript',
    'mquandalle:jade@0.4.3',
    'orionjs:bootstrap',
    'orionjs:pages',
    ]);
  api.imply([
            'less',
  'coffeescript',
  'mquandalle:jade',
  'orionjs:bootstrap', 
  'orionjs:pages',      
            ])
  api.addFiles([
  ]);
  // api.export('orion');
});

