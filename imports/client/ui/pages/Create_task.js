import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './create_task.html';

const template = Template.component_task;

template.events({
    'submit. submit-task': function(event, instance) {
        // Prevent default browser form submit
        event.preventDefault();
        let task = event.target.task.value;
        let deadline = event.target.deadline.value;
        let progress = event.target.progress.value;

        // Insert a product into the collection
        Meteor.call('tasks.insert', task, deadline, progress, function(error, result) {
            if (error) {
                console.log("error");
                alert("the insertion failed!");
            } else {
                console.log("result");
            }
        });

        event.target.task.value = "";
        event.target.deadline.value = "";
        event.target.progress.value = "";
    }
});
