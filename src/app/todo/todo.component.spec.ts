import { Component, EventEmitter, Input, Output } from '@angular/core';
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

@Component({
  selector: 'app-list',
  template: '',
})
class ListComponent {
  @Input() todos: Todo[];
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
        ListComponent,
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
  it('should render todo manager component', async(() => {
    expect(compiled.querySelector('app-manager')).toBeTruthy();
  }));
  it('should render todo list component', async(() => {
    expect(compiled.querySelector('app-list')).toBeTruthy();
  }));
  describe('when component has todos', () => {
    let todos: Todo[];

    it('should pass todos to list component', async(() => {
      const list: ListComponent = fixture.debugElement.query(By.css('app-list')).componentInstance;
      todos = [new Todo('Some Person', 'some Task')];
      component.todos = todos;

      fixture.detectChanges();

      expect(list.todos).toEqual(todos);
    }));
  });
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
