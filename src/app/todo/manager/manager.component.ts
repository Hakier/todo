import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent {
  @Output() created = new EventEmitter();

  todoForm = this.fb.group({
    person: ['', Validators.required],
    task: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  create(): void {
    this.created.emit(this.todoForm.value);
  }
}

