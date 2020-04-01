(function(angular){
    'use strict';
    var module = angular.module('MovieSelector.movieList',['ngRoute']);
    module.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/movieList',{
            controller: 'movieListController',
            templateUrl: '/movieList/view.html'
        });
    }]);
    module.controller('movieListController',['$scope',function($scope){

    }]);
})(angular);
