import '../imports/client/ui/pages/create_task';
import '../imports/client/ui/pages/edit_task';
import '../imports/client/ui/pages/main_list';
import '../imports/client/ui/pages/impressum';

import '../imports/client/ui/components/main';
import '../imports/client/ui/components/header';


import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/client/ui/pages/main_list.jsx';


Meteor.startup( () => {
	render( <App />, document.getElementById('render-target'));
});