import { Mongo } from 'meteor/mongo';

export var Tasks = new Mongo.Collection('tasks');
console.log('We created collection');