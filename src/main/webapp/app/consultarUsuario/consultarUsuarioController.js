define([
	"app", 
	"../../../consultarUsuario/consultarUsuarioService",
], function(app){
	app.controller('consultarUsuarioController', ['$scope','consultarUsuarioService',
		function($scope, consultarUsuarioService){
			
			$scope.listarUsuarios = function(){
				consultarUsuarioService.listarUsuarios()
				.then(function (response){
					$scope.dados = {'usuarios':response.data};
	            },function (error){
	                $scope.error = 'Unable to load customer data: ' + error.message;
	            });
			}
			
			$scope.listarUsuarios();
			
			$scope.excluirUsuario = function(idUsuario){
				consultarUsuarioService.excluirUsuario(idUsuario)
				.then(function (response){
					$scope.listarUsuarios();
					$scope.success = "Removido com sucesso";
	            },function (error){
	                $scope.error = 'Unable to load customer data: ' + error.message;
	            });
			}
		}
	]);
});