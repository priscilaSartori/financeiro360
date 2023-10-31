import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlanningComponent } from './form-planning.component';

describe('FormPlanningComponent', () => {
  let component: FormPlanningComponent;
  let fixture: ComponentFixture<FormPlanningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPlanningComponent]
    });
    fixture = TestBed.createComponent(FormPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
