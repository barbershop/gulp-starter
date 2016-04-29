import Backbone from 'backbone';

const AppView = Backbone.View.extend({
	'el': 'body',
	'events': {},
	'initialize': () => {
		console.log('AppView: Initialized');
	},

	'render': () => {
	}
});

module.exports = AppView;
