(function(angular){
    'use strict';
    var module = angular.module('MovieSelector.event',['ngRoute']);
    module.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/event',{
            controller: 'eventController',
            templateUrl: '/event/view.html'
        });
    }]);
    module.controller('eventController',['$scope',function($scope){

    }]);
})(angular);