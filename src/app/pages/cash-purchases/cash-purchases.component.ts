import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-cash-purchases',
  templateUrl: './cash-purchases.component.html',
  styleUrls: ['./cash-purchases.component.scss']
})
export class CashPurchasesComponent {
  collapsed: boolean = false;

  constructor(
    public homeService: HomeService,
  ) {}

  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    });
  }

}
