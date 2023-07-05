import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todoList: Todo[] = [];
  inputValue: string = "";

  addTask() {
    if (this.inputValue.trim() !== "") {
      const newTask: Todo = {
        name: this.inputValue,
        done: false
      };

      this.todoList.push(newTask);
    }
    this.inputValue = "";
  }
}

interface Todo {
  name: string,
  done: boolean,
}