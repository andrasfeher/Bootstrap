var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function ($routeProvider){
	
	$routeProvider
	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/second', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})
	.when('/second/:num', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	});
	
});

myApp.service('nameService', function() {
   
    var self = this;
    this.name = 'John Doe';
    
    this.namelength = function() {
      
        return self.name.length;
        
    };
    
});

myApp.controller("mainController", ['$scope', '$http', '$location', '$log', 'nameService', function ($scope, $http, $location, $log, nameService) {

		$scope.name = nameService.name;
	
        $scope.$watch('name', function() {
            nameService.name = $scope.name;
        });
	
		$scope.greeting = 'Hello';

		$scope.person = {
			name : "Andras",
		};
		
		$scope.list = [
			"it1",
			"it2",
			"it3"
		];
		
		$scope.colors = [
		  {name:'black', shade:'dark'},
		  {name:'white', shade:'light', notAnOption: true},
		  {name:'red', shade:'dark'},
		  {name:'blue', shade:'dark', notAnOption: true},
		  {name:'yellow', shade:'light', notAnOption: false}
		];
		
		$scope.myColor = $scope.colors[2]; // red
		
		$scope.masterCheck = false;
		
		$scope.counter = 0;
		$scope.confirmed = $scope.counter !== 0
		$scope.change = function() {
			$scope.counter++;
		};
		
		$scope.toDoList = [];
		$scope.newToDoItem = "";
		$scope.addToDoItem = function(){
			if($scope.newToDoItem !== "" ){
				$scope.toDoList.push($scope.newToDoItem);
				$scope.newToDoItem = "";
			}
		};

		$http.get('http://46.101.161.6:3000')
        .success(function(result){
            // serverResponse = JSON.parse(result);
            $scope.message = result.message;// serverResponse.message;
        })
        .error(function(data, status){
			console.log(status);
            console.log(data);
        })
		
		// write bookmark info to console
		$log.info($location.path());
		
	}]);
	
myApp.controller("secondController", ['$scope', '$http', '$log', '$routeParams', 'nameService', function ($scope, $http, $log, $routeParams, nameService) {
	
	$scope.name = nameService.name;

    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });

	$scope.num = $routeParams.num || 1;
	
}]);
	