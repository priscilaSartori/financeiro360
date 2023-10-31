import { Component } from '@angular/core';
import { FinancesService } from 'src/app/services/finances.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-tableDespesas',
  templateUrl: './tableDespesas.component.html',
  styleUrls: ['./tableDespesas.component.scss']
})
export class TableDespesasComponent {
  itemsDespesa: any[] = [];
  page: string = '';

  constructor(
    public homeService: HomeService,
    public financesService: FinancesService,
    ) {
      this.itemsDespesa = this.financesService.getItemDespesa();
      this.page = this.homeService.getPage();
      console.log(this.page)
    }

  calcularTotalDespesas(): number {
    return this.itemsDespesa?.reduce((total, item) => total + item.valor, 0);
  }

  removerItemDespesa(index: number) {
    this.itemsDespesa.splice(index, 1);
    this.financesService.removeItemDespesa(index);
  }
}