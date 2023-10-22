import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.scss']
})
export class SpendingComponent {
  collapsed: boolean = false;
  data!: string;
  descricao: string = '';
  formaPagamento: string = '';
  valor: number = 0;
  categoria: string = '';

  items: { id: number, data: string, descricao: string, formaPagamento: string, valor: number, categoria: string }[] = [];
  pagamento = [
    { value: 1, name: 'Dinheiro' },
    { value: 2, name: 'Cartão de crédito' },
    { value: 3, name: 'Cartão de débito' },
  ];

  categorias = [
    { value: 1, name: 'Moradia' },
    { value: 2, name: 'Supermercado' },
    { value: 3, name: 'TV / Internet / Telefone' },
    { value: 4, name: 'Transporte' },
    { value: 5, name: 'Lazer' },
    { value: 6, name: 'Saúde' },
    { value: 7, name: 'Bares / Restaurantes' },
    { value: 8, name: 'Lanches' },
    { value: 9, name: 'Roupas novas' },
    { value: 10, name: 'Cinema' },
    { value: 11, name: 'Educação' },
  ];
  
  constructor(public homeService: HomeService) {}

  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    });
  }

  adicionarItem() {
    // this.criarParcelas();
    const novoItem = { id: this.items.length +1, data: this.data, descricao: this.descricao, formaPagamento: this.formaPagamento, valor: this.valor, categoria: this.categoria };
    this.items.push(novoItem);
    this.data = '';
    this.descricao = '';
    this.formaPagamento = '';
    this.valor = 0;
  }

  removerGasto(index: number) {
    this.items.splice(index, 1);
  }

  calcularTotal(): number {
    return this.items.reduce((total, item) => total + item.valor, 0);
  }
}
