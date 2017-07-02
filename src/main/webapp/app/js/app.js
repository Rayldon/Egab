/*AngularAMD é uma utilidade que facilita o uso de RequireJS em aplicações AngularJS 
que suportam o carregamento sob demanda de módulos de terceiros como angular-ui*/
define(["angularAMD", "angular-route"], function(angularAMD) {
    var app = angular.module("webapp", ["ngRoute"]);    
    app.config(function($routeProvider) {
        $routeProvider
        .when("/", angularAMD.route({
            templateUrl: "blank.html"
        }))
        .when("/cadastrarUsuario", angularAMD.route({
            templateUrl: "app/cadastrarUsuario/cadastrarUsuario.html",
            controller: "cadastrarUsuarioController",
            //Aqui é definido dinamicamente o arquivo do controlador, que só será carregado caso essa rota seja acessada
            controllerUrl: "app/cadastrarUsuario/cadastrarUsuarioController.js"
        }))
        .when("/alterarUsuario/:id", angularAMD.route({
            templateUrl: "app/cadastrarUsuario/cadastrarUsuario.html",
            controller: "cadastrarUsuarioController",
            //Aqui é definido dinamicamente o arquivo do controlador, que só será carregado caso essa rota seja acessada
            controllerUrl: "app/cadastrarUsuario/cadastrarUsuarioController.js"
        }))
        .when("/consultarUsuario/", angularAMD.route({
            templateUrl: "app/consultarUsuario/consultarUsuario.html",
            controller: "consultarUsuarioController",
            //Aqui é definido dinamicamente o arquivo do controlador, que só será carregado caso essa rota seja acessada
            controllerUrl: "app/consultarUsuario/consultarUsuarioController.js"
        }))
        .otherwise({
            redirectTo: "/"
        })
    });

    //Isso irá inicializar o aplicativo. Não é necessário definir 'ng-app' no arquivo HTML
    return angularAMD.bootstrap(app);
});