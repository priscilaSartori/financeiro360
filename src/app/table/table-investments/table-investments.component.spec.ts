import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInvestmentsComponent } from './table-investments.component';

describe('TableInvestmentsComponent', () => {
  let component: TableInvestmentsComponent;
  let fixture: ComponentFixture<TableInvestmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableInvestmentsComponent]
    });
    fixture = TestBed.createComponent(TableInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
