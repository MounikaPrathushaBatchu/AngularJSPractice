var app = angular  
                .module("myModule",[])
                .controller("myController",function($scope) {
                    var employees = [
                        { name : "Ben", gender : "Male", salary : 5500.78, city:"London" },
                         { name : "Sara", gender : "Female", salary : 5800.12, city:"Chennai" },
                         { name : "Mark", gender : "Male", salary : 6500.38, city:"Hyderabad" },
                         { name : "Pam", gender : "Female", salary : 5500.786, city:"Mumbai" },
                         { name : "Todd", gender : "Male", salary : 6200.41, city:"London" }
                    ];
                    $scope.employees = employees;
                    $scope.empView = 'EmployeeTable.html';
                });