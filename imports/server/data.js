import { Tasks } from '/imports/collections/tasks.js';

console.log("task scripts");

if (Tasks.find({}).count() === 0) {
    const tasks = [{
        task: "Abgabe der TODO Liste",
        deadline: "2017-05-12",
        progress: "50",
        createdAt: new Date(),
    }, {
        task: "cut hair",
        deadline: "2017-06-09",
        progress: "0",
        createdAt: new Date(),
    }, {
        task: "call xx for birthday",
        deadline: "2017-12-19",
        progress: "0",
        createdAt: new Date(),
    }]

    for (var i = tasks.length - 1; i >= 0; i--) {
        Tasks.insert(tasks[i]);
    }
}
