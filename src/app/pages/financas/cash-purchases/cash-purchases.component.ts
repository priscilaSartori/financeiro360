import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { mesesData, categoriasData } from '../../../mock/financas-data';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
  selector: 'app-cash-purchases',
  templateUrl: './cash-purchases.component.html',
  styleUrls: ['./cash-purchases.component.scss']
})
export class CashPurchasesComponent {
  collapsed: boolean = false;
  descricao: string = '';
  valor: number = 0;
  categoria: string = '';
  mesSelecionado!: string; // Mês inicial
  quantidadeParcelas: number = 1; // Quantidade inicial de parcelas
  parcelas: any[] = [];
  mesesSelecionados: string[] = [];
  categorias = categoriasData;
  meses = mesesData;
  items: any[] = [];
  
  constructor(
    public homeService: HomeService,
    public financesService: FinancesService,
    ) {}

  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    });
  }

  criarParcelas() {
    const mesSelecionado = parseInt(this.mesSelecionado);
    const quantidadeParcelas = this.quantidadeParcelas;
  
    if (mesSelecionado >= 0 && quantidadeParcelas > 0) {
      const mesIndex = this.meses.findIndex((mes) => mes.value === mesSelecionado);
      const mesesSelecionados: string[] = [];
      const qtdeMeses = mesIndex + quantidadeParcelas -1;
  
      for (let i = mesIndex; i <= qtdeMeses; i++) {
        const index = i % 12; // Garante que o índice esteja entre 0 e 11 para evitar estouro
        mesesSelecionados.push(this.meses[index].name);
      }
  
      this.parcelas = mesesSelecionados;
    }
  }
  
  adicionarItem() {
    this.criarParcelas();
    const novoItem = { id: this.items.length +1, descricao: this.descricao, valor: this.valor, parcelas: this.quantidadeParcelas, categoria: this.categoria, meses: this.parcelas };
    this.items.push(novoItem);
    this.descricao = '';
    this.valor = 0;
    this.quantidadeParcelas = 1;
    this.mesSelecionado = '';
    this.financesService.addCompraParcelada(novoItem);
  }

  removerCompra(index: number) {
    this.items.splice(index, 1);
    this.financesService.removeCompraParcelada(index);
  }
}
