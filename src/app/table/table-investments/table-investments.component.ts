import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { InvestimentosService } from 'src/app/services/investimentos.service';

@Component({
  selector: 'app-table-investments',
  templateUrl: './table-investments.component.html',
  styleUrls: ['./table-investments.component.scss']
})
export class TableInvestmentsComponent {
  investimento: any[] = [];
  produtosTotais: Map<string, number> = new Map<string, number>();

  constructor(
    public homeService: HomeService,
    public investimentosService: InvestimentosService,
    ) {
      this.investimento = this.investimentosService.getItemInvestimento();
    }

  ngOnInit() {
    this.investimento = this.investimentosService.getItemInvestimento();
    this.produtosTotais = this.investimentosService.getProdutosTotais();

    this.investimentosService.getObservableInvestimentos().subscribe((investimento) => {
      this.investimento = investimento;
      this.produtosTotais = this.investimentosService.getProdutosTotais();
    });
  }
}