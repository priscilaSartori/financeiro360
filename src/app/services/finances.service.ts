import { Injectable } from '@angular/core';

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

  getComprasParceladas() {
    this.comprasParceladas1 = JSON.parse(localStorage.getItem('comprasParceladas')!);
    return this.comprasParceladas1;
  }
  
  addCompraParcelada(compra: any) {
    this.comprasParceladas.push(compra);
    localStorage.setItem('comprasParceladas', JSON.stringify(this.comprasParceladas));
  }

  removeCompraParcelada(index: any) {
    this.comprasParceladas.splice(index, 1);
    localStorage.setItem('comprasParceladas', JSON.stringify(this.comprasParceladas));
  }

  getItemReceita() {
    this.itemsReceita1 = JSON.parse(localStorage.getItem('receitas')!);
    return this.itemsReceita1;
  }
  
  addItemReceita(compra: any) {
    this.itemsReceita.push(compra);
    localStorage.setItem('receitas', JSON.stringify(this.itemsReceita));
  }

  removeItemReceita(index: any) {
    this.itemsReceita.splice(index, 1);
    localStorage.setItem('receitas', JSON.stringify(this.itemsReceita));
  }

  getItemDespesa() {
    this.itemsDespesa1 = JSON.parse(localStorage.getItem('despesas')!);
    return this.itemsDespesa1;
  }
  
  addItemDespesa(compra: any) {
    this.itemsDespesa.push(compra);
    localStorage.setItem('despesas', JSON.stringify(this.itemsDespesa));
  }

  removeItemDespesa(index: any) {
    this.itemsDespesa.splice(index, 1);
    localStorage.setItem('despesas', JSON.stringify(this.itemsDespesa));
  }

  // getItemGastos() {
  //   this.itemsGastos1 = JSON.parse(localStorage.getItem('gastos')!);
  //   return this.itemsGastos1;
  // }
  getItemGastos(): any[] {
    const gastos = localStorage.getItem('gastos');
    return gastos ? JSON.parse(gastos) : [];
  }
  
  addItemGastos(gasto: any) {
    this.itemsGastos.push(gasto);
    localStorage.setItem('gastos', JSON.stringify(this.itemsGastos));
  }

  removeItemGastos(index: any) {
    this.itemsGastos.splice(index, 1);
    localStorage.setItem('gastos', JSON.stringify(this.itemsGastos));
  }
}
