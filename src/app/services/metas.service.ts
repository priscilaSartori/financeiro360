import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';
import { IProdutos } from '../interfaces/IProdutos';
import { IMeta } from '../interfaces/IFinancesServices';

@Injectable({
  providedIn: 'root'
})
export class MetasService {
  meta: IMeta[] = [];
  
  constructor() { };

  private metaSubject = new Subject<object[]>();

  getObservableMetas() {
    return this.metaSubject.asObservable();
  }
  
  getItemMeta() {
    this.meta = JSON.parse(localStorage.getItem('meta') || '[]');
    return this.meta;
  }

  addItemMeta(compra: IMeta) {
    this.meta = JSON.parse(localStorage.getItem('meta') || '[]');
    this.meta.push(compra);
    localStorage.setItem('meta', JSON.stringify(this.meta));
    this.metaSubject.next(this.meta);
  }

  removeItemMeta(index: any) {
    this.meta = JSON.parse(localStorage.getItem('meta') || '[]');
    this.meta.splice(index, 1);
    localStorage.setItem('meta', JSON.stringify(this.meta));
    this.metaSubject.next(this.meta);
  }
}
