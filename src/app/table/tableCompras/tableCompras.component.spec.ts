import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComprasComponent } from './tableCompras.component';

describe('TableComprasComponent', () => {
  let component: TableComprasComponent;
  let fixture: ComponentFixture<TableComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComprasComponent]
    });
    fixture = TestBed.createComponent(TableComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
