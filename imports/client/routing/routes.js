import { Router } from 'meteor/iron:router';
import { Tasks } from '/imports/collections/tasks.js';

window.t = Tasks;

Router.route('/', {
	name: 'list',
	template: 'page_list'
});

Router.route('/create-task', {
	name: 'create-task',
	template: 'page_create_task'
});

Router.route('/edit-task/:_id', {
	name: 'edit-task',
	template: 'page_edit_task',
	data: function(){
			return Tasks.findOne({ _id : this.params._id});
		}
});

Router.configure({
	layoutTemplate: 'component_context'
});