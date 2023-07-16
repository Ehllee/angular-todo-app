import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todoList: Todo[] = [];
  doneList: Todo[] = [];
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

  checkDoneEvent(event: Event, todo: Todo) {
    const inputRef = event.target as HTMLInputElement;
    if (inputRef?.checked) {
      this.todoList = this.todoList.filter(x => x !== todo);
      this.doneList.push(todo);
    }
  }

  // undoneTask(undoneTodo: Todo) {
  //   this.todoList.push(undoneTodo);
  // }
}

export interface Todo {
  name: string,
  done: boolean,
}