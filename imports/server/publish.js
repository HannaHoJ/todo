import { Meteor } from 'meteor/meteor';
import { Tasks } from '/imports/collections/tasks.js';

Meteor.publish('tasks', function() {
    	return Tasks.find({}, {});
	}
);