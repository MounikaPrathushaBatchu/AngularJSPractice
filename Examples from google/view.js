var myView = angular.module("myView", ['ngRoute']);
myView.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        // when condition is not working
        .when('/addStudent', {
            templateUrl: 'addStudent.html',
            controller: 'AddStudentController'
        })
        .when('/viewStudents', {
            templateUrl: 'viewStudent.html',
            controller: 'ViewStudentController'
        })
        .otherwise({
            redirectTo: '/addStudent'
        });
}]);
myView.controller('AddStudentController', function ($scope) {
    $scope.message = "This is Add Student page"
});
myView.controller('ViewStudentController', function ($scope) {
    $scope.message = "This is View Student page"
});