import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../../dialog/profile/profile.component';
import { ChangePasswordComponent } from '../../dialog/change-password/change-password.component';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  name: string = '';
  usuario: string = '';
  collapsed: boolean = false;
  page: string = 'PAINEL'
  
  constructor(
    private router: Router,
    public dialog: MatDialog,
    public homeService: HomeService,
  ) {
    
    //Nome 
    const usuarioRecuperado = localStorage.getItem('usuarioLogado')
    if (usuarioRecuperado) {
      const jsonUsuario = JSON.parse(usuarioRecuperado)
      this.usuario = jsonUsuario.name;
    }
  }

  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    });

    this.homeService.obterVariavel2Observable().subscribe(novaVariavel => {
      if(novaVariavel === 'routinePlanning') {
        this.page = 'PLANEJAMENTO DE ROTINA';
      }
      if(novaVariavel === 'habit') {
        this.page = 'RASTREADOR DE HÁBITOS';
      }
      if(novaVariavel === 'mealPlanner') {
        this.page = 'PLANNER DE REFEIÇÃO';
      }
      if(novaVariavel === 'sleepDiary') {
        this.page = 'DIÁRIO DO SONO';
      }
      if(novaVariavel === 'routine') {
        this.page = 'ROTINA DE ESTUDOS';
      }
      if(novaVariavel === 'priority') {
        this.page = 'TABELA DE PRIORIDADES';
      }
      if(novaVariavel === 'challenge') {
        this.page = 'DESAFIO 100 DIAS DE PRODUTIVIDADE';
      }
      if(novaVariavel === 'books') {
        this.page = 'LIVROS';
      }
      if(novaVariavel === 'films') {
        this.page = 'FILMES';
      }
      if(novaVariavel === 'series') {
        this.page = 'SÉRIES';
      }
      if(novaVariavel === 'birthdays') {
        this.page = 'ANIVERSARIANTES';
      }
      if(novaVariavel === 'doctor') {
        this.page = 'CONSULTAS MÉDICAS';
      }
      if(novaVariavel === 'skincare') {
        this.page = 'SKINCARE';
      }
      if(novaVariavel === 'hydration') {
        this.page = 'HIDRATAÇÃO';
      }
      if(novaVariavel === 'exercises') {
        this.page = 'EXERCÍCIOS FÍSICOS';
      }
      if(novaVariavel === 'hairSchedule') {
        this.page = 'CRONOGRAMA CAPILAR';
      }
      if(novaVariavel === 'monthlyBudget') {
        this.page = 'ORÇAMENTO MENSAL';
      }
      if(novaVariavel === 'cashPurchases') {
        this.page = 'CONTROLE DE COMPRAS PARCELADAS';
      }
      if(novaVariavel === 'spending') {
        this.page = 'CONTROLE DE GASTOS';
      }
      if(novaVariavel === 'summary') {
        this.page = 'RESUMO DO MÊS';
      }
      if(novaVariavel === 'planning') {
        this.page = 'METAS';
      }
      if(novaVariavel === 'investments') {
        this.page = 'INVESTIMENTOS';
      }
      if(novaVariavel === 'houseBills') {
        this.page = 'CONTAS DA CASA';
      }
      if(novaVariavel === 'market') {
        this.page = 'MERCADO';
      }
    });    
  }
  
  toggleProfile() {
    this.dialog.open(ProfileComponent);
  }

  toggleChangePassword() {
    this.dialog.open(ChangePasswordComponent);
  }

  deslogar() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
