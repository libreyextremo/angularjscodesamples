angular
	.module('apiApp', [])
	.controller('apiAppCtrl', ['$http', mainController]);

function mainController($http) {
	var vm = this;

	vm.searchInRegion = function() {
		$http.get(vm.url).success(function(respuesta){
			console.log("reply:", respuesta);
			vm.countries = respuesta;
		});
	}
}