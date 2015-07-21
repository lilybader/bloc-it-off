app = angular.module('BlocItOff', ['ui.router', 'firebase'])

app.config(['$locationProvider', '$stateProvider', function($locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: "templates/home.html"
      });

      $stateProvider
      .state('current', {
        url: '/current',
        controller: 'taskController',
        templateUrl: "templates/currentTasks.html"
      });

      $stateProvider
      .state('expired', {
        url: '/expired',
        controller: 'taskExpiredController',
        templateUrl: "templates/expiredTasks.html"
      });

      $stateProvider
      .state('history', {
        url: '/history',
        controller: 'taskHistoryController',
        templateUrl: "templates/taskHistory.html"
      });
  }]);

app.controller('taskController', ['$scope', '$firebase', function ($scope, $firebase) {
    var ref = new Firebase('https://bloc-it-off-timer.firebaseio.com/tasks');
    var sync = $firebase(ref);

    var tasks = sync.$asArray();
    $scope.tasks = tasks;

    $scope.addTask = function(task) {
      $scope.tasks.$add({
        task: task,
        state: "active",
        dateAdded: Firebase.ServerValue.TIMESTAMP
      });
      $scope.newTaskItem = "";
    };

    $scope.completeTask = function(taskId) {
      var task = tasks.$getRecord(taskId);
      task.state = "complete";
      tasks.$save(task);
    };

    $scope.expireTask = function(taskId) {
        var task = tasks.$getRecord(taskId);
        var today = new Date();
        var now = today.getTime();
        var days = 24 * 60 * 60 * 1000 //hours * minutes * seconds * milliseconds
        if (task.state == "active" && (now - task.dateAdded) >= (7 * days)) {
            task.state = "expired";
           tasks.$save(task);
        }
    };
    
}]);

app.controller('taskHistoryController', ['$scope', '$controller', function ($scope,$controller) {
    var ref = new Firebase("https://bloc-it-off-timer.firebaseio.com/tasks");
    var sync = $firebase(ref);

    var tasks = sync.$asArray();
    $scope.tasks = tasks;
}]);

app.controller('taskExpiredController', ['$scope', function ($scope) {
    var ref = new Firebase("https://bloc-it-off-timer.firebaseio.com/tasks");
    var sync = $firebase(ref);

    var tasks = sync.$asArray();
    $scope.tasks = tasks;
}]);




