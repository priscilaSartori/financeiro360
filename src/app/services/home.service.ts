// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class HomeService {
//   collapsed: boolean;

//   constructor() { 
//     this.collapsed = false;
//   }

//   toggleCollapseService() {
//     this.collapsed = !this.collapsed;
//   }
// }

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  private collapsed: boolean = false;
  private variavelSubject = new Subject<boolean>();

  // Método para obter a variável compartilhada
  getCollapsed() {
    return this.collapsed;
  }

  // Método para alternar a variável compartilhada e notificar os observadores
  alternarCollapsed() {
    this.collapsed = !this.collapsed;
    this.variavelSubject.next(this.collapsed);
  }

  // Método para observar mudanças na variável compartilhada
  obterVariavelObservable() {
    return this.variavelSubject.asObservable();
  }
}
