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

  constructor(
    public homeService: HomeService,
    private financesService: FinancesService
    ) {
      this.comprasParceladas = this.financesService.getComprasParceladas();
  }

  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    });
  }

}
