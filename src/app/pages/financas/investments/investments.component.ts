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
  ativo: string = '';
  produto: string = '';
  transacao: string = '';
  corretora: string = '';
  data: string = '';
  quantidade: number = 0;
  preco: number = 0;
  valor: number = 0;
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

  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    }); 
    this.carregarValoresDoLocalStorage(); 
    this.calcularTotalInvestido();
    this.createChart();
  }

  adicionarInvestimento() {
    const novoItem = { 
      id: this.itemsInvestimento!.length +1,
      ativo: this.ativo,
      produto: this.produto,
      transacao: this.transacao,
      corretora: this.corretora,
      data: this.data,
      quantidade: this.quantidade,
      preco: this.preco,
      valor: this.preco * this.quantidade,
    };
    this.itemsInvestimento.push(novoItem);
    this.financesService.addItemInvestimento(novoItem);

    if (novoItem.transacao === 'compra') {
      this.somarvalores(novoItem.produto)
    }

    if (novoItem.transacao === 'venda') {
      this.subtrairValores(novoItem.produto)
    }
    
    this.salvarValoresNoLocalStorage()
    this.createChart();

    this.ativo = '';
    this.produto = '';
    this.transacao = '';
    this.corretora = '';
    this.data = '';
    this.quantidade = 0;
    this.preco = 0;
    this.valor = 0;
  }

  somarvalores(novoItem: string) {
    switch(novoItem) {
      case 'acao':
        this.acao +=  this.preco * this.quantidade;
        break;
      case 'cdb':
        this.cdb +=  this.preco * this.quantidade;
        break;
      case 'cri':
        this.cri +=  this.preco * this.quantidade;
        break;
      case 'debentures':
        this.debentures +=  this.preco * this.quantidade;
        break;
      case 'etf':
        this.etf +=  this.preco * this.quantidade;
        break;
      case 'fii':
        this.fii +=  this.preco * this.quantidade;
        break;
      case 'fundoInvestimento':
        this.fundoInvestimento +=  this.preco * this.quantidade;
        break;
      case 'lf':
        this.lf +=  this.preco * this.quantidade;
        break;
      case 'lci':
        this.lci +=  this.preco * this.quantidade;
        break;
      case 'lc':
        this.lc +=  this.preco * this.quantidade;
        break;
      case 'tesouroDireto':
        this.tesouroDireto +=  this.preco * this.quantidade;
        break; 
    }
  }

  subtrairValores(novoItem: string) {
    switch(novoItem) {
      case 'acao':
        this.acao -=  this.preco * this.quantidade;
        break;
      case 'cdb':
        this.cdb -=  this.preco * this.quantidade;
        break;
      case 'cri':
        this.cri -=  this.preco * this.quantidade;
        break;
      case 'debentures':
        this.debentures -=  this.preco * this.quantidade;
        break;
      case 'etf':
        this.etf -=  this.preco * this.quantidade;
        break;
      case 'fii':
        this.fii -=  this.preco * this.quantidade;
        break;
      case 'fundoInvestimento':
        this.fundoInvestimento -=  this.preco * this.quantidade;
        break;
      case 'lf':
        this.lf -=  this.preco * this.quantidade;
        break;
      case 'lci':
        this.lci -=  this.preco * this.quantidade;
        break;
      case 'lc':
        this.lc -=  this.preco * this.quantidade;
        break;
      case 'tesouroDireto':
        this.tesouroDireto -=  this.preco * this.quantidade;
        break; 
    }
  }

  calcularTotalInvestido(): number {
    const compra = this.itemsInvestimento.filter((item) => item.transacao === 'compra')
    const venda = this.itemsInvestimento.filter((item) => item.transacao === 'venda')
    let somaCompra = 0;
    let somaVenda = 0;
    compra.map((item) => somaCompra += item.preco * item.quantidade)
    venda.map((item) => somaVenda += item.preco * item.quantidade)
    return this.todosInvestimentos = somaCompra - somaVenda;
  }

  salvarValoresNoLocalStorage() {
    localStorage.setItem('acao', this.acao.toString());
    localStorage.setItem('cdb', this.cdb.toString());
    localStorage.setItem('cri', this.cri.toString());
    localStorage.setItem('debentures', this.debentures.toString());
    localStorage.setItem('etf', this.etf.toString());
    localStorage.setItem('fii', this.fii.toString());
    localStorage.setItem('fundoInvestimento', this.fundoInvestimento.toString());
    localStorage.setItem('lf', this.lf.toString());
    localStorage.setItem('lci', this.lci.toString());
    localStorage.setItem('lc', this.lc.toString());
    localStorage.setItem('tesouroDireto', this.tesouroDireto.toString());
  }

  carregarValoresDoLocalStorage() {
    this.acao = parseFloat(localStorage.getItem('acao')!) || 0;
    this.cdb = parseFloat(localStorage.getItem('cdb')!) || 0;
    this.cri = parseFloat(localStorage.getItem('cri')!) || 0;
    this.debentures = parseFloat(localStorage.getItem('debentures')!) || 0;
    this.etf = parseFloat(localStorage.getItem('etf')!) || 0;
    this.fii = parseFloat(localStorage.getItem('fii')!) || 0;
    this.fundoInvestimento = parseFloat(localStorage.getItem('fundoInvestimento')!) || 0;
    this.lf = parseFloat(localStorage.getItem('lf')!) || 0;
    this.lci = parseFloat(localStorage.getItem('lci')!) || 0;
    this.lc = parseFloat(localStorage.getItem('lc')!) || 0;
    this.tesouroDireto = parseFloat(localStorage.getItem('tesouroDireto')!) || 0;
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
