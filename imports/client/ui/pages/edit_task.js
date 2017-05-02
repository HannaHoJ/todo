import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '/imports/collections/tasks.js';

import './edit_task.html';

window.t = Tasks;

const template = Template.page_edit_task;

template.onCreated(function(){
	Meteor.subscribe('tasks');	
});


