import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDespesasComponent } from './tableDespesas.component';

describe('DespesasComponent', () => {
  let component: TableDespesasComponent;
  let fixture: ComponentFixture<TableDespesasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDespesasComponent]
    });
    fixture = TestBed.createComponent(TableDespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
