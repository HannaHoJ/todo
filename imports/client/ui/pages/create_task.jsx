import { Component } from 'react';
import { PropTypes } from 'react';

export class Task extends Component{
	render(){
		return(
			<li> {this.props.task.text} </li>
		);
	}
}

Task.propTypes = {
	task: PropTypes.object.isRequired,
};