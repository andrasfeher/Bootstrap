// declare a module
var myAppModule = angular.module('myAppModule', []);

myAppModule.controller('mainCtrl', function ($scope, $http) {
    
    $http.get('http://46.101.161.6:3000')
    .success(function(data, status, headers, config) {
        $scope.data = data.message;
    })
    .error(function(data, status, headers, config) {
        console.log(status);
    });
    
});