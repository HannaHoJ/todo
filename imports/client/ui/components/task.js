import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './task.html';

const template = Template.component_task;

template.events({
	'click .btn-danger': function(event, instance){
		event.preventDefault();
		Meteor.call('tasks.remove', instance.data._id, function(error,result){
			if (error) {
                console.log("error");
                alert("the insertion failed!");
            } else {
                console.log("result");
            }
		});
	},

	'click .btn-edit': function(event, instance){
		event.preventDefault();
		Router.go('edit-task', {});
	}

});
