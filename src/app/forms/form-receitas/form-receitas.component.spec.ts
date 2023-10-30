import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReceitasComponent } from './form-receitas.component';

describe('FormReceitasComponent', () => {
  let component: FormReceitasComponent;
  let fixture: ComponentFixture<FormReceitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormReceitasComponent]
    });
    fixture = TestBed.createComponent(FormReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
