import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent {
  collapsed: boolean = false;

  meta: string = '';
  prazo: string = '';
  status: string = 'naoIniciada';
  itemsMeta: any[] = [];

  constructor(
    public homeService: HomeService,
    public financesService: FinancesService,
    ) {
      this.itemsMeta = this.financesService.getItemMeta();
    }

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
    this.financesService.addItemMeta(novoItem);
    console.log(this.itemsMeta)
  }

  atualizarStatus(item: any) {
    const meta = this.itemsMeta.find((m) => m.id === item.id);
  
    if (meta.status === 'naoIniciada') {
      meta.status = "emProgresso";
    } else if (meta.status === "emProgresso") {
      meta.status = "concluida";
    } else if (meta.status === "concluida") {
      this.removerMeta(item.id);
    }
  }

  removerMeta(index: number) {
    this.itemsMeta.splice(index, 1);
    this.financesService.removeItemMeta(index);
  }
}