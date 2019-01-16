import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TaskManagerComponent } from './manager.component';

describe('TaskManagerComponent', () => {
  let component: TaskManagerComponent;
  let fixture: ComponentFixture<TaskManagerComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskManagerComponent,
      ],
      imports: [
        NoopAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagerComponent);
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
  it('should render task input', async(() => {
    expect(compiled.querySelector('mat-form-field input.task[matInput]')).toBeTruthy();
  }));
  it('should set placeholder on task input', async(() => {
    expect(compiled.querySelector('mat-form-field input.task[placeholder=Task]')).toBeTruthy();
  }));
  it('should render add button', async(() => {
    expect(compiled.querySelector('button.add[mat-icon-button]')).toBeTruthy();
    expect(compiled.querySelector('.add mat-icon[aria-label=Add]').textContent).toEqual('add_box');
  }));
});
