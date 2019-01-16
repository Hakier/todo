import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { ManagerComponent } from './manager/manager.component';
import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [
    TodoComponent,
    ManagerComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [TodoComponent],
})
export class TodoModule {
}
