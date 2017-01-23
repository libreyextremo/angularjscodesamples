angular
.module('acumuladorApp', [])
.controller("acumuladorAppCtrl", controladorPrincipal);

function controladorPrincipal(){
	var scope = this;
	scope.total = 0;
	scope.cuanto = 0;

	scope.sumar = function() {
		scope.total += parseInt(scope.cuanto);
	}

	scope.restar = function() {
		scope.total -= parseInt(scope.cuanto);
	}
};