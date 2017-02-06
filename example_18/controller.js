angular
	.module("countriesApp", [])
	.controller("CountriesAppController", ["$scope", "$http", function($scope, $http) {
		$scope.countries = [];
		$http.get("https://restcountries.eu/rest/v1/all/")
			.then(function(res) {
				$scope.countries = res.data;
			}, function(res) {
				$scope.countries = [{name: "Error!!" + res.status}];
			});
	}]
);