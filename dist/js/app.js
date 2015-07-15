(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
app = angular.module('BlocItOff', ['ui.router', 'firebase'])

app.config(['$locationProvider', '$stateProvider', function($locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: "templates/home.html"
      });

      $stateProvider
      .state('tasks', {
        url: '/tasks',
        controller: 'taskController',
        templateUrl: "templates/currentTasks.html"
      });


      $stateProvider
      .state('history', {
        url: '/history',
        controller: 'taskHistoryController',
        templateUrl: "templates/taskHistory.html"
      });
  }]);

app.controller('taskController', ['$scope', function ($scope) {


}]);

app.controller('taskController', ['$scope', function ($scope) {


}]);





},{}]},{},[1]);