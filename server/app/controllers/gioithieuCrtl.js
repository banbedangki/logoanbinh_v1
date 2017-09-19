'use strict';

app.controller('gioithieuCtrl', ['$scope', '$window', '$http', function($scope, $window, $http){
  
    function laydsGioithieu(){
        $http.get('api/layGioithieu').then(function(res){
            $scope.introduce = res.data;
        });
    };
    laydsGioithieu();
}]);