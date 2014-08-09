'use strict';

var socket = io.connect();

angular.module('App', [
	'ngRoute',
	'ngAnimate',
	'ngSanitize',

	'pascalprecht.translate',
	'ui.bootstrap',
	'mgcrea.ngStrap',	

	'App/Routes',
	'App/Controllers',
	'App/Filters',
	'App/Directives',
	'App/Services',
	'App/Partials',

	'Auth'
]);