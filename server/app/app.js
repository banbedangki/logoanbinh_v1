'use strict';

var app = angular.module("datamodel", ["ngRoute"]);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider) {
    $routeProvider
    // Index
       /* .when('/getlistGioithieu', {
            templateUrl: '/static/templates/HomePage/include/GioiThieu.html'
        })

         .when('/getlstMautk', {
            templateUrl: '/static/templates/HomePage/include/CacMauThietKe.html'
        })*/


         // removed other routes ... *snip
        .otherwise({
            redirectTo: '/'
        });
}]);