// Services
// var mainApp = angular.module("mainApp", []);

// mainApp.factory('MathService', function () {
//     var factory = {};

//     factory.multiply = function (a, b) {
//         return a * b
//     }
//     return factory;
// });

// mainApp.service('CalcService', function (MathService) {
//     this.square = function (a) {
//         return MathService.multiply(a, a);
//     }
// });

// mainApp.controller('CalcController', function ($scope, CalcService) {
//     $scope.square = function () {
//         $scope.resultOne = CalcService.square($scope.number);
//     }
// });
// mainApp.controller('MathController', function ($scope, MathService) {
//     $scope.multiply = function (a, b) {
//         $scope.resultTwo = MathService.multiply($scope.number1, $scope.number2)
//     }
// });


// Dependency Injection
var mainApp = angular.module("mainApp", []);

mainApp.config(function ($provide) {
    $provide.provider('MathService', function () {
        this.$get = function () {
            var factory = {};

            factory.multiply = function (a, b) {
                return a * b;
            }
            return factory;
        };
    });
});

mainApp.value("defaultInput", 5);

mainApp.factory('MathService', function () {
    var factory = {};

    factory.multiply = function (a, b) {
        return a * b;
    }
    return factory;
});

mainApp.service('CalcService', function (MathService) {
    this.square = function (a) {
        return MathService.multiply(a, a);
    }
});

mainApp.controller('CalcController', function ($scope, CalcService, defaultInput) {
    $scope.number = defaultInput;
    $scope.result = CalcService.square($scope.number);

    $scope.square = function () {
        $scope.resultOne = CalcService.square($scope.number);
    }
});

mainApp.controller('MathController', function ($scope, MathService) {
    $scope.multiply = function (a, b) {
        $scope.resultTwo = MathService.multiply($scope.number1, $scope.number2)
    }
});