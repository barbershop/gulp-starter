import Backbone from 'backbone';
import $ from 'jquery';
import Router from 'routers/router';

Backbone.$ = $;

const router = new Router();

Backbone.history.start();
