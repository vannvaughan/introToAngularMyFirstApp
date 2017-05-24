angular.module("app").controller("myCtrl", function($scope){
  $scope.todos = ["Build a todo app", "Make that app capable of displaying todos", "Add new Todos", "Cross Todos out when complete", "Delete them forever"];

  $scope.addNewTodo = function(newTodo){
    $scope.todos.unshift(newTodo);
    $scope.newTodo = ""
  }

  $scope.removeTodo = function(todo){
    for (var i = 0; i < $scope.todos.length; i++) {
      if ($scope.todos[i] === todo) {
        $scope.todos.splice(i, 1);
      }
    }
  }
})
