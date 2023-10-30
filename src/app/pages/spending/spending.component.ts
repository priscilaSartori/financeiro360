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

  removerGasto(index: number) {
    this.gastos.splice(index, 1);
    this.financesService.removeItemGastos(index);
  }

  calcularTotal(): number {
    return this.gastos?.reduce((total, gasto) => total + gasto.valor, 0);
  }
}
