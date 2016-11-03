var app = angular.module('roverio', []);



app.controller('roverController', function ($scope, $http) {

    $scope.showThis = false;
    $scope.showThis1 = false;
    $scope.submit = function () {



        $http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/" + $scope.rover + "/photos?earth_date=" + $scope.year + "-" + $scope.month + "-" + $scope.day + "&camera=" + $scope.camera + "&api_key=bQA1iWCDiQu6uw8E7OkoosqcZdEbkLjA6H8CeT2j")
            .success(function (data) {
                $scope.roverphoto = data;
                $scope.showThis = true;
                $scope.showThis1 = false;
            })

            .error(function (data, status) {
                console.error('Repos error', data, status);
                $scope.showThis1 = true;
                $scope.showThis = false;


            });


    }
});