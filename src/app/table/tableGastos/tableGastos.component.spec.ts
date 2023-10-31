import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGastosComponent } from './tableGastos.component';

describe('GastosComponent', () => {
  let component: TableGastosComponent;
  let fixture: ComponentFixture<TableGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableGastosComponent]
    });
    fixture = TestBed.createComponent(TableGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
