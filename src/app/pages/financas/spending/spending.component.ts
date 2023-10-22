import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { pagamentosData, categoriasData } from '../../../mock/financas-data';

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.scss']
})

export class SpendingComponent {
  collapsed: boolean = false;

  pagamentos = pagamentosData;
  categorias = categoriasData;

  data!: string;
  descricao: string = '';
  formaPagamento: string = '';
  valor: number = 0;
  categoria: string = '';

  items: { id: number, data: string, descricao: string, formaPagamento: string, valor: number, categoria: string }[] = [];
    
  constructor(public homeService: HomeService) {}

  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    });
  }

  adicionarItem() {
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
