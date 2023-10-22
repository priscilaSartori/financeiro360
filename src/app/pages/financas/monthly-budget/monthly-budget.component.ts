import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { categoriasData } from '../../../mock/financas-data';

@Component({
  selector: 'app-monthly-budget',
  templateUrl: './monthly-budget.component.html',
  styleUrls: ['./monthly-budget.component.scss']
})
export class MonthlyBudgetComponent {
  collapsed: boolean = false;
  descricaoReceita: string = '';
  valorReceita: number = 0;
  dataReceita!: string;
  itemsReceita: { id: number, descricao: string, valor: number, data: string }[] = [];

  descricaoDespesa: string = '';
  valorDespesa: number = 0;
  vencimentoDespesa!: string;
  categoria: string = '';
  itemsDespesa: { id: number, categoria: string, descricao: string, valor: number, vencimento: string }[] = [];

  categorias = categoriasData;

  constructor(
    public homeService: HomeService,
  ) {}

  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    });
  }

  adicionarItemReceita() {
    const novoItem = { id: this.itemsReceita.length +1, descricao: this.descricaoReceita, valor: this.valorReceita, data: this.dataReceita, };
    this.itemsReceita.push(novoItem);
    this.descricaoReceita = '';
    this.valorReceita = 0;
    this.dataReceita = '';
  }
  
  adicionarItemDespesa() {
    const novoItem = { id: this.itemsDespesa.length +1, categoria: this.categoria, descricao: this.descricaoDespesa, valor: this.valorDespesa, vencimento: this.vencimentoDespesa, };
    this.itemsDespesa.push(novoItem);
    this.categoria = '';
    this.descricaoDespesa = '';
    this.valorDespesa = 0;
    this.vencimentoDespesa = '';
  }

  calcularTotalReceitas(): number {
    return this.itemsReceita.reduce((total, item) => total + item.valor, 0);
  }

  calcularTotalDespesas(): number {
    return this.itemsDespesa.reduce((total, item) => total + item.valor, 0);
  }

  removerItemReceita(index: number) {
    this.itemsReceita.splice(index, 1);
  }

  removerItemDespesa(index: number) {
    this.itemsDespesa.splice(index, 1);
  }
}