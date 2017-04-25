import React from 'react';
import { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// import Task from './create_task.jsx';


export default class App extends Component {
	// getTasks(){
	// 	return [
	// 		{ _id: 1, text: 'This is Task 1'},
	// 	];
	// }

	// renderTasks(){
	// 	return this.getTasks().map( (task) => (
	// 		<Task key={task._id} task={task} />
	// 	));
	// }

	render(){
		return (
			<h1>Lets create your own to do list!</h1>
			);
		// return (
  //     		<div className="container">
	 //       		<header>
	 //          		<h1>Todo List</h1>
	 //        	</header>
	 
	 //        	<ul>
	 //          		{this.renderTasks()}
	 //        	</ul>
  //     		</div>
  //     	);
	}
}

