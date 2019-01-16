import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ToolbarComponent } from './toolbar.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mat-toolbar',
  template: '<ng-content></ng-content>',
})
class MatToolbarComponent {
  @Input() color: string;
}

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let compiled: any;
  const title = 'some title';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent, MatToolbarComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    component.title = title;

    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should set color of 'mat-toolbar' to primary`, () => {
    const matToolbar: MatToolbarComponent = fixture.debugElement.query(By.css('mat-toolbar')).componentInstance;

    expect(matToolbar.color).toEqual('primary');
  });
  it(`should render 'mat-toolbar'`, () => {
    expect(compiled.querySelector('mat-toolbar').textContent).toBe(title);
  });
});
