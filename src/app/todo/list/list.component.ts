import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() todos: Todo[];
}
