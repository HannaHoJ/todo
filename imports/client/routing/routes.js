import { Router } from 'meteor/iron:router';

Router.route('/', {
	name: 'list',
	template: 'page_list'
});

Router.route('/create-task', {
	name: 'create-tasks',
	template: 'page_create_task'
});

Router.route('/edit-task', {
	name: 'edit-task',
	template: 'page_edit_task'
});

Router.route('/impressum', {
	name: 'impressum',
	template: 'page_impressum'
});