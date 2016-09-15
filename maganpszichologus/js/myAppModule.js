var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function ($routeProvider){
	
	$routeProvider
	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/services', {
		templateUrl: 'pages/services.html',
		controller: 'mainController'
	})
	.when('/methods', {
		templateUrl: 'pages/methods.html',
		controller: 'mainController'
	})
	.when('/publicity', {
		templateUrl: 'pages/publicity.html',
		controller: 'mainController'
	})
	.when('/about', {
		templateUrl: 'pages/about.html',
		controller: 'mainController'
	})
	.when('/contact', {
		templateUrl: 'pages/contact.html',
		controller: 'mainController'
	});
	
});

myApp.controller("mainController", ['$scope', function ($scope) {

}]);
