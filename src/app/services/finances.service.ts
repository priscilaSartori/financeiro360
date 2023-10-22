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
}
