var demoApp = angular.module("demoApp", [])
                    .controller("demoController", function ($scope,$location,$anchorScroll) {
                        $scope.scrollTo = function(scrollLocation) {
                            $location.hash(scrollLocation); // #fragment to the URL
                            $anchorScroll.yOffset = 20; // for padding in between button and the web page
                            $anchorScroll(); // reads the # fragment in the URL and jumps to that element on the page 
                        }
                    });