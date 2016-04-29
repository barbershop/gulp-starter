import Backbone from 'backbone'; // eslint-disable-line
import $ from 'jquery';
import Router from 'routers/router';

Backbone.$ = $;

const router = new Router(); // eslint-disable-line

Backbone.history.start();
