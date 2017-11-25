var app = angular.module('myApp',[]);

app.controller('mainctrl', function($scope,$filter,$http){
	
	//today's special
		$scope.today = $filter('date')(new Date(), 'MMMM d');
		$http({
				method:'GET', 
				url:'daysList.json'
			})
			.success(function(response){
				$scope.daysList = response;
			})
	
	
});