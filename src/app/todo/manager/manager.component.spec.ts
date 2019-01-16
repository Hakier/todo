import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Todo } from '../models/todo';
import { ManagerComponent } from './manager.component';

describe('ManagerComponent', () => {
  let component: ManagerComponent;
  let fixture: ComponentFixture<ManagerComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ManagerComponent,
      ],
      imports: [
        NoopAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render name input', async(() => {
    expect(compiled.querySelector('mat-form-field input.name[matInput]')).toBeTruthy();
  }));
  it('should set placeholder on name input', async(() => {
    expect(compiled.querySelector('mat-form-field input.name[placeholder=Name]')).toBeTruthy();
  }));
  it('should set formControlName on name input', async(() => {
    expect(compiled.querySelector('mat-form-field input.name[formControlName=person]')).toBeTruthy();
  }));
  it('should render task input', async(() => {
    expect(compiled.querySelector('mat-form-field input.task[matInput]')).toBeTruthy();
  }));
  it('should set placeholder on task input', async(() => {
    expect(compiled.querySelector('mat-form-field input.task[placeholder=Task]')).toBeTruthy();
  }));
  it('should set formControlName on task input', async(() => {
    expect(compiled.querySelector('mat-form-field input.task[formControlName=task]')).toBeTruthy();
  }));
  it('should render add button', async(() => {
    expect(compiled.querySelector('button.add[mat-icon-button]')).toBeTruthy();
    expect(compiled.querySelector('.add mat-icon[aria-label=Add]').textContent).toEqual('add_box');
  }));
  describe('when form submitted', () => {
    it('should emit a todo', () => {
      expect(component.todoForm.valid).toBeFalsy();
      component.todoForm.controls['person'].setValue('some person');
      component.todoForm.controls['task'].setValue('some task');
      expect(component.todoForm.valid).toBeTruthy();

      let todo: Todo;
      component.created.subscribe((value: Todo) => (todo = value));

      component.create();

      expect(todo.person).toBe('some person');
      expect(todo.task).toBe('some task');
    });
  });
});
