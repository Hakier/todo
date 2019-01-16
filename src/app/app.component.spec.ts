import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-toolbar',
  template: '{{ title }}',
})
class ToolbarComponent {
  @Input() title: string;
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponent,
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
  });
  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));
  it(`should have as title 'TODO'`, async(() => {
    expect(component.title).toEqual('TODO');
  }));
  it('should render toolbar component', async(() => {
    expect(compiled.querySelector('app-toolbar').textContent).toContain('TODO');
  }));
});
