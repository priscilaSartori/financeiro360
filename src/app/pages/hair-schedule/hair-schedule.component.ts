import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-hair-schedule',
  templateUrl: './hair-schedule.component.html',
  styleUrls: ['./hair-schedule.component.scss']
})

export class HairScheduleComponent {
  collapsed: boolean = false;

  constructor(
    public homeService: HomeService,
  ) {}

  ngOnInit() {
    this.homeService.obterVariavel1Observable().subscribe(novaVariavel => {
      this.collapsed = novaVariavel;
    });
  }

}
