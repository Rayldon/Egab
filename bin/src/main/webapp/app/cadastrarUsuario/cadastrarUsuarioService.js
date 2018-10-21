define(["app"], function(app){
	app.service('cadastrarUsuarioService', ['$http', function ($http) {
        
		this.salvar = function(params){
        	return $http.post('/Egab/rest/usuario/salvar', params);
        };
        
        this.buscarUsuario = function(id){
        	return $http.get('/Egab/rest/usuario/buscarUsuario/'+id);
        };
        
	}]);
});