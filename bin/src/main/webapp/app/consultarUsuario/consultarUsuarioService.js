define(["app"], function(app){
	app.service('consultarUsuarioService', ['$http', function ($http) {
       
        this.listarUsuarios = function(){
        	return $http.get('/Egab/rest/usuario/listar');
        };
        
        this.excluirUsuario = function(idUsuario){
        	return $http.get('/Egab/rest/usuario/excluirUsuario/'+idUsuario);
        };
        
	}]);
});