import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
  selector: 'app-tableGastos',
  templateUrl: './tableGastos.component.html',
  styleUrls: ['./tableGastos.component.scss']
})
export class TableGastosComponent implements OnInit {
  gastos: any[] = [];
  page: string = '';

  constructor(
    public homeService: HomeService,
    public financesService: FinancesService,
    ) {
      this.gastos = this.financesService.getItemGastos();
      this.page = this.homeService.getPage();
      console.log(this.page)
    }

    ngOnInit() {
      this.financesService.getItemGastosObservable().subscribe((itemsGastos) => {
        this.gastos = itemsGastos;
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
