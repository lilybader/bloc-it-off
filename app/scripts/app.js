var blocItOff = angular.module('blocItOff', ['ui.router']);
        
blocItOff.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('currentTasks', {
            url:'/currentTasks',
            templateURL:'templates/partial/currentTasks.html'
        })

        .state('taskHistory', {
            url:'/taskHistory',
            template:'<div>This is a page</div>'
        }); 

       $urlRouterProvider.otherwise('/');
});