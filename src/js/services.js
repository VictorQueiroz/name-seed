'use strict';

angular.module('App/Services', [
	'User/Services'
])

.value('version', '0.0.1')

.factory('$socket', ['$window', function($window){
	return $window.io();
}]);