var app = angular.module("App", ['ngRoute', 'ngStorage'])
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'partials/login.html',
            controller: 'userCtrl'
        })
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'questionCtrl'
        })
        .when('/new_question/', {
            templateUrl: 'partials/new_question.html',
            controller: 'questionCtrl'
        })
        .when('/question/:id', {
            templateUrl: 'partials/question.html',
            controller: 'answerCtrl'
        })
        .when('/question/:id/new_answer', {
            templateUrl: 'partials/new_answer.html',
            controller: 'answerCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })                                                                
})