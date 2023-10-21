import { Component } from '@angular/core';
import { IDespesa } from 'src/app/interfaces/IDespesa';
import { IReceita } from 'src/app/interfaces/IReceita';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-monthly-budget',
  templateUrl: './monthly-budget.component.html',
  styleUrls: ['./monthly-budget.component.scss']
})
export class MonthlyBudgetComponent {
  despesas: IDespesa[] = [];
  receitas: IReceita[] = [];
  collapsed: boolean = false;
  
  constructor(
    public homeService: HomeService,
  ) {}

  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    });
  }

  adicionarDespesa() {
    this.despesas.push({ descricao: '', valor: 0, vencimento: '' });
  }

  removerDespesa(index: number) {
    this.despesas.splice(index, 1);
  }

  adicionarReceita() {
    this.receitas.push({ descricao: '', valor: 0, recebimento: '' });
  }

  removerReceita(index: number) {
    this.receitas.splice(index, 1);
  }

  calcularTotalReceitas(): number {
    return this.receitas.reduce((total, receita) => total + receita.valor, 0);
  }

  calcularTotalDespesas(): number {
    return this.despesas.reduce((total, despesa) => total + despesa.valor, 0);
  }

  calcularSaldo(): number {
    return this.calcularTotalReceitas() - this.calcularTotalDespesas();
  }
}