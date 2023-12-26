import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { InvestimentosService } from 'src/app/services/investimentos.service';

@Component({
  selector: 'app-table-my-investments',
  templateUrl: './table-my-investments.component.html',
  styleUrls: ['./table-my-investments.component.scss']
})
export class TableMyInvestmentsComponent implements OnInit {
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

  calcularPorcentagem(produto: string): number {
    const totalInvestido = this.investimentosService.getTotalInvestmentValue();
    const totalPorProduto = this.produtosTotais.get(produto) || 0;

    if (totalInvestido === 0) {
      return 0;
    }

    return (totalPorProduto / totalInvestido);
  }
}
