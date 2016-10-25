
var onboardingPortal = angular.module ("onboardingPortal", ['ngRoute']);

// configure our routes
onboardingPortal.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/login.html',
            controller  : 'loginController'
        })
        .when('/product', {
            templateUrl : 'pages/newHire/home.html',
            controller  : 'newHireHomeController'
        });
});


onboardingPortal.controller ("loginController", function ($scope, $http) {

    $scope.login = function() {
        var url = "/api/v1.0/loginUser";

        $http (
            {
                method: "GET",
                url: url
            }
        ).then (
            function success (response){
                //alert(response.data);
            },
            function fail (response){
                //alert(response);

         });
    };


});

