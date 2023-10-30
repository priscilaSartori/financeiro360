import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.scss']
})
export class ReceitaComponent {
  collapsed: boolean = false;
  itemsReceita: any[] = [];
  
  constructor(
    public homeService: HomeService,
    public financesService: FinancesService,
    ) {
      this.itemsReceita = this.financesService.getItemReceita();
    }
    
  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    });
  }

  calcularTotalReceitas(): number {
    return this.itemsReceita?.reduce((total, item) => total + item.valor, 0);
  }

  removerItemReceita(index: number) {
    this.itemsReceita.splice(index, 1);
    this.financesService.removeItemReceita(index);
  }
}