import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { TaskManagerComponent } from './manager/manager.component';
import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [
    TodoComponent,
    TaskManagerComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [TodoComponent],
})
export class TodoModule {
}
