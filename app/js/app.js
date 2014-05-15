'use strict';

/* App Module */

/* App Module */

var app = angular.module('pandox',  ['ngRoute']);
app.run(function($rootScope, $templateCache, $http) {
    $rootScope.$on('$viewContentLoaded', function() {
        $templateCache.removeAll();
    });
    
    $http.get('/config/config.json').success(function(data) {
        console.log(data);
        $rootScope.config = data;
    });
});

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: '/app/views/main.html',   controller: IndexCtrl}).
            // when('/busca', {templateUrl: '/app/partials/lista.html',   controller: ListaCtrl}).
            when('/senha', {templateUrl: '/app/views/senha.html',   controller: SenhaCtrl}).
            // when('/cadastrar', {templateUrl: '/app/partials/cadastrar.html',   controller: UserCtrl}).
            // when('/login', {templateUrl: '/app/partials/login.html',   controller: LoginCtrl}).
            // when('/logout', {templateUrl: '/app/partials/index.html',   controller: LogoutCtrl}).
            // when('/admin', {templateUrl: '/app/partials/admin/admin.html', controller: AdminCtrl}).
            // when('/loja/:name', {templateUrl: '/app/partials/userPage.html', controller: UserPageCtrl}).
            otherwise({redirectTo: '/'});
}]);
