import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { GastosService } from 'src/app/services/gastos.service';

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
    public gastosService: GastosService,
    ) {
      this.gastos = this.gastosService.getItemGastos();
      this.page = this.homeService.getPage();
      console.log(this.page)
    }

    ngOnInit() {
      this.gastosService.getObservableGastos().subscribe((gastos) => {
        this.gastos = gastos;
      });
    }

  removerGasto(index: number) {
    this.gastos.splice(index, 1);
    this.gastosService.removeItemGastos(index);
  }

  calcularTotal(): number {
    return this.gastos?.reduce((total, gasto) => total + gasto.valor, 0);
  }

}
