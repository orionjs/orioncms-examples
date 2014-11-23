if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
        email: 'admin@meteor.com',
        password: '123456'
    });
}