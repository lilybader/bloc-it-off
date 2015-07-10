var blocItOff = angular.module('blocItOff', ['ui-router']);
        
blocItOff.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('currentTasks', {
            url:'/currentTasks',
            template:'<div>This my active tasks</div>'
        })

        .state('taskHistory', {
            url:'/taskHistory',
            template:'<div>This is my history page</div>'
        }); 

       $urlRouterProvider.otherwise('/');
});