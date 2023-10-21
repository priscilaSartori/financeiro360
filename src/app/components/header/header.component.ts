import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../../dialog/profile/profile.component';
import { ChangePasswordComponent } from '../../dialog/change-password/change-password.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  name: string = '';
  usuario: string = '';

  constructor(
    private router: Router,
    public dialog: MatDialog,
  ) {
    const usuarioRecuperado = localStorage.getItem('usuarioLogado')
    if (usuarioRecuperado) {
      const jsonUsuario = JSON.parse(usuarioRecuperado)
      this.usuario = jsonUsuario.name;
    }
  }

  ngOnInit() {
    
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
