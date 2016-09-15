var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function($scope, $http){
    $http.get('http://127.0.0.1:1337/')
        ,success(function(result){
            serverResponse = JSON.parse(result);
            $scope.message = result;// serverResponse.message;
            alert(result);
        })
        .error(function(data, status){
            console.log(data);
        })
}]);