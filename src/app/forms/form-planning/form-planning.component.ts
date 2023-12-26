import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { MetasService } from 'src/app/services/metas.service';

@Component({
  selector: 'app-form-planning',
  templateUrl: './form-planning.component.html',
  styleUrls: ['./form-planning.component.scss']
})
export class FormPlanningComponent {
  meta: string = '';
  prazo: string = '';
  status: string = 'naoIniciada';
  itemsMeta: any[] = [];

  constructor(
    public homeService: HomeService,
    public metasService: MetasService,
    ) {
      this.itemsMeta = this.metasService.getItemMeta();
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
    this.metasService.addItemMeta(novoItem);
  }
}