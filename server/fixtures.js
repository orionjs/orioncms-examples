/**
 * Create the default user here.
 * The client will not view this files
 */

if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
        email: 'admin@meteor.com',
        password: '123456'
    });
}