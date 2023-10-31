import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
  selector: 'app-tableReceitas',
  templateUrl: './tableReceitas.component.html',
  styleUrls: ['./tableReceitas.component.scss']
})
export class TableReceitasComponent {
  itemsReceita: any[] = [];
  page: string = '';

  constructor(
    public homeService: HomeService,
    public financesService: FinancesService,
    ) {
      this.itemsReceita = this.financesService.getItemReceita();
      this.page = this.homeService.getPage();
      console.log(this.page)
    }

  calcularTotalReceitas(): number {
    return this.itemsReceita?.reduce((total, item) => total + item.valor, 0);
  }

  removerItemReceita(index: number) {
    this.itemsReceita.splice(index, 1);
    this.financesService.removeItemReceita(index);
  }
}