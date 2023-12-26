import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { pagamentosData, categoriasData } from '../../mock/financas-data';
import { GastosService } from 'src/app/services/gastos.service';

@Component({
  selector: 'app-form-gastos',
  templateUrl: './form-gastos.component.html',
  styleUrls: ['./form-gastos.component.scss']
})
export class FormGastosComponent {

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
    public gastosService: GastosService,
    ) {
      this.gastos = this.gastosService.getItemGastos();
    }

  adicionarItem() {
    const novoItem = { id: this.gastos.length +1, data: this.data, descricao: this.descricao, formaPagamento: this.formaPagamento, valor: this.valor, categoria: this.categoria };
    this.gastos.push(novoItem);
    this.data = '';
    this.descricao = '';
    this.formaPagamento = '';
    this.valor = 0;
    this.gastosService.addItemGastos(novoItem);
  }
}
