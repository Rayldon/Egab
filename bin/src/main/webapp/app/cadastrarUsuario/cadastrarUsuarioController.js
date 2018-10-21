define([
	"app", 
	"../../../cadastrarUsuario/cadastrarUsuarioService",
	"../../../util/utilService",
	"../../../diretivas/telefone",
	"../../../../angularjs/angular-md5",
], function(app){
	app.controller('cadastrarUsuarioController', ['$scope', '$routeParams','md5','cadastrarUsuarioService','utilService',
		function($scope, $routeParams, md5, cadastrarUsuarioService, utilService){
		
			if($routeParams.id != null){
				cadastrarUsuarioService.buscarUsuario($routeParams.id)
				.then(function (response){
	                $scope.dados = response.data;
	            },function (error){
	                $scope.error = 'Unable to load customer data: ' + error.message;
	            });
			}
		
			$scope.salvar = function(){
				if(validarCampos()){
					$scope.dados.seqUsuario = ($scope.dados.seqUsuario != null) ? $scope.dados.seqUsuario: null;
					$scope.dados.senha = md5.createHash($scope.senha);
					validarTelefones();
					cadastrarUsuarioService.salvar($scope.dados)
					.then(function (response){
		                $scope.success = "Salvo com sucesso";
		            },function (error){
		                $scope.error = 'Ocorreu um erro: ' + error.message;
		            });
				}
			}
			
			function validarTelefones(){
				if($scope.dados.telefones[0].seqTelefone == null){
					$scope.dados.telefones[0] = {'seqTelefone': null, 'ddd': null, 'telefone': $scope.dados.telefones[0].telefone};
				}
				if($scope.dados.telefones[1].seqTelefone == null){
					$scope.dados.telefones[1] = {'seqTelefone': null, 'ddd': null, 'telefone': $scope.dados.telefones[1].telefone};
				}
				utilService.separarTelefone($scope.dados.telefones);
			}
			
			function validarCampos(){
				if($scope.dados.nome == null || $scope.dados.nome == ""){
					alert("Informe o primeiro nome");
					return false;
				}else if($scope.dados.sobrenome == null || $scope.dados.sobrenome == ""){
					alert("Informe o último nome");
					return false;
				}else if($scope.dados.email == null || $scope.dados.email == ""){
					alert("Informe o email");
					return false;
				}else if($scope.dados.situacao == null || $scope.dados.situacao == ""){
					$scope.dados.situacao = false;
				}else if($scope.senha == null || $scope.senha == ""){
					alert("Informe a senha");
					return false;
				}else if($scope.confirmSenha == null || $scope.confirmSenha == ""){
					alert("Informe a confirmação da senha");
					return false;
				}else if($scope.confirmSenha != $scope.senha){
					alert("Senhas não conferem");
					return false;
				}
				return true;
			}		
		}
	]);
});