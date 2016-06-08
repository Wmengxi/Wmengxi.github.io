angular.module("myApp", ['ui.router'])
 
.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
 
     $locationProvider.html5Mode(false);
     
     $urlRouterProvider.otherwise('/menu/home');
 
     $stateProvider
        .state("menu", {
            url: "/menu",
            templateUrl: "templates/menu.html"
        })
        .state("menu.home", {
            url:"/home",
            templateUrl: "templates/home.html"
    
        })
        .state("menu.room", {
            url:"/room",
            templateUrl: "templates/room.html"
    
        })
        .state("menu.country", {
            url:"/country",
            templateUrl: "templates/country.html"
    
        })
        .state("menu.house", {
            url:"/house",
            templateUrl: "templates/house.html"
    
        })
        .state("menu.help", {
            url:"/help",
            templateUrl: "templates/help.html"
    
        })
        .state("menu.housejuti", {
            url:"/housejuti",
            templateUrl: "templates/housejuti.html"
    
        })
        .state("menu.step", {
            url:"/step",
            templateUrl: "templates/step.html"
    
        });
});