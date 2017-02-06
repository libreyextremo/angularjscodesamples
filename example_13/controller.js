var acumuladorApp= angular.module('acumuladorApp', [])
acumuladorApp.controller("acumuladorAppCtrl", 
	["$scope", function($scope) {
		$scope.total = 0;
		$scope.cuanto = 0;
		$scope.tamTitular = "titularpeq";

		$scope.sumar = function() {
			$scope.total += parseInt($scope.cuanto);
		}

		$scope.restar = function() {
			$scope.total -= parseInt($scope.cuanto);
		}

		clases = ["uno", "dos", "tres"];

	}]);
