var app = angular.module('reviewApp',[]);

app.controller('MyController',['$scope',function($scope) {
    // $scope.name = "Abc Xyz";
    // $scope.age = 25;

    // $scope.fname ="AB";
    // $scope.lname = "CD";
    // $scope.fullName = function() {
    //     return $scope.fname+ " "+$scope.lname;
    // };
    // $scope.isSpy = true;
    // $scope.codeName = "X";

    // $scope.emps = [
    //     {
    //         fname:'adfuhywx',
    //         lname:'zsdhcu',
    //         sal:2000
    //     },
    //     {
    //         fname:'bfjhhxbj',
    //         lname:'ywbchsdb',
    //         sal:210
    //     },
    //     {
    //         fname:'cghgbxdhdasgyh',
    //         lname:'xcnjsdh',
    //         sal:250
    //     }
    // ]

    // $scope.count1 = 0;
    // $scope.count2 = 0;
    // $scope.show = true;
    // $scope.toggleShow = function() {
    //     $scope.show = !$scope.show;
    // };

    $scope.reviews =[
        {
            comment:'Good',
            by:'x'
        },
        {
            comment:'better',
            by:'y'
        }
    ]

    $scope.form = {};
    $scope.addReview = function() {
        $scope.reviews.push($scope.form);
        $scope.form = {};
    };

}]);

app.directive('userInform',function(){
    return {
        restrict:'A',
        templateUrl : 'userInfo.html'
    };
});