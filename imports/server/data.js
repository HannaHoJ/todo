import { Tasks } from '/imports/collections/tasks.js';

console.log("task srcipt");

if (Tasks.find({}).count() === 0) {
    const tasks = [{
        task: "Abgabe der TODO Liste",
        deadline: "03.05.2017",
        progress: "50",
        createdAt: new Date(),
    }, {
        task: "cut hair",
        deadline: "08.05.2017",
        progress: "0",
        createdAt: new Date(),
    }, {
        task: "call xx for birthday",
        deadline: "10.10.2017",
        progress: "0",
        createdAt: new Date(),
    }]

    for (var i = tasks.length - 1; i >= 0; i--) {
        Tasks.insert(tasks[i]);
    }
}