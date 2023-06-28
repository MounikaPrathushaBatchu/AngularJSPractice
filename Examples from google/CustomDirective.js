var app = angular.module("test", []);
app.controller("parentController", function ($scope) {
    $scope.name = "Hitesh";
});
app.directive("directiveWithTrueScope", function () {
    return {
        restrict: "A",
        scope: true,
        template: "<div>Your name is : {{name}}</div>" +
            "Change your name : <input type='text' ng-model='name' />"
    };
});

var app = angular.module("app", []);
app.controller("MainCtrl", function ($scope) {
    $scope.name = "Hitesh";
    $scope.lastName = "Jariwala";
});
app.directive("myDirective", function () {
    return {
        restrict: "EA",
        scope: {
            name: "@",
            lastName: "="
        },
        template: [
            "<div class='line'>",
            "Name using @ : <input type='text' ng-model='name' /><br/>",
            "</div><div class='line'>",
            "Last name using =: <input type='text' ng-model='lastName' /><br/></div>"].join("")
    };
});