import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '/imports/collections/tasks.js';

import './list.html';

window.t = Tasks;

const template = Template.page_list;

template.onCreated(function(){
	Meteor.subscribe('tasks');	
});


template.helpers({
	'taskItem': function() {
		const tasks = Tasks.find({}, {sort: { deadline: 1} } ).fetch();
		console.log('tasks: ' + tasks);
		return tasks;
	}

});

template.events({
	
	

});

