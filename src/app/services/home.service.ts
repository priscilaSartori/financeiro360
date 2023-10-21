import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  private collapsed: boolean = false;
  private collapsedSubject = new Subject<boolean>();
  private page = '';
  private pageSubject = new Subject<string>();

  // Método para obter a variável compartilhada
  getCollapsed() {
    return this.collapsed;
  }

  getPage() {
    return this.page;
  }

  // Método para alternar a variável compartilhada e notificar os observadores
  alternarCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedSubject.next(this.collapsed);
  }

  alternarPage(event: any) {
    this.page = event;
    this.pageSubject.next(this.page);
  }

  // Método para observar mudanças na variável compartilhada
  obterVariavel1Observable() {
    return this.collapsedSubject.asObservable();
  }

  obterVariavel2Observable() {
    return this.pageSubject.asObservable();
  }
}
