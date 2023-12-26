import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';
import { IProdutos } from '../interfaces/IProdutos';
import { IReceita } from '../interfaces/IFinancesServices';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {
  receita: IReceita[] = [];
  
  constructor() { }

  private receitasSubject = new Subject<object[]>();

  getObservableReceitas() {
    return this.receitasSubject.asObservable();
  }

  getItemReceita() {
    try {
      this.receita = JSON.parse(localStorage.getItem('receitas') || '[]');
      return this.receita;
    } catch (error) {
      console.error('Erro ao obter receitas do localStorage', error);
      return [];
    }
  }
  
  addItemReceita(compra: IReceita) {
    this.receita = JSON.parse(localStorage.getItem('receitas') || '[]');
    this.receita.push(compra);
    localStorage.setItem('receitas', JSON.stringify(this.receita));
    this.receitasSubject.next(this.receita);
  }

  removeItemReceita(index: any) {
    this.receita = JSON.parse(localStorage.getItem('receitas') || '[]');
    this.receita.splice(index, 1);
    localStorage.setItem('receitas', JSON.stringify(this.receita));
    this.receitasSubject.next(this.receita);
  }
}
