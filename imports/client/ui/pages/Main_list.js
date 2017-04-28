import React from 'react';
import { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Task from './Create_task';


export default class Main_list extends Component {
	getTasks(){
		return [
			{ _id: 1, text: 'This is Task 1'},
		];
	}

	renderTasks(){
		return this.getTasks().map( (task) => (
			<Task key={task._id} task={task} />
		));
	}

	render(){
		return (
      		<div className="container">
	       		<header>
	          		<h1>Lets create your own to do list!</h1>
	        	</header>
	 
	        	<ul>
	          		{this.renderTasks()}
	        	</ul>
      		</div>
      	);
	}
}

