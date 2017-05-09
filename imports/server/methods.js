import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Tasks } from '/imports/collections/tasks.js';

Meteor.methods({
    'tasks.insert': function(task, deadline, progress) {
        check(task, String);
        check(deadline, String);
        check(progress, String);
        console.log('We are inserting tasks');
        Tasks.insert({
            task: task,
            deadline: deadline,
            progress: progress,
            createdAt: new Date(), // current time
        });

    },

    'tasks.update': function(taskId, task, deadline, progress){
        check(taskId, String);
        check(task, String);
        check(deadline, String);
        check(progress, String);
        console.log('updating Task');
        var updatedItem = {
            task: task,
            deadline: deadline,
            progress: progress,
        };
        
        Tasks.update({ _id: taskId }, { $set: updatedItem } );
    },

    'tasks.remove': function(taskId){
        check(taskId, String);
        Tasks.remove(taskId);
    },

})

