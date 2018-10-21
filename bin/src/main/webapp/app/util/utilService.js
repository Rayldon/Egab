define(["app"], function(app){
	app.service('utilService', ['$http', function ($http) {
        
		this.concatTelefone = function(telefones) {
		angular.forEach(telefones, function(telefone){
		    telefone.numeroTelefone = telefone.dddTelefone.toString() + telefone.numeroTelefone.toString();
		  });
		  return telefones;
		}
		
		this.separarTelefone = function(telefones) {
			angular.forEach(telefones, function(telefone){
			    telefone.ddd = telefone.telefone.substring(0,2);
			    telefone.telefone = telefone.telefone.substring(2);
			});
			return telefones;
		}
        
	}]);
});

