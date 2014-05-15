'use strict';

/* Controllers */
function IndexCtrl($scope, $http, $routeParams) {
    $http.get('/app/api/user.json').success(function(data) {
        $scope.user = data;
    });
    
}