import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { IUsuario } from 'src/app/interfaces/IUsuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private userService: UserService,
    ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  forgotPassword() {
    this.router.navigate(['/forgotPassword']);
  }

  onSubmit() {
    if(this.loginForm.invalid) {
      return
    }

    // validar com a api
    if (this.loginForm.valid) {
      const usuario = this.loginForm.value;
      this.userService.logar(usuario)!.subscribe((response: { sucesso: any; }) => {
        if (response.sucesso) {
          this.router.navigate(['/home']);
        } else {
          this.snackBar.open('Falha na autenticação', 'Usuário ou senha incorretos.', {
            duration: 3000
          });
        }
      });
    }
  }
}