(function (angular) {
    'use strict';
    var module = angular.module('MovieSelector', ['ngRoute', 'MovieSelector.movieList','MovieSelector.event' ]);
    module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/movieList'
        });
    }]);
})(angular);