/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  todoArray = [];

  add(todo){
    this.todoArray.push(todo);
  }

  remove(index){
    if (index >= 0 && this.todoArray.length > 0){
      this.todoArray.splice(index, 1);
    }
  }

  update(index, updatedTodo){
    if(index >= 0 && this.todoArray.length > 0 && this.todoArray.length > index){
      this.remove(index);
      // this.todoArray.splice(index, 1, updatedTodo);
      this.todoArray.splice(index, 0, updatedTodo);
    }
  }

  getAll(){
    return this.todoArray;
  }

  get(indexOfTodo){
    if(indexOfTodo >= 0 && this.todoArray.length > 0 && this.todoArray.length > indexOfTodo){
      return this.todoArray[indexOfTodo];
    }
    return null;
    
  }

  clear(){
    this.todoArray.length = 0;
  }

}

// let todoList = new Todo();

// todoList.add('Task 1');
// todoList.add('Task 2');
// todoList.add('Task 3');

// let allTasks = todoList.getAll();
// console.log(allTasks);

//REMOVE
// todoList.remove(1);
// console.log(allTasks);

// todoList.remove(0);
// console.log(allTasks);

// todoList.remove(2);
// console.log(allTasks);

//UPDATE
// todoList.update(1, 'Updated Task 2');
// console.log(allTasks);

// todoList.update(3, 'Invalid Task')
// console.log(allTasks);

//GET
// console.log(todoList.get(0));

// console.log(todoList.get(2));

// console.log(todoList.get(3));



module.exports = Todo;
