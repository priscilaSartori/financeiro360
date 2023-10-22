import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { FinancesService } from 'src/app/services/finances.service';

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
    private financesService: FinancesService
  ) {
    this.comprasParceladas = this.financesService.getComprasParceladas();
    this.receitas = this.financesService.getItemReceita();
    this.despesas = this.financesService.getItemDespesa();
    this.gastos = this.financesService.getItemGastos();
  }
    
  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    });
  }
}
