import { Component } from '@angular/core';
import { categoriasData } from '../../mock/financas-data';
import { FinancesService } from 'src/app/services/finances.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-form-despesas',
  templateUrl: './form-despesas.component.html',
  styleUrls: ['./form-despesas.component.scss']
})
export class FormDespesasComponent {
  descricaoDespesa: string = '';
  valorDespesa: number = 0;
  vencimentoDespesa: string = '';
  categoriaDespesa: string = '';

  categorias = categoriasData;
  itemsDespesa: any[] = [];

  constructor(
    public homeService: HomeService,
    public financesService: FinancesService,
    ) {
      this.itemsDespesa = this.financesService.getItemDespesa();
    }

    adicionarItemDespesa() {
      const novoItem = { id: this.itemsDespesa?.length +1, categoria: this.categoriaDespesa, descricao: this.descricaoDespesa, valor: this.valorDespesa, vencimento: this.vencimentoDespesa, };
      this.itemsDespesa?.push(novoItem);
      this.categoriaDespesa = '';
      this.descricaoDespesa = '';
      this.valorDespesa = 0;
      this.vencimentoDespesa = '';
      this.financesService.addItemDespesa(novoItem);
    }
}
