define([
	'angular',

	'Auth/IfAuthenticated-Directive',
	'Auth/IfGuest-Directive'
], function (angular) {
	'use strict';

	angular.module('Auth/Directives', [
		'Auth/Directive/IfAuthenticated',
		'Auth/Directive/IfGuest'
	]);
});