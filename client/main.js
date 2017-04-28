
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Main_list from '../imports/client/ui/pages/Main_list';


Meteor.startup( () => {
	render( <Main_list />, document.getElementById('render-target'));
});