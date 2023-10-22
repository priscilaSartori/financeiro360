import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPurchasesComponent } from './cash-purchases.component';

describe('CashPurchasesComponent', () => {
  let component: CashPurchasesComponent;
  let fixture: ComponentFixture<CashPurchasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashPurchasesComponent]
    });
    fixture = TestBed.createComponent(CashPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
