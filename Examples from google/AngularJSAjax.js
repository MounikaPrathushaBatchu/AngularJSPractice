var myApp = angular.module("moduleAjax", [])
    .controller("myAJAXController", function ($scope,$http) {
        var url = "/data.txt";

        // didn't get data from .txt file
        $http.get(url).then(function(response){
            $scope.employees = response.employees;
        });
    });