define([
	'angular',

	'Auth/Directive/IfAuthenticated',
	'Auth/Directive/IfGuest'
], function (angular) {
	'use strict';

	angular.module('Auth/Directives', [
		'Auth/Directive/IfAuthenticated',
		'Auth/Directive/IfGuest'
	]);
});