import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { ReceitasService } from 'src/app/services/receitas.service';
import { DespesasService } from 'src/app/services/despesas.service';
import { GastosService } from 'src/app/services/gastos.service';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  collapsed: boolean = false;
  comprasParceladas: any[] = [];
  receitas: any[] = [];
  despesas: any[] = [];
  gastos: any[] = [];
  
  constructor(
    public homeService: HomeService,
    private receitasService: ReceitasService,
    private despesasService: DespesasService,
    private gastosService: GastosService,
    private comprasService: ComprasService,
  ) {
    this.comprasParceladas = this.comprasService.getComprasParceladas();
    this.receitas = this.receitasService.getItemReceita();
    this.despesas = this.despesasService.getItemDespesa();
    this.gastos = this.gastosService.getItemGastos();
  }
    
  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    });
    console.log()
  }

  calcularReceitas(): number {
    return this.receitas?.reduce((total, item) => total + item.valor, 0);
  }

  calcularDespesas(): number {
    return this.despesas?.reduce((total, item) => total + item.valor, 0);
  }

  calcularGastos(): number {
    return this.gastos?.reduce((total, gasto) => total + gasto.valor, 0);
  }

  calcularCompras(): number {
    return this.comprasParceladas?.reduce((total, item) => total + item.valor, 0);
  }

  calcularSaldo(): number {
    const totalDespesas = this.calcularDespesas() + this.calcularGastos() + this.calcularCompras()
    return this.calcularReceitas() - totalDespesas;
  }
}
