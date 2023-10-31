import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
  selector: 'app-tablePlanning',
  templateUrl: './tablePlanning.component.html',
  styleUrls: ['./tablePlanning.component.scss']
})
export class TablePlanningComponent {
  itemsMeta: any[] = [];

  constructor(
    public homeService: HomeService,
    public financesService: FinancesService,
    ) {
      this.itemsMeta = this.financesService.getItemMeta();
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