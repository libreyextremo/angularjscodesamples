angular
	.module('app', [])
	.controller('appCtrl', ['$http', mainController]);

function mainController($http) {
	var vm = this;

	vm.fdata = {};

	vm.sendTo = function() {
		%http.post("recibe-formulario.php", vm.fdata)
			.success(function(res) {
				console.log(res);
			});
	}
}