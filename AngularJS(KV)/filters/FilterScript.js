// var app = angular
//                 .module("myModule",[])
//                 .controller("myController",function($scope){
//                     var employees = [
//                         { name : "Ben",dateOfBirth : new Date("November 23 1980"),gender : "Male",salary : 5500.78 },
//                         { name : "Sara",dateOfBirth : new Date("May 05 1970"),gender : "Female",salary : 5800.12 },
//                         { name : "Mark",dateOfBirth : new Date("August 15 1974"),gender : "Male",salary : 6500.38 },
//                         { name : "Pam",dateOfBirth : new Date("October 27 1979"),gender : "Female",salary : 5500.786 },
//                         { name : "Todd",dateOfBirth : new Date("December 30 1983"),gender : "Male",salary : 6200.41 }
//                     ];
//                     $scope.employees = employees;
//                     // $scope.row_limit = 2;
//                     $scope.sortColumn = "name";
//                     $scope.reverseSort = false;

//                     $scope.sortData = function (column) {
//                         $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
//                         $scope.sortColumn = column;
//                     }

//                     $scope.getSortData = function(column) {
//                         if($scope.sortColumn == column) {
//                             return $scope.reverseSort ? 'arrow-down' :'arrow-up'
//                         }
//                         return '';
//                     }
//                 });

//  for Searching
// var app = angular
//                 .module("myModule",[])
//                 .controller("myController",function($scope){
//                     var employees = [
//                         { name : "Ben", dateOfBirth : new Date("November 23 1980"), gender : "Male", salary : 5500.78, city:"London" },
//                         { name : "Sara", dateOfBirth : new Date("May 05 1970"), gender : "Female", salary : 5800.12, city:"Chennai" },
//                         { name : "Mark", dateOfBirth : new Date("August 15 1974"), gender : "Male", salary : 6500.38, city:"Hyderabad" },
//                         { name : "Pam", dateOfBirth : new Date("October 27 1979"), gender : "Female", salary : 5500.786, city:"Mumbai" },
//                         { name : "Todd", dateOfBirth : new Date("December 30 1983"), gender : "Male", salary : 6200.41, city:"London" }
//                     ];
//                     $scope.employees = employees;
//                 });

// searching based on 2 columns only
// var app = angular
//                 .module("myModule",[])
//                 .controller("myController",function($scope){
//                     var employees = [
//                         { name : "Ben",dateOfBirth : new Date("November 23 1980"),gender : "Male",salary : 5500.78,city:"London" },
//                         { name : "Sara",dateOfBirth : new Date("May 05 1970"),gender : "Female",salary : 5800.12,city:"Chennai" },
//                         { name : "Mark",dateOfBirth : new Date("August 15 1974"),gender : "Male",salary : 6500.38,city:"Hyderabad" },
//                         { name : "Pam",dateOfBirth : new Date("October 27 1979"),gender : "Female",salary : 5500.786,city:"Mumbai" },
//                         { name : "Todd",dateOfBirth : new Date("December 30 1983"),gender : "Male",salary : 6200.41,city:"London" }
//                     ];
//                     $scope.employees = employees;

//                     $scope.search = function(item) {
//                         if($scope.searchText == undefined) {
//                             return true;
//                         } else {
//                             if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 
//                                 || item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
//                                 return true;
//                             }
//                         }
//                         return false;
//                     }
//                 });


// Custom filter
var app = angular
                .module("myModule",[])
                // custom filter
                .filter("gender", function(){
                    return function(gender) {
                        switch(gender){
                            case 1:
                                return "Male";
                            case 2:
                                return "Female";
                            case 3:
                                return "Not Disclosed";
                        }
                    }
                })
                .controller("myController", function($scope) {
                    var employees =[
                        { name:"Ben", city:"Mumbai", gender:1 },
                        { name:"Benten", city:"Chennai", gender:2 },
                        { name:"Adem", city:"Hyd", gender:1 },
                        { name:"Todd", city:"Kolkota", gender:2 },
                        { name:"Sara", city:"Delhi", gender:3 }
                    ];
                    $scope.employees = employees;
                });