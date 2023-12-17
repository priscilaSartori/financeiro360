import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinancesService {
  private comprasParceladas: { 
    id: number, 
    descricao: string, 
    valor: number, 
    parcelas: number, 
    categoria: string, 
    meses: string[] 
  }[] = [];
  private comprasParceladas1: {}[] = []

  itemsDespesa: { 
    id: number, 
    categoria: string, 
    descricao: string, 
    valor: number, 
    vencimento: string,
  }[] = [];
  private itemsDespesa1: {}[] = []
  
  itemsReceita: {
    id: number, 
    descricao: string, 
    valor: number, 
    data: string,
  }[] = [];
  private itemsReceita1: {}[] = []

  itemsGastos: {
    id: number, 
    data: string, 
    descricao: string, 
    formaPagamento: string, 
    valor: number, 
    categoria: string
  }[] = [];
  private itemsGastos1: {}[] = []

  itemsInvestimento: {
    id: number,
    ativo: string;
    produto: string;
    transacao: string;
    corretora: string;
    data: string;
    quantidade: number;
    preco: number;
    valor: number;
  }[] = [];
  private itemsInvestimento1: {}[] = []

  itensMeta: {
    id: number,
    meta: string;
    prazo: string;
    status: string;
  }[] = [];
  private itensMeta1: {}[] = []

  private receitasSubject = new Subject<object[]>();

  getItemReceitaObservable() {
    return this.receitasSubject.asObservable();
  }

  getItemReceita() {
    this.itemsReceita1 = JSON.parse(localStorage.getItem('receitas')!);
    return this.itemsReceita1;
  }
  
  addItemReceita(compra: any) {
    this.itemsReceita = JSON.parse(localStorage.getItem('receitas') || '[]');
    this.itemsReceita.push(compra);
    localStorage.setItem('receitas', JSON.stringify(this.itemsReceita));
    this.receitasSubject.next(this.itemsReceita);
  }

  removeItemReceita(index: any) {
    this.comprasParceladas = JSON.parse(localStorage.getItem('receitas') || '[]');
    this.itemsReceita.splice(index, 1);
    localStorage.setItem('receitas', JSON.stringify(this.itemsReceita));
  }

  private despesaSubject = new Subject<object[]>();

  getItemDespesaObservable() {
    return this.despesaSubject.asObservable();
  }

  getItemDespesa() {
    this.itemsDespesa1 = JSON.parse(localStorage.getItem('despesas')!);
    return this.itemsDespesa1;
  }
  
  addItemDespesa(compra: any) {
    this.itemsDespesa = JSON.parse(localStorage.getItem('despesas') || '[]');
    this.itemsDespesa.push(compra);
    localStorage.setItem('despesas', JSON.stringify(this.itemsDespesa));
    this.despesaSubject.next(this.itemsDespesa);
  }

  removeItemDespesa(index: any) {
    this.comprasParceladas = JSON.parse(localStorage.getItem('despesas') || '[]');
    this.itemsDespesa.splice(index, 1);
    localStorage.setItem('despesas', JSON.stringify(this.itemsDespesa));
  }

  private comprasSubject = new Subject<object[]>();

  getItemComprasObservable() {
    return this.comprasSubject.asObservable();
  }

  getComprasParceladas() {
    this.comprasParceladas1 = JSON.parse(localStorage.getItem('comprasParceladas')!);
    return this.comprasParceladas1;
  }
  
  addCompraParcelada(compra: any) {
    this.comprasParceladas = JSON.parse(localStorage.getItem('comprasParceladas') || '[]');
    this.comprasParceladas.push(compra);
    localStorage.setItem('comprasParceladas', JSON.stringify(this.comprasParceladas));
    this.comprasSubject.next(this.comprasParceladas);
  }

  removeCompraParcelada(index: any) {
    this.comprasParceladas = JSON.parse(localStorage.getItem('comprasParceladas') || '[]');
    this.comprasParceladas.splice(index, 1);
    localStorage.setItem('comprasParceladas', JSON.stringify(this.comprasParceladas));
  }

  getItemGastos(): any[] {
    const gastos = localStorage.getItem('gastos');
    return gastos ? JSON.parse(gastos) : [];
  }
  
  addItemGastos(gasto: any) {
    this.comprasParceladas = JSON.parse(localStorage.getItem('gastos') || '[]');
    this.itemsGastos.push(gasto);
    localStorage.setItem('gastos', JSON.stringify(this.itemsGastos));
  }

  removeItemGastos(index: any) {
    this.comprasParceladas = JSON.parse(localStorage.getItem('gastos') || '[]');
    this.itemsGastos.splice(index, 1);
    localStorage.setItem('gastos', JSON.stringify(this.itemsGastos));
  }

  getItemInvestimento() {
    this.itemsInvestimento1 = JSON.parse(localStorage.getItem('investimento') || '[]');
    return this.itemsInvestimento1;
  }

  addItemInvestimento(compra: any) {
    this.itemsInvestimento = JSON.parse(localStorage.getItem('investimento') || '[]');
    this.itemsInvestimento.push(compra);
    localStorage.setItem('investimento', JSON.stringify(this.itemsInvestimento));
  }

  removeItemInvestimento(index: any) {
    this.itemsInvestimento = JSON.parse(localStorage.getItem('investimento') || '[]');
    this.itemsInvestimento.splice(index, 1);
    localStorage.setItem('investimento', JSON.stringify(this.itemsInvestimento));
  }

  getItemMeta() {
    this.itensMeta1 = JSON.parse(localStorage.getItem('meta') || '[]');
    return this.itensMeta1;
  }

  addItemMeta(compra: any) {
    this.itensMeta = JSON.parse(localStorage.getItem('meta') || '[]');
    this.itensMeta.push(compra);
    localStorage.setItem('meta', JSON.stringify(this.itensMeta));
  }

  removeItemMeta(index: any) {
    this.itensMeta = JSON.parse(localStorage.getItem('meta') || '[]');
    this.itensMeta.splice(index, 1);
    localStorage.setItem('meta', JSON.stringify(this.itensMeta));
  }
}
