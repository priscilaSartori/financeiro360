import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-sleep-diary',
  templateUrl: './sleep-diary.component.html',
  styleUrls: ['./sleep-diary.component.scss']
})
export class SleepDiaryComponent {
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
