define([
	"angularAMD"
], function(angularAMD){
	angularAMD.directive("telefone", function() {
		return {
			templateUrl: 'app/diretivas/templates/telefone.html',
			scope: {
				model:'=',
				classe:'@'
			},
			restrict: 'E',
			controller:telefoneController
		};
	});
	
	function telefoneController($scope){
		
		$scope.mascara = function(){
			setTimeout('mtel()',1);
		}

		mtel = function(){
			v = $scope.model;
			v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
		    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
		    $scope.model=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
		}
	}
});