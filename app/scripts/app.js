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
    $scope.task = [
        {'title': "Build a Task Manager", 'done':false}
    ];

    $scope.addTask = function() {
        $scope.task.push({'title':$scope.newTask, 'done':false})
        $scope.newTask = ''
    }
    $scope.clearCompleted = function() {
        $scope.task = $scope.task.filter(function(item){
            return !item.done
        })
    }
}]);

app.controller('taskHistoryController', ['$scope', function ($scope) {
    

}]);




