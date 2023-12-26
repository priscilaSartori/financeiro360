import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { mesesData, categoriasData } from '../../mock/financas-data';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-dados-compras-parceladas',
  templateUrl: './dados-compras-parceladas.component.html',
  styleUrls: ['./dados-compras-parceladas.component.scss']
})
export class DadosComprasParceladasComponent {
  descricao: string = '';
  valor: number = 0;
  categoria: string = '';
  mesSelecionado!: string; 
  quantidadeParcelas: number = 1; 
  parcelas: any[] = [];
  mesesSelecionados: string[] = [];
  categorias = categoriasData;
  meses = mesesData;
  items: any[] = [];
  
  constructor(
    public homeService: HomeService,
    public comprasService: ComprasService,
    ) {
      this.items = this.comprasService.getComprasParceladas();
    }

  criarParcelas() {
    const mesSelecionado = parseInt(this.mesSelecionado);
    const quantidadeParcelas = this.quantidadeParcelas;
  
    if (mesSelecionado >= 0 && quantidadeParcelas > 0) {
      const mesIndex = this.meses.findIndex((mes) => mes.value === mesSelecionado);
      const mesesSelecionados: string[] = [];
      const qtdeMeses = mesIndex + quantidadeParcelas -1;
  
      for (let i = mesIndex; i <= qtdeMeses; i++) {
        const index = i % 12; 
        mesesSelecionados.push(this.meses[index].name);
      }
  
      this.parcelas = mesesSelecionados;
    }
  }
  
  adicionarItem() {
    this.criarParcelas();
    const novoItem = { id: this.items?.length +1, descricao: this.descricao, valor: this.valor, parcelas: this.quantidadeParcelas, categoria: this.categoria, meses: this.parcelas };
    this.items?.push(novoItem);
    this.descricao = '';
    this.valor = 0;
    this.quantidadeParcelas = 1;
    this.mesSelecionado = '';
    this.comprasService.addCompraParcelada(novoItem);
  }
}
