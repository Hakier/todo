import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoModule } from './todo/todo.module';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToolbarModule,
    TodoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
