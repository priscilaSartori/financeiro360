import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-tableCompras',
  templateUrl: './tableCompras.component.html',
  styleUrls: ['./tableCompras.component.scss']
})
export class TableComprasComponent {
  compras: any[] = [];
  page: string = '';

  constructor(
    public homeService: HomeService,
    public comprasService: ComprasService,
    ) {
      this.compras = this.comprasService.getComprasParceladas();
      this.page = this.homeService.getPage();
      console.log(this.page)
    }

  ngOnInit() {
    this.comprasService.getObservableCompras().subscribe((compras) => {
      this.compras = compras;
    });
  }  

  removerCompra(index: number) {
    this.compras.splice(index, 1);
    this.comprasService.removeCompraParcelada(index);
  }

  calcularCompras(): number {
    return this.compras?.reduce((total, item) => total + item.valor, 0);
  }
}
