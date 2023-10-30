import { Component } from '@angular/core';
import { FinancesService } from 'src/app/services/finances.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})
export class DespesasComponent {
  collapsed: boolean = false;

  itemsDespesa: any[] = [];
  
  constructor(
    public homeService: HomeService,
    public financesService: FinancesService,
    ) {
      this.itemsDespesa = this.financesService.getItemDespesa();
    }
    
  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    });
  }

  calcularTotalDespesas(): number {
    return this.itemsDespesa?.reduce((total, item) => total + item.valor, 0);
  }

  removerItemDespesa(index: number) {
    this.itemsDespesa.splice(index, 1);
    this.financesService.removeItemDespesa(index);
  }
}
