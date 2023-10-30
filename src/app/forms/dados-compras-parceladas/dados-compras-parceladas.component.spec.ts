import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosComprasParceladasComponent } from './dados-compras-parceladas.component';

describe('DadosComprasParceladasComponent', () => {
  let component: DadosComprasParceladasComponent;
  let fixture: ComponentFixture<DadosComprasParceladasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosComprasParceladasComponent]
    });
    fixture = TestBed.createComponent(DadosComprasParceladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
