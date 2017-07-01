require.config({
    paths: {
        //definindo as variáveis para os respectivos caminhos dos arquivos JS.
        angular: 
        	"../../angularjs/angular.min",      
        	"angular-route": "../../angularjs/angular-route.min",
        angularAMD: 
        	"../../angularjs/angularAMD.min"
    },
    shim: {
        //Aqui é definida a ordem em que os arquivos serão carregados, primeiro angular.min, depois angularAMD e angular-route
    	angularAMD: ["angular"],
        "angular-route": ["angular"]
    },
    //depois de carregar tudo, executará app.js
    deps: ["app"]
});