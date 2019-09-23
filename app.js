const app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider) {

    $routeProvider

        .when('/', {

            templateUrl: 'pages/home.html',
            controller: 'homeController'

        })

        .when('/forecast', {

            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'

        });
});

app.controller('homeController', ['$scope', '$log', function ($scope, $log) {

}]);

app.controller('forecastController', ['$scope', '$log', function ($scope, $log) {

}]);
