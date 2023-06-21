import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @ViewChild("todoInput") todoInput: ElementRef | undefined;
  listNewTodos: Todo[] = [];

  addTodo() {
    const newTodo: Todo = {
      name: this.todoInput?.nativeElement.value,
      done: true
    };

    this.listNewTodos.push(newTodo);

    //TODO delete value inside input field

  }
}

export interface Todo {
  name: string,
  done: boolean
}
