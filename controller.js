angular.module('test', [])
.controller('testController', ['$scope', function($scope) {
	$scope.showNumbers = function(type){

		$scope.errors = false;

		if($scope.max > $scope.min){

			$scope.numbers = {};

			for (var i = $scope.min; i <= $scope.max; i++) {

				if(i % 2 == 0){
					$scope.numbers[i] = 'even';				
				} else {
					$scope.numbers[i] = 'odd';
				}

			}

		} else {

			$scope.errors = "Range error";

		}

		$scope.type = type;

	};
}]);
