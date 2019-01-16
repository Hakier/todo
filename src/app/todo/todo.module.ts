import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule } from '@angular/material';
import { ListComponent } from './list/list.component';
import { ManagerComponent } from './manager/manager.component';
import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [
    TodoComponent,
    ManagerComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  exports: [TodoComponent],
})
export class TodoModule {
}
