import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { MetasService } from 'src/app/services/metas.service';

@Component({
  selector: 'app-tablePlanning',
  templateUrl: './tablePlanning.component.html',
  styleUrls: ['./tablePlanning.component.scss']
})
export class TablePlanningComponent {
  meta: any[] = [];

  constructor(
    public homeService: HomeService,
    public metasService: MetasService,
    ) {
      this.meta = this.metasService.getItemMeta();
    }

  ngOnInit() {
    this.metasService.getObservableMetas().subscribe((meta) => {
      this.meta = meta;
    });
  }

  atualizarStatus(item: any) {
    const meta = this.meta.find((m) => m.id === item.id);
  
    if (meta.status === 'naoIniciada') {
      meta.status = "emProgresso";
    } else if (meta.status === "emProgresso") {
      meta.status = "concluida";
    } else if (meta.status === "concluida") {
      this.removerMeta(item.id);
    }
  }

  removerMeta(index: number) {
    this.meta.splice(index, 1);
    this.metasService.removeItemMeta(index);
  }
}