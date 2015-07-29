orion.pages.addTemplate({
    template: 'pagesSimple', 
    name: 'Simple',
    description: 'Simple template'
}, {
    content: orion.attribute('froala', {
      label: 'Content'
    }),
    menu: {
       label: 'Menu',
       type: String,
       allowedValues: ["topmenu","footer"],
       optional: true
    },
})
