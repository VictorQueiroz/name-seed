'use strict';

var socket = io.connect();

angular.module('App', [
	'ngRoute',
	'ngAnimate',
	'ngSanitize',

	'App/Routes',
	'App/Controllers',
	'App/Filters',
	'App/Directives',
	'App/Services',
	'App/Partials',

	'Auth',

	'ui.bootstrap',
	'mgcrea.ngStrap'
]);