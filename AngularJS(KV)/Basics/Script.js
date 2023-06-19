//Creating Module and Controller
// var myApp = angular.module("myModule",[]);

// // var myController = function ($scope) {
// //     $scope.message = "AngularJS by Annonymous Function";
// // };
// // myApp.controller("myController",myController);

// myApp.controller("myController",function ($scope) {
//     $scope.message = "AngularJS by Inline Function";

//     var emp = {
//         fName : "Abc",
//         lName : "Xyz",
//         age : 25
//     };
//     $scope.employee = emp;

// });


// Another way of creating module and controller
// var myApp = angular
//                 .module("myModule",[])
//                 .controller("myController",function ($scope) {
//                     $scope.message = "AngularJS by Inline Function";

//                     var emp = {
//                         fName : "Syena",
//                         lName : "Infosoft",
//                         age : 25
//                     };
//                     $scope.employee = emp;

//                 });

// using for image display
// var myApp = angular
//                 .module("myModule",[])
//                 .controller("myController", function ($scope) {
//                     var countryDetails = {
//                         name : "India",
//                         capital : "Delhi",
//                         flag :"images/flag.jpg"
//                     };
//                     $scope.countryDetails = countryDetails;
//                 });

//two-way DataBinding
// var myApp = angular
//     .module("myModule", [])
//     .controller("myController", function ($scope) {
//         // $scope.message = "Angular Js!.....";

//         // var employee = {
//         //     firstName : "Syena",
//         //     lastName : "Infosoft",
//         //     age : 25,
//         //     salary : 2500
//         // };
//         // $scope.employee = employee;

//         // var employees = [
//         //     {
//         //         firstName : "Syena1",
//         //         lastName : "Infosoft1",
//         //         age : 24,
//         //         salary : 2600
//         //     },
//         //     {
//         //         firstName : "Syena2",
//         //         lastName : "Infosoft2",
//         //         age : 22,
//         //         salary : 2400
//         //     },
//         //     {
//         //         firstName : "Syena3",
//         //         lastName : "Infosoft3",
//         //         age : 23,
//         //         salary : 2100
//         //     },
//         //     {
//         //         firstName : "Syena4",
//         //         lastName : "Infosoft4",
//         //         age : 23,
//         //         salary : 2200
//         //     },
//         //     {
//         //         firstName : "Syena5",
//         //         lastName : "Infosoft5",
//         //         age : 25,
//         //         salary : 2500
//         //     }
//         // ];
//         // $scope.employees = employees;

//         // var countries = [
//         //     {
//         //         name :"UK",
//         //         cities : [
//         //             { name : "London" },
//         //             { name : "Manchester" },
//         //             { name : "Birmingham" }
//         //         ]
//         //     },
//         //     {
//         //         name :"USA",
//         //         cities : [
//         //             { name : "Los Angeles" },
//         //             { name : "Chicago" },
//         //             { name : "Houston" }
//         //         ]
//         //     },
//         //     {
//         //         name :"INDIA",
//         //         cities : [
//         //             { name : "Hyderabad" },
//         //             { name : "Chennai" },
//         //             { name : "Mumbai" }
//         //         ]
//         //     }
//         // ];
//         // $scope.countries = countries;

//         // var technologies = [
//         //     { name: "Java", likes: 0, dislikes: 0 },
//         //     { name: "Struts", likes: 0, dislikes: 0 },
//         //     { name: "Oracle", likes: 0, dislikes: 0 },
//         //     { name: "Angular JS", likes: 0, dislikes: 0 }
//         // ]
//         // $scope.technologies = technologies;

//         // $scope.incrementLikes = function (technology) {
//         //     technology.likes++;
//         // }
//         // $scope.incrementDisLikes = function (technology) {
//         //     technology.dislikes++;
//         // }



//     });

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        $scope.transformString = function (input) {
            if (!input) {
                return input;
            }

            var output = "";

            for (var i = 0; i < input.length; i++) {
                if (i > 0 && input[i] == input[i].toUpperCase()) {
                    output = output + " ";
                }
                output = output + input[i];
            }
            $scope.output = output;
        }
    });