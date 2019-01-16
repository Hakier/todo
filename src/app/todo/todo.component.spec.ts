import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoComponent } from './todo.component';

@Component({
  selector: 'app-manager',
  template: '',
})
class ManagerComponent {
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
});
