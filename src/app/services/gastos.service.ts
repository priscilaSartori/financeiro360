import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';
import { IProdutos } from '../interfaces/IProdutos';
import { IGastos } from '../interfaces/IFinancesServices';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  gastos: IGastos[] = [];

  constructor() { };

  private gastosSubject = new Subject<object[]>();

  getObservableGastos() {
    return this.gastosSubject.asObservable();
  }

  getItemGastos(): any[] {
    const gastos = localStorage.getItem('gastos');
    return gastos ? JSON.parse(gastos) : [];
  }
  
  addItemGastos(gasto: IGastos) {
    this.gastos = JSON.parse(localStorage.getItem('gastos') || '[]');
    this.gastos.push(gasto);
    localStorage.setItem('gastos', JSON.stringify(this.gastos));
    this.gastosSubject.next(this.gastos);
  }

  removeItemGastos(index: any) {
    this.gastos = JSON.parse(localStorage.getItem('gastos') || '[]');
    this.gastos.splice(index, 1);
    localStorage.setItem('gastos', JSON.stringify(this.gastos));
    this.gastosSubject.next(this.gastos);
  }
}
