import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMyInvestmentsComponent } from './table-my-investments.component';

describe('TableMyInvestmentsComponent', () => {
  let component: TableMyInvestmentsComponent;
  let fixture: ComponentFixture<TableMyInvestmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableMyInvestmentsComponent]
    });
    fixture = TestBed.createComponent(TableMyInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
