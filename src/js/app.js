'use strict';

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
])

.run(['$io', function($io) {
	$io.socket.then(function(socket) {
		//
	});
}]);