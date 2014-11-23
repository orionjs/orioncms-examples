S3.config = {
	key: process.env.AWS_KEY,
	secret: process.env.AWS_SECRET,
	bucket: process.env.AWS_BUCKET
};

/**
 * Remember to use the instructions in this page
 * https://github.com/Lepozepo/S3#how-to-use
 * 
 * And then create a file with this in lib/
 *
if (Meteor.isServer) {

	process.env.AWS_KEY = 'Your amazon api key';
	process.env.AWS_SECRET = 'Your amazon api secret';
	process.env.AWS_BUCKET = 'Amazon bucket name';

}
 *
 * 
 */