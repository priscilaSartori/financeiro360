import { Component, OnInit } from '@angular/core';
import { DespesasService } from 'src/app/services/despesas.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-tableDespesas',
  templateUrl: './tableDespesas.component.html',
  styleUrls: ['./tableDespesas.component.scss']
})
export class TableDespesasComponent implements OnInit {
  despesa: any[] = [];
  page: string = '';

  constructor(
    public homeService: HomeService,
    public despesasService: DespesasService,
    ) {
      this.despesa = this.despesasService.getItemDespesa();
      this.page = this.homeService.getPage();
      console.log(this.page)
    }

    ngOnInit() {
      this.despesasService.getObservableDespesa().subscribe((despesa) => {
        this.despesa = despesa;
      });
    }

  calcularTotalDespesas(): number {
    return this.despesa?.reduce((total, item) => total + item.valor, 0);
  }

  removerItemDespesa(index: number) {
    this.despesa.splice(index, 1);
    this.despesasService.removeItemDespesa(index);
  }
}