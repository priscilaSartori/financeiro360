import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { FinancesService } from 'src/app/services/finances.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent {
  collapsed: boolean = false;
  itemsInvestimento: any[] = [];
  chart: any;
  categorias: string[] = [];
  series: {}[] = [];

  constructor(
    public homeService: HomeService,
    public financesService: FinancesService,
    ) {
      this.itemsInvestimento = this.financesService.getItemInvestimento();
    }

  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    }); 
    this.createChart();
  }

  createChart() {
    this.categorias = []; 
    this.series = []; 

    this.chart = new Chart({
      chart: {
        type: 'bar',
        height: 300,
        width: 500
      },
      title: {
        text: 'Investimentos'
      },
      xAxis: {
        categories: this.categorias
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      series: [
       {
        type: 'bar',
        showInLegend: false,
        data: this.series
       }
      ],
      credits: {
        enabled: false
      }
    })

    for (var i = 0; i < this.itemsInvestimento.length; i++) {
      this.categorias.push(this.itemsInvestimento[i].ativo); // Adicione as categorias ao eixo x
      this.series.push({
        name: this.itemsInvestimento[i].ativo,
        y: this.itemsInvestimento[i].valor,
        color: this.getRandomColor(),
      }); 
  }
}
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
