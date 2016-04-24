angular.module('starter.controllers', [])

.controller('TasksCtrl', function($scope, $window, Task) {
    // Load tasks from local storage
    var keys = Object.keys($window.localStorage);
    var i = keys.length;
    var val = {task: ""};

    // Add tasks on start from local storage
    while (i--)
        addInitTask($window.localStorage.getItem(keys[i]));

    function addTask() {
        if(val.task != "") {
            Task.addTask(val.task);
            //Add element to local storage
            $window.localStorage.setItem(val.task, val.task);
        }
        // Set val.task to empty string to clear text field
        val.task = "";
    }

    function addInitTask(title) {
        Task.addTask(title);
        //Don't add to local storage as this method is only called at start up
    }

    function removeTask(title) {
        Task.removeTask(title);
        // Remove element from local storage
        $window.localStorage.removeItem(title);
    }

    $scope.data = Task.data;
    $scope.val = val;
    $scope.addTask = addTask;
    $scope.addInitTask = addInitTask;
    $scope.removeTask = removeTask;
})

.controller('SettingsCtrl', function($scope, $window, Task) {
    function deleteAllTasks() {
        Task.deleteAllTasks();
        $window.localStorage.clear();
    }

    $scope.deleteAllTasks = deleteAllTasks;
})
;
