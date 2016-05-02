import Backbone from 'backbone'; // eslint-disable-line

const AppView = Backbone.View.extend({
	'el': 'body',
	'events': {},
	'initialize': function() {
		console.log('AppView: Initialized');
	},

	'render': function() {
	}
});

module.exports = AppView;
