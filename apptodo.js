angular.module('TodoApp' , [] )
  .service('todoService',function(){
    var self = this
    self.todos = [
      {title:'One'  ,done: true},
      {title:'Mark' ,done: false}
    ]
     self.list = function(){
       return self.todos
     }
     self.add = function(todo){
     self.todos.push(todo)
     }
  })

  .controller('ListTodoController',function($scope,todoService){
    $scope.newtodos = {
      title: ''
    }
    $scope.todos = todoService.list()
  })

  .controller('AddTodoController',function($scope,todoService){
      $scope.add = function(){
        var todo = {
          title: $scope.title
        }
        todoService.add(todo)
        resetForm()
      }
      function resetForm(){
        $scope.title = '';

      }

});
