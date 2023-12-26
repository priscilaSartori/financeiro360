import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { ReceitasService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-tableReceitas',
  templateUrl: './tableReceitas.component.html',
  styleUrls: ['./tableReceitas.component.scss']
})
export class TableReceitasComponent implements OnInit {
  receita: any[] = [];
  page: string = '';

  constructor(
    public homeService: HomeService,
    public receitasService: ReceitasService,
    ) {
      this.receita = this.receitasService.getItemReceita();
      this.page = this.homeService.getPage();
    }

  ngOnInit() {
    this.receitasService.getObservableReceitas().subscribe((receita) => {
      this.receita = receita;
    });
  }

  calcularTotalReceitas(): number {
    return this.receita?.reduce((total, item) => total + item.valor, 0);
  }

  removerItemReceita(index: number) {
    this.receita.splice(index, 1);
    this.receitasService.removeItemReceita(index);
  }
}