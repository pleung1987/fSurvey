// angular routes is injected into your app as the
// SECOND parameter to angular.module() function
// any additional libraries, such as angular cookies, are injected
// in the same way but separated by commas ['ngRoute', 'ngCookies']
var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: '../partials/login.html',
        controller: 'loginController',
    })
    .when('/dashboard/:success',{
        templateUrl: '../partials/dashboard.html',
        controller: 'dashboardController',
    })
    .when('/dashboard',{
        templateUrl: '../partials/dashboard.html',
        controller: 'dashboardController',
    })
    .when('/question',{
        templateUrl: '../partials/newQuestion.html',
        controller: 'questionController',
    })
    .when('/show/:id',{
        templateUrl: '../partials/show.html',
        controller: 'showController',
    })
    // when someone uses any other route than above, load the following partial
    .otherwise({
        redirectTo: '/'
    });
// Routes to load your new and edit pages with new and edit controllers attached to them!
});
