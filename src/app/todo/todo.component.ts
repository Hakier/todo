import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos: Todo[] = [];

  addTodo(todo: Todo): void {
    console.log(`>>> Add todo`, todo);
    this.todos.push(todo);
  }
}
