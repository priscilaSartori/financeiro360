import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { IUsuario } from 'src/app/interfaces/IUsuario';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  user: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private userService: UserService
    ) {
    this.registrationForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if(this.registrationForm.invalid) {
      return
    }
    // Falta adicionar na api
    var usuario = this.registrationForm.getRawValue() as IUsuario; 
    this.userService.logar(usuario);
    this.router.navigate(['/home']);
  }
}
