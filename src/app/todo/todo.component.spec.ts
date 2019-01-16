import { Component, EventEmitter, Output } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Todo } from './models/todo';
import { TodoComponent } from './todo.component';

@Component({
  selector: 'app-manager',
  template: '',
})
class ManagerComponent {
  @Output() created = new EventEmitter();
}

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoComponent,
        ManagerComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render task manager component', async(() => {
    expect(compiled.querySelector('app-manager')).toBeTruthy();
  }));
  describe('when manager emits created', () => {
    it('should add a todo', () => {
      const addSpy = spyOn(component, 'addTodo');
      const todo = new Todo('Some person', 'some task');
      const manager: ManagerComponent = fixture.debugElement.query(By.css('app-manager')).componentInstance;

      manager.created.emit(todo);

      expect(addSpy).toHaveBeenCalledTimes(1);
      expect(addSpy).toHaveBeenCalledWith(todo);
    });
  });
});
