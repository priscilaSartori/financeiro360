import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';
import { IProdutos } from '../interfaces/IProdutos';
import { ComprasParceladas } from '../interfaces/IFinancesServices';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  comprasParceladas: ComprasParceladas[] = [];
  
  constructor() { }

  private comprasSubject = new Subject<object[]>();

  getObservableCompras() {
    return this.comprasSubject.asObservable();
  }

  getComprasParceladas() {
    this.comprasParceladas = JSON.parse(localStorage.getItem('comprasParceladas')!);
    return this.comprasParceladas;
  }
  
  addCompraParcelada(compra: ComprasParceladas) {
    this.comprasParceladas = JSON.parse(localStorage.getItem('comprasParceladas') || '[]');
    this.comprasParceladas.push(compra);
    localStorage.setItem('comprasParceladas', JSON.stringify(this.comprasParceladas));
    this.comprasSubject.next(this.comprasParceladas);
  }

  removeCompraParcelada(index: any) {
    this.comprasParceladas = JSON.parse(localStorage.getItem('comprasParceladas') || '[]');
    this.comprasParceladas.splice(index, 1);
    localStorage.setItem('comprasParceladas', JSON.stringify(this.comprasParceladas));
    this.comprasSubject.next(this.comprasParceladas);
  }
}
