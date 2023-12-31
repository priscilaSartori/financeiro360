import { Component } from '@angular/core';
import { categoriasData } from '../../mock/financas-data';
import { ReceitasService } from 'src/app/services/receitas.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-form-receitas',
  templateUrl: './form-receitas.component.html',
  styleUrls: ['./form-receitas.component.scss']
})
export class FormReceitasComponent {
  descricaoReceita: string = '';
  valorReceita: number = 0;
  dataReceita!: string;
  
  categorias = categoriasData;
  itemsReceita: object[] = [];
  
  
  constructor(
    public homeService: HomeService,
    public receitasService: ReceitasService,
    ) {
      this.receitasService.getObservableReceitas().subscribe((receita) => {
        this.itemsReceita = receita;
      });
    }

  adicionarItemReceita() {
    const novoItem = { id: this.itemsReceita.length +1, descricao: this.descricaoReceita, valor: this.valorReceita, data: this.dataReceita, };
    this.itemsReceita.push(novoItem);
    this.descricaoReceita = '';
    this.valorReceita = 0;
    this.dataReceita = '';
    this.receitasService.addItemReceita(novoItem);
  }  
}
