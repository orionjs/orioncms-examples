orion.pages.addTemplate({
    template: 'contactUs', 
    name: 'contact',
    description: 'Simple template'
}, {
    content: orion.attribute('froala', {
      label: 'Content'
    }),
    image: orion.attribute('image', {
        label: 'Page Image',
        optional: true
    }),
    menu: {
       label: 'Menu',
       type: String,
       allowedValues: ["topmenu","footer"],
       optional: true
    },
})


