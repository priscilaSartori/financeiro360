import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
  selector: 'app-tableCompras',
  templateUrl: './tableCompras.component.html',
  styleUrls: ['./tableCompras.component.scss']
})
export class TableComprasComponent {
  items: any[] = [];
  page: string = '';

  constructor(
    public homeService: HomeService,
    public financesService: FinancesService,
    ) {
      this.items = this.financesService.getComprasParceladas();
      this.page = this.homeService.getPage();
      console.log(this.page)
    }

  removerCompra(index: number) {
    this.items.splice(index, 1);
    this.financesService.removeCompraParcelada(index);
  }

  calcularCompras(): number {
    return this.items?.reduce((total, item) => total + item.valor, 0);
  }
}
