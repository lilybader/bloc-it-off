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