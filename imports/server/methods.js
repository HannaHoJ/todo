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

})

