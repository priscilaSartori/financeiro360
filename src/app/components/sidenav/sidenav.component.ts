import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { navFinancasData } from '../../mock/nav-data';
import { Router } from '@angular/router';
import { ISideNavToggle } from 'src/app/interfaces/ISideNavToggle';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
  collapsed: boolean = false;
  navFinancas = navFinancasData;
  page: string = ''

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    });
  }

  // Método para atualizar a variável no serviço
  toggleCollapse() {
    this.homeService.alternarCollapsed();
  }

  displayHome(event: any) {
    this.homeService.alternarPage(event)
    this.toggleCollapse()
  }

  displayPage(event: any) {
    this.homeService.alternarPage(event)
    if (this.collapsed === true) {
      this.toggleCollapse()
    }
  }
}
