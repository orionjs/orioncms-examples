Template.layout.onRendered(function() {
  this.subscribe('pages')
});


if (Meteor.isClient) {
    /**
     * pageSections
     */
    Template.registerHelper('pageSections', function (section) {
        var pages = orion.pages.collection.find().fetch();
        sections = _(pages).chain().flatten().pluck('section').unique().value().sort();
        console.log(sections);
        return sections;
    });
}
