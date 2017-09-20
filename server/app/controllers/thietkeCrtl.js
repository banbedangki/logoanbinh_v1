'use strict';

app.controller('thietkeCtrl', ['$scope', '$window', '$http', function($scope, $window, $http){
  
    function laydsThietke(){
        $http.get('api/laydsThietke').then(function(res){
            $scope.design = res.data;
            console.log(data);
        });
    };
    laydsThietke();
}]);