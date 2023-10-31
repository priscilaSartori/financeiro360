import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInvestmentsComponent } from './form-investments.component';

describe('FormInvestmentsComponent', () => {
  let component: FormInvestmentsComponent;
  let fixture: ComponentFixture<FormInvestmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInvestmentsComponent]
    });
    fixture = TestBed.createComponent(FormInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
