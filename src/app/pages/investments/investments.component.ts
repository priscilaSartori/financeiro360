import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { InvestimentosService } from 'src/app/services/investimentos.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent {
  collapsed: boolean = false;
  itemsInvestimento: any[] = [];

  constructor(
    public homeService: HomeService,
    public investimentosService: InvestimentosService,
    ) {
      this.itemsInvestimento = this.investimentosService.getItemInvestimento();
    }

  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    }); 
    this.investimentosService.getObservableInvestimentos().subscribe(investimento => {
      this.itemsInvestimento = investimento;
    });
  }
}