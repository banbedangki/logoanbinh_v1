'use strict';

app.controller('demucCtrl', ['$scope', '$window', '$http', function($scope, $window, $http){

	function laytenDemuc(){
		$http.get('api/laytenDemuc').then(function(response){
			console.log(response);
			$scope.ten_demuc = response.data;

		});
	};
	laytenDemuc();
}]);