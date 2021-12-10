import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
import { StatistiqueService } from './statistique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tabStat: Statistique[] = [];
  constructor(public statService: StatistiqueService) {
    this.tabStat = this.statService.tabStat;
  }
}
