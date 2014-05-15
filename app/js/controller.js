'use strict';

/* Controllers */
function IndexCtrl($scope, $http, $routeParams) {
    $http.get('/app/api/user.json').success(function(data) {
        $scope.user = data;
    });
    
}

/* Controllers */
function SenhaCtrl($scope, $http, $routeParams) {
    $http.get('/app/api/user.json').success(function(data) {
        $scope.user = data;
        
        
    });
    
    // Metodo ao submeter formulario senha
    $scope.savePassword = function(){
        console.log($scope.password);
        
        var password = $scope.password;
        
        if(password == "abc"){
            // Mock para requisicao com sucesso
            alert("Senha alterada com sucesso!");
        }else {
            // Caso tenha ocorrido erro, um JSON com as informacoes (campo,tipo,mensagem) eh retornado
            // A linha baixo mocka esse retorno
            $http.get('/app/api/error.json').success(function(data) {
                console.log(data);
                console.log("ID", data.id);
                
                $("#" + data.id).addClass("error")
                $("#" + data.id).after(data.msg);
                
//                $scope.user = data;
            });
            $scope.erro = "Ooops"
        }
        
        return false;
    }
    
}