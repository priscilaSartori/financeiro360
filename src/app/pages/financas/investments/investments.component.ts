import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent {
  collapsed: boolean = false;
  meta: string = '';
  prazo: string = '';
  status: string = 'naoIniciada';
  itemsMeta: any[] = [];

  constructor(
    public homeService: HomeService,
  ) {}

  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    });
  }

  adicionarMeta() {
    const novoItem = { 
      id: this.itemsMeta.length +1,
      meta: this.meta,
      prazo: this.prazo,
      status: this.status,
    };
    this.itemsMeta.push(novoItem);
    this.meta = '';
    this.prazo = '';
    this.status = 'naoIniciada';
  }

  removerMeta(index: number) {
    this.itemsMeta.splice(index, 1);
  }
}
