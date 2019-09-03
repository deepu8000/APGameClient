import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteruiComponent } from './registerui.component';

describe('RegisteruiComponent', () => {
  let component: RegisteruiComponent;
  let fixture: ComponentFixture<RegisteruiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteruiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteruiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
