import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
  selector: 'app-table-investments',
  templateUrl: './table-investments.component.html',
  styleUrls: ['./table-investments.component.scss']
})
export class TableInvestmentsComponent {
  itemsInvestimento: any[] = [];

  acao: number = 0;
  cdb: number = 0;
  cri: number = 0;
  debentures: number = 0;
  etf: number = 0;
  fii: number = 0;
  fundoInvestimento: number = 0;
  lf: number = 0;
  lci: number = 0;
  lc: number = 0;
  tesouroDireto: number = 0;
  todosInvestimentos: number = 0;

  chart: any;
  categorias: string[] = [];
  series: {}[] = [];

  constructor(
    public homeService: HomeService,
    public financesService: FinancesService,
    ) {
      this.itemsInvestimento = this.financesService.getItemInvestimento();
    }
}