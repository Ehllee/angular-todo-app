import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo-list.component';

@Component({
  selector: 'app-done-todo-list',
  templateUrl: './done-todo-list.component.html',
  styleUrls: ['./done-todo-list.component.scss']
})
export class DoneTodoListComponent {
  @Input() doneTodoList: Todo[] = [];
  // @Output() eventUndoneList = new EventEmitter<Todo[]>();
  // @Output() eventUndoneTask = new EventEmitter<Todo>();

  // checkUndoneEvent(event: Event, doneTodo: Todo) {
  //   const inputRef = event.target as HTMLInputElement;
  //   if (!inputRef?.checked) {
  //     this.doneTodoList = this.doneTodoList.filter(x => x !== doneTodo);
  //     this.eventUndoneTask.emit(doneTodo);
  //   }
  // }
}
