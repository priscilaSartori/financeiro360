import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';
import { IProdutos } from '../interfaces/IProdutos';
import { IDespesa } from '../interfaces/IFinancesServices';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {
  despesa: IDespesa[] = [];
  
  constructor() { }

  private despesaSubject = new Subject<object[]>();

  getObservableDespesa() {
    return this.despesaSubject.asObservable();
  }

  getItemDespesa() {
    this.despesa = JSON.parse(localStorage.getItem('despesas')!);
    return this.despesa;
  }
  
  addItemDespesa(compra: IDespesa) {
    this.despesa = JSON.parse(localStorage.getItem('despesas') || '[]');
    this.despesa.push(compra);
    localStorage.setItem('despesas', JSON.stringify(this.despesa));
    this.despesaSubject.next(this.despesa);
  }

  removeItemDespesa(index: any) {
    this.despesa = JSON.parse(localStorage.getItem('despesas') || '[]');
    this.despesa.splice(index, 1);
    localStorage.setItem('despesas', JSON.stringify(this.despesa));
    this.despesaSubject.next(this.despesa);
  }
}
