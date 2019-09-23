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

app.service('nameService', function () {

    let self = this;
    self.city = 'London';


});

app.controller('homeController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {

    $scope.cityName = nameService.city;
    $scope.$watch('cityName', function () {
        nameService.city = $scope.cityName;
    });

}]);

app.controller('forecastController', ['$scope', '$log', 'nameService', '$resource', function ($scope, $log, nameService, $resource) {

    $scope.cityName = nameService.city;

    $scope.weatherAPI = $resource('https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1');

    $scope.result = $scope.weatherAPI.get();

    console.log($scope.result);

}]);
