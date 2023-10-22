import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-cash-purchases',
  templateUrl: './cash-purchases.component.html',
  styleUrls: ['./cash-purchases.component.scss']
})
export class CashPurchasesComponent {
  collapsed: boolean = false;
  items: { id: number, descricao: string, valor: number, parcelas: number, meses: string[] }[] = [];
  descricao: string = '';
  valor: number = 0;
  mesSelecionado!: string; // Mês inicial
  quantidadeParcelas: number = 1; // Quantidade inicial de parcelas
  meses = [
    { value: 1, name: 'Janeiro' },
    { value: 2, name: 'Fevereiro' },
    { value: 3, name: 'Março' },
    { value: 4, name: 'Abril' },
    { value: 5, name: 'Maio' },
    { value: 6, name: 'Junho' },
    { value: 7, name: 'Julho' },
    { value: 8, name: 'Agosto' },
    { value: 9, name: 'Setembro' },
    { value: 10, name: 'Outubro' },
    { value: 11, name: 'Novembro' },
    { value: 12, name: 'Dezembro' },
  ];
  parcelas: any[] = [];
  mesesSelecionados: string[] = [];
  
  constructor(public homeService: HomeService) {}

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
    const novoItem = { id: this.items.length +1, descricao: this.descricao, valor: this.valor, parcelas: this.quantidadeParcelas, meses: this.parcelas };
    this.items.push(novoItem);
    this.descricao = '';
    this.valor = 0;
    this.quantidadeParcelas = 1;
    this.mesSelecionado = '';
  }

  removerCompra(index: number) {
    this.items.splice(index, 1);
  }
}
