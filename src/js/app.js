'use strict';

angular.module('App', [
	'ngRoute',
	'ngAnimate',
	'ngSanitize',

	'ui.bootstrap',
	'mgcrea.ngStrap',	
	'pascalprecht.translate',
	'victorqueiroz.ngPaginator',

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