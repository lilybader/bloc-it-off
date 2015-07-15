(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var blocItOff = angular.module('blocItOff', ['ui.router', 'firebase']);
        
blocItOff.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('currentTasks', {
            url:'/currentTasks',
            templateURL:'templates/currentTasks.html'
            // controller:'currentTasksController'
        })

        .state('taskHistory', {
            url:'/taskHistory',
            template:'templates/taskHistory.html'
        }); 

       $urlRouterProvider.otherwise('/');
});

// blocItOff.controller('currentTasksController', ['$scope', function($scope) 
// {
//        $scope.tasks = [
//             {'title':'Make a Task', 'done':false}
//        ];

//        $scope.addTask = function(){
//             $scope.tasks.push({'title':$scope.newTask, 'done':false})
//             $scope.newTask = ''
//        }
//        $scope.clearCompleted = function(){
//             $scope.tasks = $scope.tasks.filter(function(item){
//                 return !item.done
//             })

//        }
// }]);
},{}]},{},[1]);