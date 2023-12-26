import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IInvestimento } from '../interfaces/IFinancesServices';

@Injectable({
  providedIn: 'root'
})
export class InvestimentosService {
  investimento: IInvestimento[] = [];
  produtosTotais: Map<string, number> = new Map<string, number>();

  constructor() {}

  private investimentosSubject = new Subject<object[]>();
  
  getObservableInvestimentos() {
    return this.investimentosSubject.asObservable();
  }
  
  getItemInvestimento() {
    this.investimento = JSON.parse(localStorage.getItem('investimento') || '[]');
    this.produtosTotais = new Map(JSON.parse(localStorage.getItem('produtosTotais') || '[]'));
  return this.investimento;
  }

  getProdutosTotais(): Map<string, number> {
    return this.produtosTotais;
  }
  
  getTotalInvestmentValue(): number {
    return this.investimento.reduce((total, investimento) => total + investimento.valor, 0);
  }

  addItemInvestimento(compra: IInvestimento) {
    this.investimento = JSON.parse(localStorage.getItem('investimento') || '[]');
    this.investimento.push(compra);

    const totalProduto = this.produtosTotais.get(compra.produto) || 0;
    if (compra.transacao === 'compra') {
      this.produtosTotais.set(compra.produto, totalProduto + compra.valor);
    } else if (compra.transacao === 'venda') {
      this.produtosTotais.set(compra.produto, totalProduto - compra.valor);
    }
    
    localStorage.setItem('investimento', JSON.stringify(this.investimento));
    localStorage.setItem('produtosTotais', JSON.stringify(Array.from(this.produtosTotais.entries())));

    this.investimentosSubject.next(this.investimento);
  }

  removeItemInvestimento(index: any) {
    this.investimento = JSON.parse(localStorage.getItem('investimento') || '[]');

    const removedItem = this.investimento[index];
    const totalProduto = this.produtosTotais.get(removedItem.produto) || 0;
    if (removedItem.transacao === 'compra') {
      this.produtosTotais.set(removedItem.produto, totalProduto - removedItem.valor);
    } else if (removedItem.transacao === 'venda') {
      this.produtosTotais.set(removedItem.produto, totalProduto + removedItem.valor);
    }
    
    this.investimento.splice(index, 1);
    localStorage.setItem('investimento', JSON.stringify(this.investimento));
    this.investimentosSubject.next(this.investimento);
  }
}
