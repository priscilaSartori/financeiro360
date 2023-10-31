import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
  selector: 'app-table-my-investments',
  templateUrl: './table-my-investments.component.html',
  styleUrls: ['./table-my-investments.component.scss']
})
export class TableMyInvestmentsComponent {
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
    this.carregarValoresDoLocalStorage(); 
    this.calcularTotalInvestido();
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
}
