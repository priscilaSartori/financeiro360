import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { IUsuario } from '../interfaces/IUsuario';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private userSubject = new BehaviorSubject<any>(null);
  public user$: Observable<any> = this.userSubject.asObservable();
  retornoMock: any = [];

  constructor( private router: Router ) {
    this.retornoMock = [];
  }

  logar(usuario: IUsuario) {
        return this.mockUsuarioLogin(usuario).pipe(tap((resposta) => {
          if(!resposta.sucesso) return;
          localStorage.setItem('token', btoa(JSON.stringify("TokenQueSeriaGeradoPelaAPI")));
          localStorage.setItem('usuario', btoa(JSON.stringify(usuario)));
          this.router.navigate(['']);
        }));
      }
      private mockUsuarioLogin(usuario: IUsuario): Observable<any> {
        if(usuario.email == 'email@gmail.com' && usuario.password == 123456){
          this.retornoMock.sucesso = true;
          this.retornoMock.usuario = usuario;
          this.retornoMock.usuario.name = 'Ana Silva';
          this.retornoMock.token = "TokenQueSeriaGeradoPelaAPI";
          localStorage.setItem('usuarioLogado', (JSON.stringify(usuario)));
          return of(this.retornoMock);
        }
        this.retornoMock.sucesso = false;
        this.retornoMock.usuario = usuario;
        return of(this.retornoMock);
      }

  logout() {
    this.userSubject.next(null);
  }
}