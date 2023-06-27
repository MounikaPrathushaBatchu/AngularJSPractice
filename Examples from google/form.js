var mainapp = angular.module("mainApp", [])
    .controller("studentController", function ($scope) {
        $scope.reset = function () {
            $scope.firstName = "Mouni";
            $scope.lastName = "A";
            $scope.email = "mounia1@gmail.com"
        }
        $scope.reset();
    });