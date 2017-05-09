import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '/imports/collections/tasks.js';

import './edit_task.html';

window.t = Tasks;

const template = Template.page_edit_task;

template.onCreated(function(){
	Meteor.subscribe('tasks');	
});

template.helpers({
	'editItem': function(){
		return Tasks.findOne({_id: Router.current().params._id});
	}
});

template.events({
	'submit .submit-editedTask': function(event, instance){
		event.preventDefault();
		var task = event.target.task.value;
        var deadline = event.target.deadline.value;
        var progress = event.target.progress.value;
		  // update a product into the collection
        Meteor.call('tasks.update', instance.data._id, task, deadline, progress, function(error, result) {
            if (error) {
                console.log("error");
                alert("the update failed!");
            } else {
                console.log("result");
            }
        });

        event.target.task.value = "";
        event.target.deadline.value = "";
        event.target.progress.value = "";

        Router.go('list');
	}
})


