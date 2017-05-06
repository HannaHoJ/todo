import { Router } from 'meteor/iron:router';

Router.route('/', {
	name: 'list',
	template: 'page_list'
});

Router.route('/create-task', {
	name: 'create-task',
	template: 'page_create_task'
});

Router.route('/edit-task', {
	name: 'edit-task',
	template: 'page_edit_task'
});

Router.configure({
	layoutTemplate: 'component_context'
});