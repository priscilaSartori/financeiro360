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
  page: string = 'ORÇAMENTO MENSAL'
  
  constructor(
    private router: Router,
    public dialog: MatDialog,
    public homeService: HomeService,
  ) {
    
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
      if(novaVariavel === 'receita') {
        this.page = 'RECEITAS';
      }
      if(novaVariavel === 'despesa') {
        this.page = 'DESPESAS';
      }
      if(novaVariavel === 'cashPurchases') {
        this.page = 'CONTROLE DE COMPRAS PARCELADAS';
      }
      if(novaVariavel === 'spending') {
        this.page = 'CONTROLE DE GASTOS';
      }
      if(novaVariavel === '') {
        this.page = 'ORÇAMENTO MENSAL';
      }
      if(novaVariavel === 'planning') {
        this.page = 'METAS';
      }
      if(novaVariavel === 'investments') {
        this.page = 'INVESTIMENTOS';
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
