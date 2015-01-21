/**
 * This will allow users create their accounts on /admin
 * and will add the following permissions
 */
orion.users.configure({
    forbidClientAccountCreation: false,
    defaultPermissions: [
    	'files.folders', 
    	'files.upload', 
    	'files.delete', 
    	'dictionary.public',
    	'entity.posts.personal' // Users can create, update, and delete posts created by them
    ]
})

if (Meteor.isServer) {
	/**
	 * We will publish the users names
	 */
	Meteor.publish("usersNames", function () {
		return Meteor.users.find({}, { fields: { profile: 1 } });
	});
}