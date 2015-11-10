BlockedIps = new orion.collection('blocked_ips', {
  singularName: 'ip',
  pluralName: 'ips',
  title: 'Blocked Ips',
  link: {
    title: 'Blocked Ips'
  },
  tabular: {
    columns: [
      { data: 'ip', title: 'IP' },
      orion.attributeColumn('createdAt', 'createdAt', orion.helpers.getTranslation('posts.schema.createdAt'))
    ]
  }
});

BlockedIps.attachSchema(new SimpleSchema({
  ip: {
    type: String,
    label: 'IP',
    unique: true
  },
  createdAt: orion.attribute('createdAt')
}));
