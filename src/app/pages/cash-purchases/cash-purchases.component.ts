import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
  selector: 'app-cash-purchases',
  templateUrl: './cash-purchases.component.html',
  styleUrls: ['./cash-purchases.component.scss']
})
export class CashPurchasesComponent {
  collapsed: boolean = false;
  items: any[] = [];

  
  constructor(
    public homeService: HomeService,
    public financesService: FinancesService,
    ) {
      this.items = this.financesService.getComprasParceladas();
      console.log(this.items)
    }
    
    ngOnInit() {
      this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
        this.collapsed = novaVariavel;
      });
    }

    removerCompra(index: number) {
      this.items.splice(index, 1);
      this.financesService.removeCompraParcelada(index);
    }
  
    calcularCompras(): number {
      return this.items?.reduce((total, item) => total + item.valor, 0);
    }
}
