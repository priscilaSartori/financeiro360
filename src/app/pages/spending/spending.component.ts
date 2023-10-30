import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { pagamentosData, categoriasData } from '../../mock/financas-data';
import { FinancesService } from 'src/app/services/finances.service';

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
  gastos: any[] = [];

  constructor(
    public homeService: HomeService,
    public financesService: FinancesService,
    ) {
      this.gastos = this.financesService.getItemGastos();
    }

  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    });
  }

  adicionarItem() {
    const novoItem = { id: this.gastos.length +1, data: this.data, descricao: this.descricao, formaPagamento: this.formaPagamento, valor: this.valor, categoria: this.categoria };
    this.gastos.push(novoItem);
    this.data = '';
    this.descricao = '';
    this.formaPagamento = '';
    this.valor = 0;
    this.financesService.addItemGastos(novoItem);
  }

  removerGasto(index: number) {
    this.gastos.splice(index, 1);
    this.financesService.removeItemGastos(index);
  }

  calcularTotal(): number {
    return this.gastos?.reduce((total, gasto) => total + gasto.valor, 0);
  }
}
