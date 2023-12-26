import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { InvestimentosService } from 'src/app/services/investimentos.service';

@Component({
  selector: 'app-form-investments',
  templateUrl: './form-investments.component.html',
  styleUrls: ['./form-investments.component.scss']
})
export class FormInvestmentsComponent implements OnInit {
  ativo: string = '';
  produto: string = '';
  transacao: string = '';
  corretora: string = '';
  data: string = '';
  quantidade: number = 0;
  preco: number = 0;
  valor: number = 0;
  itemsInvestimento: any[] = [];

  todosInvestimentos: number = 0;

  constructor(
    public homeService: HomeService,
    public investimentosService: InvestimentosService,
    ) {}

  ngOnInit() {
  }

  adicionarInvestimento() {
    const novoItem = this.createInvestmentItem();
    this.itemsInvestimento.push(novoItem);
    this.investimentosService.addItemInvestimento(novoItem);
    
    this.ativo = '';
    this.produto = '';
    this.transacao = '';
    this.corretora = '';
    this.data = '';
    this.quantidade = 0;
    this.preco = 0;
    this.valor = 0;
  }

  createInvestmentItem() {
    return {
      id: this.itemsInvestimento.length + 1,
      ativo: this.ativo,
      produto: this.produto,
      transacao: this.transacao,
      corretora: this.corretora,
      data: this.data,
      quantidade: this.quantidade,
      preco: this.preco,
      valor: this.preco * this.quantidade,
    };
  }
}