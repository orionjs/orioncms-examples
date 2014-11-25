Orion Example Blog
==================

http://orion.meteor.com

Learn how to use orion using this example

![alt tag](http://i.imgur.com/QmxzhaV.jpg)

Orion is a simple and useful cms for meteor. 
Creates automatically a admin panel for your 
collections and gives you the ability to have
key/value definitions for your site.

## Installing

Setup your amazon credentials.
Create a file in lib/ with this content
```js
if (Meteor.isServer) {
	process.env.AWS_KEY = 'AMAZON API KEY';
	process.env.AWS_SECRET = 'AMAZON API SECRET';
	process.env.AWS_BUCKET = 'S3 BUCKET NAME';
}
```
Read the instructions on how to setup the S3 bucket [here](https://github.com/Lepozepo/S3#create-your-amazon-s3)

## Content

This example covers the following points

- How to create entities and the dictionary
- How to use the image attribute
- How to use summernote
- Using iron router with orion
- Subscribing to the dictionary and entities
