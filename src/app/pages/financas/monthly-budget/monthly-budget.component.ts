import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { categoriasData } from '../../../mock/financas-data';
import { FinancesService } from 'src/app/services/finances.service';

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
  
  descricaoDespesa: string = '';
  valorDespesa: number = 0;
  vencimentoDespesa: string = '';
  categoriaDespesa: string = '';
  
  categorias = categoriasData;
  itemsReceita: any[] = [];
  itemsDespesa: any[] = [];
  
  constructor(
    public homeService: HomeService,
    public financesService: FinancesService,
    ) {
      this.itemsReceita = this.financesService.getItemReceita();
      this.itemsDespesa = this.financesService.getItemDespesa();
    }

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
    this.financesService.addItemReceita(novoItem);
  }
  
  adicionarItemDespesa() {
    const novoItem = { id: this.itemsDespesa.length +1, categoria: this.categoriaDespesa, descricao: this.descricaoDespesa, valor: this.valorDespesa, vencimento: this.vencimentoDespesa, };
    this.itemsDespesa.push(novoItem);
    this.categoriaDespesa = '';
    this.descricaoDespesa = '';
    this.valorDespesa = 0;
    this.vencimentoDespesa = '';
    this.financesService.addItemDespesa(novoItem);
  }

  calcularTotalReceitas(): number {
    return this.itemsReceita.reduce((total, item) => total + item.valor, 0);
  }

  calcularTotalDespesas(): number {
    return this.itemsDespesa.reduce((total, item) => total + item.valor, 0);
  }

  removerItemReceita(index: number) {
    this.itemsReceita.splice(index, 1);
    this.financesService.removeItemReceita(index);
  }

  removerItemDespesa(index: number) {
    this.itemsDespesa.splice(index, 1);
    this.financesService.removeItemDespesa(index);
  }
}