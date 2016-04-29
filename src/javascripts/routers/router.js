import Backbone from 'backbone'; // eslint-disable-line
import app from '../helpers/app';
import AppView from '../views/app-view';

const Router = Backbone.Router.extend({

	'routes': {
		'': 'default'
	},

	'initialize': () => {
		console.log('Router: initialized');
		app.views.app = new AppView();
	},

	'default': () => {
	},
});

module.exports = Router;
