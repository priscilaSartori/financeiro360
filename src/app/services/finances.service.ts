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
  
  getComprasParceladas() {
    return this.comprasParceladas;
  }
  
  addCompraParcelada(compra: any) {
    this.comprasParceladas.push(compra);
  }

  removeCompraParcelada(index: any) {
    this.comprasParceladas.splice(index, 1);
  }
}
