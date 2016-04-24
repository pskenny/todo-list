angular.module('starter.services', [])

.factory('Task', function() {
    var data = {
        tasks: []
    };

    function addTask(title) {
        // Add title to start of array
      data.tasks.unshift({title});
    }

    function removeTask(title) {
        for(i = 0; i < data.tasks.length; i++)
            if(data.tasks[i].title == title)
                data.tasks.splice(i, 1); // Remove element at index i
    }

    function deleteAllTasks() {
        data.tasks = [];
    }

    return {
        data: data,
        addTask: addTask,
        removeTask: removeTask,
        deleteAllTasks: deleteAllTasks
    };
});
