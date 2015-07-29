orion.pages.addTemplate({
    template: 'team', 
    name: 'team',
    description: 'Simple template'
}, {
    content: orion.attribute('froala', {
      label: 'Content'
    }),
    bio: {
      type:[Object],
      optional:true,
      label: 'Biography'
    },
    'bio.$.name':{
      type:String,
      optional:true,
      label: 'Name'
    },
    'bio.$.photo':orion.attribute('image', {
        label: 'Photo',
        optional: true
    }),
    menu: {
       label: 'Menu',
       type: String,
       allowedValues: ["topmenu","footer"],
       optional: true
    },
})


