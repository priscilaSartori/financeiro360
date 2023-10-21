import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { navTarefasData, navLazerData, navSaudeData, navFinancasData, navCasaData } from '../../mock/nav-data';
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
  navTarefas = navTarefasData;
  navLazer = navLazerData;
  navSaude = navSaudeData;
  navFinancas = navFinancasData;
  navCasa = navCasaData;
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

  displayPage(event: any) {
    this.homeService.alternarPage(event)
  }
}
