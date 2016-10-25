var app = angular.module('roverio', []);

app.controller('roverController', function ($scope, $http) {
<<<<<<< HEAD

=======
>>>>>>> 9851926d9c452bd5d9858bb3945521bf233876b9
    $scope.showThis = false;
    $scope.submit = function () {



  $http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/" + $scope.rover + "/photos?earth_date=" + $scope.year + "-" + $scope.month + "-" + $scope.day + "&camera=" + $scope.camera + "&api_key=bQA1iWCDiQu6uw8E7OkoosqcZdEbkLjA6H8CeT2j")
        .then(function (response) {
            $scope.roverdata = response.data;
<<<<<<< HEAD
            
             $scope.showThis = true;
=======
            $scope.showThis = true;

>>>>>>> 9851926d9c452bd5d9858bb3945521bf233876b9
        });


    }
});