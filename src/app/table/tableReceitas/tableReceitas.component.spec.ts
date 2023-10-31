import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReceitasComponent } from './tableReceitas.component';

describe('ReceitasComponent', () => {
  let component: TableReceitasComponent;
  let fixture: ComponentFixture<TableReceitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableReceitasComponent]
    });
    fixture = TestBed.createComponent(TableReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
