import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseBillsComponent } from './house-bills.component';

describe('HouseBillsComponent', () => {
  let component: HouseBillsComponent;
  let fixture: ComponentFixture<HouseBillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseBillsComponent]
    });
    fixture = TestBed.createComponent(HouseBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
