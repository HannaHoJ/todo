import { Template } from 'meteor/templating';

import './nav.html';

Template.component_nav.helpers({
	'activeIfTemplate': function(template) {
      var currentRoute = Router.current();
      return currentRoute && template === currentRoute.lookupTemplate() ? 'active' : '';
    }
});